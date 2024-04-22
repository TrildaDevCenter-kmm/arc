// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.github.lmos.arc.client.gemini

import com.google.cloud.vertexai.api.Content
import com.google.cloud.vertexai.api.FunctionCall
import com.google.cloud.vertexai.api.GenerateContentResponse
import com.google.cloud.vertexai.generativeai.ContentMaker.fromMultiModalData
import com.google.cloud.vertexai.generativeai.PartMaker.fromFunctionResponse
import com.google.cloud.vertexai.generativeai.ResponseHandler
import io.github.lmos.arc.agents.AIException
import io.github.lmos.arc.agents.HallucinationDetectedException
import io.github.lmos.arc.agents.functions.LLMFunction
import io.github.lmos.arc.agents.functions.convertToJsonMap
import io.github.lmos.arc.core.failWith
import io.github.lmos.arc.core.getOrNull
import io.github.lmos.arc.core.result
import org.slf4j.LoggerFactory
import java.util.concurrent.ConcurrentHashMap

/**
 * Finds function calls in ChatCompletions and calls the callback function if any are found.
 */
class FunctionCallHandler(private val functions: List<LLMFunction>) {

    private val log = LoggerFactory.getLogger(javaClass)

    private val _calledFunctions = ConcurrentHashMap<String, LLMFunction>()

    val calledFunctions get(): Map<String, LLMFunction> = _calledFunctions

    fun calledSensitiveFunction() = _calledFunctions.any { it.value.isSensitive }

    suspend fun handle(response: GenerateContentResponse) = result<List<Content>, AIException> {
        val functionCalls = ResponseHandler.getFunctionCalls(response)

        log.debug("Received ${functionCalls.size} tool calls..")
        if (functionCalls.isNotEmpty()) {
            buildList {
                add(ResponseHandler.getContent(response)) // add function_call response from model
                functionCalls.forEach { functionCall ->
                    val functionCallResult =
                        callFunction(
                            functionCall.name,
                            functionCall.args.fieldsMap.mapValues { it.value.stringValue },
                        ) failWith { it }
                    // add function responses
                    add(functionCall.toResponse(functionCallResult))
                }
            }
        } else {
            emptyList()
        }
    }

    private fun FunctionCall.toResponse(response: String) =
        fromMultiModalData(fromFunctionResponse(name, mapOf(name to response))) // TODO check this

    private suspend fun callFunction(functionName: String, functionArguments: Map<String, String>) =
        result<String, AIException> {
            val function = functions.find { it.name == functionName }
                ?: failWith { AIException("Cannot find function called $functionName!") }

            log.debug("Calling LLMFunction $function with $functionArguments...")
            _calledFunctions[functionName] = function
            function.execute(functionArguments) failWith { AIException(cause = it.cause) }
        }

    private fun String.toJson() = result<Map<String, Any?>, HallucinationDetectedException> {
        convertToJsonMap().getOrNull() ?: failWith {
            HallucinationDetectedException("LLM has failed to produce valid JSON for function call! -> ${this@toJson}")
        }
    }
}
