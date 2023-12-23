<template>
  <Transition name="component">
    <BaseWrapper mode="grid-3 width100">
      <span :class="mode === 'fromVatExcluded' ? 'semi-bold' : ''">{{ vatExcludedValue }}</span>
      <span :class="mode === 'fromVat' ? 'semi-bold' : ''">{{ vatValue }}</span>
      <span :class="mode === 'fromVatIncluded' ? 'semi-bold' : ''">{{ vatIncludedValue }}</span>
    </BaseWrapper>
  </Transition>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue'
import useVatCalculations from '@/hooks/vatCalculations.js'
const { calculateFromExcluded, calculateFromVat, calculateFromIncluded } = useVatCalculations()

const props = defineProps({
  rate: Number,
  baseValue: Number,
  mode: String
})

const { rate, baseValue, mode } = toRefs(props)

const vatExcludedValue = ref('0,00')
const vatValue = ref('0,00')
const vatIncludedValue = ref('0,00')

watch(baseValue, (newValue) => {
  baseValue.value = parseFloat(newValue)
  if (mode.value === 'fromVatExcluded') {
    vatExcludedValue.value = parseFloat(newValue).toFixed(2)
    calculateFromExcluded(baseValue.value, rate.value, vatValue, vatIncludedValue)
  } else if (mode.value === 'fromVat') {
    vatValue.value = parseFloat(newValue).toFixed(2)
    calculateFromVat(baseValue.value, rate.value, vatExcludedValue, vatIncludedValue)
  } else if (mode.value === 'fromVatIncluded') {
    vatIncludedValue.value = parseFloat(newValue).toFixed(2)
    calculateFromIncluded(baseValue.value, rate.value, vatExcludedValue, vatValue)
  }
})

watch(vatExcludedValue, (newValue) => {
  vatExcludedValue.value = newValue.replace('.', ',')
})
watch(vatValue, (newValue) => {
  vatValue.value = newValue.replace('.', ',')
})
watch(vatIncludedValue, (newValue) => {
  vatIncludedValue.value = newValue.replace('.', ',')
})
</script>
