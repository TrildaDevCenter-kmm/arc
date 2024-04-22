// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.github.lmos.arc.agents.memory

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class InMemoryMemoryTest {

    @Test
    fun `test store ShortTerm value`() {
        val subject = InMemoryMemory()
        subject.storeShortTerm("owner", "key", "value", "session")
        subject.fetch("owner", "key", "session").let {
            assertThat(it).isEqualTo("value")
        }
    }

    @Test
    fun `test that ShortTerm value can only be retrieved with correct session`() {
        val subject = InMemoryMemory()
        subject.storeShortTerm("owner", "key", "value", "session")
        subject.fetch("owner", "key", "NEW_session").let {
            assertThat(it).isNull()
        }
    }

    @Test
    fun `test remove ShortTerm value`() {
        val subject = InMemoryMemory()
        subject.storeShortTerm("owner", "key", "value", "session")
        subject.storeShortTerm("owner", "key", null, "session")
        subject.fetch("owner", "key").let {
            assertThat(it).isNull()
        }
    }

    @Test
    fun `test store LongTerm value`() {
        val subject = InMemoryMemory()
        subject.storeLongTerm("owner", "key", "value")
        subject.fetch("owner", "key").let {
            assertThat(it).isEqualTo("value")
        }
    }

    @Test
    fun `test that session id is ignored when retrieving LongTerm value`() {
        val subject = InMemoryMemory()
        subject.storeLongTerm("owner", "key", "value")
        subject.fetch("owner", "key", "NEW_session").let {
            assertThat(it).isEqualTo("value")
        }
    }

    @Test
    fun `test remove LongTerm value`() {
        val subject = InMemoryMemory()
        subject.storeLongTerm("owner", "key", "value")
        subject.storeLongTerm("owner", "key", null)
        subject.fetch("owner", "key").let {
            assertThat(it).isNull()
        }
    }
}
