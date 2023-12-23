<script setup>
import { toRefs } from 'vue'
import AdvancedVatCalculator from '@/components/AdvancedVatCalculator/AdvancedVatCalculator.vue'
import BasicVatCalculator from '@/components/BasicVatCalculator/BasicVatCalculator.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()
const { mode } = toRefs(store)
</script>

<template>
  <TheHeader :mode="mode" />
  <main>
    <BaseWrapper mode="center">
      <Transition appear name="page" mode="out-in">
        <BasicVatCalculator v-if="mode === 'basic'" />
        <AdvancedVatCalculator v-else-if="mode === 'advanced'" />
      </Transition>
    </BaseWrapper>
  </main>
  <TheFooter />
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  padding: 1rem;
  min-height: 86vh;
}

@media (pointer: none), (pointer: coarse) {
  main {
    min-height: 73vh;
  }
}
</style>
