// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.github.lmos.arc.agents.llm

import io.github.lmos.arc.agents.ArcException
import io.github.lmos.arc.agents.conversation.AssistantMessage
import io.github.lmos.arc.agents.conversation.ConversationMessage
import io.github.lmos.arc.agents.conversation.UserMessage
import io.github.lmos.arc.agents.functions.LLMFunction
import io.github.lmos.arc.core.Result

/**
 * ChatCompleters can take a conversation and adds a new message to the conversation.
 * They are usually connect to a LLM Model, such as, ChatGPT or Gemini.
 */
interface ChatCompleter {
    suspend fun complete(
        messages: List<ConversationMessage>,
        functions: List<LLMFunction>? = null,
        settings: ChatCompletionSettings? = null,
    ): Result<AssistantMessage, ArcException>
}

suspend fun ChatCompleter.complete(
    userMessage: String,
    functions: List<LLMFunction>? = null,
    settings: ChatCompletionSettings? = null,
) = complete(listOf(UserMessage(userMessage)), functions, settings)