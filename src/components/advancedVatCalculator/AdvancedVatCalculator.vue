<template>
  <div>
    <BaseCard style="margin: 0.5rem">
      <h2>{{ t('advancedCalculator') }}</h2>
      <BaseSpacer />
      <SelectOptions
        :options="selectedOptions"
        @options-changed="(options) => (selectedOptions = options)"
      />
      <SelectRates :rates="selectedRates" @rates-changed="(rates) => (selectedRates = rates)" />
      <BaseSpacer />
      <BaseInput
        v-model="baseValue"
        type="number"
        :placeholder="t('enterTheAmount')"
        style="text-align: center"
      />
    </BaseCard>

    <BaseWrapper mode="vertical" style="gap: 0">
      <DisplayResults
        v-for="rate in selectedRates"
        :key="rate"
        v-show="rate.display"
        :rate="rate"
        :selectedOptions="selectedOptions"
        :baseValue="baseValue"
      />
    </BaseWrapper>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import { useI18n } from 'vue-i18n'
import useI18nMessages from '@/hooks/i18nMessages.js'
const { t } = useI18n({
  messages: useI18nMessages().vatCalculationPageMessages
})

import DisplayResults from './DisplayResults.vue'
import SelectOptions from './SelectOptions.vue'
import SelectRates from './SelectRates.vue'

import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()
const selectedOptions = store.selectedOptions
const selectedRates = store.selectedRates

const baseValue = ref()
watch(baseValue, (newVal, oldVal) => {
  if (parseFloat(newVal) > 9999999) {
    baseValue.value = oldVal
  }
})
</script>
