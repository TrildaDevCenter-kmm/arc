// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.github.lmos.arc.scripting.functions

import io.github.lmos.arc.agents.dsl.FunctionDefinitionContext
import io.github.lmos.arc.core.Result
import io.github.lmos.arc.core.failWith
import io.github.lmos.arc.core.result
import io.github.lmos.arc.scripting.ScriptFailedException
import org.slf4j.LoggerFactory
import kotlin.script.experimental.api.EvaluationResult
import kotlin.script.experimental.api.ResultValue
import kotlin.script.experimental.api.ResultWithDiagnostics
import kotlin.script.experimental.api.ScriptDiagnostic
import kotlin.script.experimental.api.ScriptEvaluationConfiguration
import kotlin.script.experimental.api.implicitReceivers
import kotlin.script.experimental.api.valueOrNull
import kotlin.script.experimental.host.toScriptSource
import kotlin.script.experimental.jvmhost.BasicJvmScriptingHost
import kotlin.script.experimental.jvmhost.createJvmCompilationConfigurationFromTemplate

interface FunctionScriptEngine {

    fun eval(script: String, context: FunctionDefinitionContext): Result<ResultValue?, ScriptFailedException>
}

/**
 * Uses the Kotlin Scripting Engine to execute Kotlin Scripts.
 */
class KtsFunctionScriptEngine : FunctionScriptEngine {

    private val log = LoggerFactory.getLogger(javaClass)

    /**
     * Executes the provide the script.
     */
    override fun eval(script: String, context: FunctionDefinitionContext) =
        result<ResultValue?, ScriptFailedException> {
            log.trace("Installing functions from $script...")
            val res = evalScript(script, context)
            val errors = res.reports.getErrors()
            if (errors.isNotEmpty()) failWith { ScriptFailedException(errors.joinToString()) }
            res.valueOrNull()?.returnValue
        }

    private fun List<ScriptDiagnostic>.getErrors(): List<String> = buildList {
        val diagnostics = this@getErrors
        diagnostics.forEach {
            if (it.severity > ScriptDiagnostic.Severity.WARNING) {
                log.warn(it.message + if (it.exception == null) "" else ": ${it.exception}")
                add(it.message)
            }
        }
    }

    private fun evalScript(
        script: String,
        context: FunctionDefinitionContext,
    ): ResultWithDiagnostics<EvaluationResult> {
        val compilationConfiguration = createJvmCompilationConfigurationFromTemplate<ScriptDeps>()
        return BasicJvmScriptingHost().eval(
            script.toScriptSource("functions.script.kts"),
            compilationConfiguration,
            ScriptEvaluationConfiguration {
                implicitReceivers(context)
            },
        )
    }
}
