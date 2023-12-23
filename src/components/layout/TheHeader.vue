<template>
  <header>
    <a :class="mode === 'basic' ? 'active' : ''" @click="mode = 'basic'">Basit</a>
    <a :class="mode === 'advanced' ? 'active' : ''" @click="mode = 'advanced'">Gelişmiş</a>
  </header>
</template>

<script setup>
import { toRefs } from 'vue'
import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()
const { mode } = toRefs(store)
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

</style>
