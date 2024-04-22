// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.github.lmos.arc.agents.dsl

import io.github.lmos.arc.core.getOrNull
import io.github.lmos.arc.core.result
import kotlinx.coroutines.asContextElement
import kotlinx.coroutines.withContext
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind.EXACTLY_ONCE
import kotlin.contracts.contract
import kotlin.reflect.KClass

interface BeanProvider {

    suspend fun <T : Any> provide(bean: KClass<T>): T
}

suspend inline fun <reified T : Any> BeanProvider.provideOptional() =
    result<T, MissingBeanException> { provide(T::class) }.getOrNull()

/**
 * Provides beans stored in the current Kotlin Coroutine Context.
 * Optional, it will use the BeanProvider as a fallback.
 */
class CoroutineBeanProvider(private val fallbackBeanProvider: BeanProvider? = null) : BeanProvider {

    companion object {
        private val contextLocal = ThreadLocal.withInitial { emptySet<Any>() }
    }

    override suspend fun <T : Any> provide(type: KClass<T>): T {
        // contextLocal.ensurePresent()
        return contextLocal.get()?.firstOrNull { type.isInstance(it) }?.let { it as T }
            ?: fallbackBeanProvider?.provide(type) ?: throw MissingBeanException("Bean of type $type cannot be located!")
    }

    /**
     * Sets the context for the current Coroutine context.
     */
    @OptIn(ExperimentalContracts::class)
    suspend fun <T> setContext(contextObj: Set<Any>, fn: suspend () -> T): T {
        contract {
            callsInPlace(fn, EXACTLY_ONCE)
        }
        return withContext(contextLocal.asContextElement(value = contextLocal.get() + contextObj)) {
            try {
                fn()
            } finally {
                contextLocal.remove()
            }
        }
    }
}

class MissingBeanException(message: String) : Exception(message)
