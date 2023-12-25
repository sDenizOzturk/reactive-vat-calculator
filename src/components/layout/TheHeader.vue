<template>
  <header>
    <nav>
      <ul>
        <li>
          <a :class="modeBasicClass" @click="mode = 'basic'">{{ t('basic') }}</a>
        </li>
        <li>
          <a :class="modeAdvancedClass" @click="mode = 'advanced'">{{ t('advanced') }}</a>
        </li>
      </ul>
      <ul>
        <li>
          <a :class="languageTrClass" @click="setLanguage('tr')">Türkçe</a>
        </li>
        <li>
          <a :class="languageEnClass" @click="setLanguage('en')"> English </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()
const { mode, language } = toRefs(store)

import { useI18n } from 'vue-i18n'
import useI18nMessages from '@/hooks/i18nMessages.js'
const { t, locale } = useI18n({
  messages: useI18nMessages().headerMessages,
  useScope: 'global',
  locale: language
})
locale.value = language.value
const setLanguage = (newLan) => {
  locale.value = newLan
  language.value = newLan
}

const languageEnClass = computed(() => {
  if (locale.value === 'en') return 'active'
  else return ''
})
const languageTrClass = computed(() => {
  if (locale.value === 'tr') return 'active'
  else return ''
})
const modeBasicClass = computed(() => {
  if (mode.value === 'basic') return 'active'
  else return ''
})
const modeAdvancedClass = computed(() => {
  if (mode.value === 'advanced') return 'active'
  else return ''
})
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: var(--color2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

header a {
  text-decoration: none;
  color: var(--color3);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  cursor: pointer;
}

a:active,
a:hover,
a.router-link-active,
.active {
  border: 1px solid var(--color3);
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

@media (pointer: none), (pointer: coarse) {
  @media (orientation: portrait) {
    header a {
      padding: 0.75rem 0.75rem;
    }
    li {
      margin: 0 0.25rem;
    }
    header nav {
      width: 96%;
    }
  }
}
</style>
