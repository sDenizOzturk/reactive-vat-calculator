<template>
  <BaseCard style="margin: 0.5rem">
    <h2>{{ t('basicCalculator') }}</h2>
    <BaseSpacer />

    <BaseWrapper mode="custom-grid" :style="wrapperStyle">
      <BaseWrapper mode="grid-2" :style="wrapperStyle">
        <h4>
          <u>{{ t('vatRate') }}</u>
        </h4>
        <h4>
          <u>{{ t('excludedAmount') }}</u>
        </h4>
        <BaseInput
          v-model="rate"
          type="number"
          :placeholder="t('enterTheRate')"
          :style="inputStyle"
        />
        <BaseInput v-model="vatExcludedValue" type="number" :placeholder="inputPlaceholder" />
      </BaseWrapper>

      <BaseWrapper mode="grid-2" :style="wrapperStyle">
        <h4>
          <u>{{ t('vatAmount') }}</u>
        </h4>
        <h4>
          <u>{{ t('includedAmount') }}</u>
        </h4>
        <BaseInput v-model="vatValue" type="number" :placeholder="inputPlaceholder" />
        <BaseInput v-model="vatIncludedValue" type="number" :placeholder="inputPlaceholder" />
      </BaseWrapper>
    </BaseWrapper>
  </BaseCard>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import useVatCalculations from '@/hooks/vatCalculations.js'
const { calculateFromExcluded, calculateFromVat, calculateFromIncluded } = useVatCalculations()

import { useI18n } from 'vue-i18n'
import useI18nMessages from '@/hooks/i18nMessages.js'
const { t } = useI18n({
  messages: useI18nMessages().vatCalculationPageMessages
})

const vatExcludedValue = ref('')
const vatValue = ref('')
const vatIncludedValue = ref('')
const rate = ref(20)

let watchProcessing = false
const doWatchJob = (cb, args) => {
  if (!watchProcessing) {
    watchProcessing = true
    cb(...args)
    nextTick(() => {
      watchProcessing = false
    })
  }
}

watch(rate, (newValue) => {
  rate.value = parseFloat(newValue)
  doWatchJob(calculateFromExcluded, [vatExcludedValue.value, rate, vatValue, vatIncludedValue])
})
watch(vatExcludedValue, (newValue) => {
  doWatchJob(calculateFromExcluded, [newValue, rate, vatValue, vatIncludedValue])
})
watch(vatValue, (newValue) => {
  doWatchJob(calculateFromVat, [newValue, rate, vatExcludedValue, vatIncludedValue])
})
watch(vatIncludedValue, (newValue) => {
  doWatchJob(calculateFromIncluded, [newValue, rate, vatExcludedValue, vatValue])
})

const inputPlaceholder = t('enterTheAmount')

const wrapperStyle = 'gap: 0.3rem 1rem'
</script>

<style scoped>
.custom-grid {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1;
  grid-row-gap: 0;
}
input {
  max-width: 7.5rem;
  margin: auto;
}
h4 {
  max-width: 7.5rem;
  margin: auto;
}

@media (pointer: none), (pointer: coarse) {
  @media (orientation: portrait) {
    .custom-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
