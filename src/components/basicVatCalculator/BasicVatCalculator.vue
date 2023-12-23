<template>
  <BaseCard style="margin: 0.5rem">
    <h2>Basit Hesaplayıcı</h2>
    <BaseSpacer />

    <BaseWrapper mode="custom-grid" style="gap: 0.3rem 1rem">
      <BaseWrapper mode="grid-2" style="gap: 0.3rem 1rem">
        <h4><u>KDV Oranı</u></h4>
        <h4><u>Hariç Tutar</u></h4>
        <BaseInput v-model="rate" type="number" placeholder="Oranı giriniz" :style="inputStyle" />
        <BaseInput
          v-model="vatExcludedValue"
          type="number"
          :placeholder="inputPlaceholder"
          :style="inputStyle"
        />
      </BaseWrapper>

      <BaseWrapper mode="grid-2" style="gap: 0.3rem 1rem">
        <h4><u>KDV Tutarı</u></h4>
        <h4><u>Dahil Tutar</u></h4>
        <BaseInput
          v-model="vatValue"
          type="number"
          :style="inputStyle"
          :placeholder="inputPlaceholder"
        />
        <BaseInput
          v-model="vatIncludedValue"
          type="number"
          :placeholder="inputPlaceholder"
          :style="inputStyle"
        />
      </BaseWrapper>
    </BaseWrapper>
  </BaseCard>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import useVatCalculations from '@/hooks/vatCalculations.js'
const { calculateFromExcluded, calculateFromVat, calculateFromIncluded } = useVatCalculations()

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

const inputStyle = '' //'text-align: center; '
const inputPlaceholder = 'Tutarı giriniz'
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
  max-width: 6.3rem;
}

@media (pointer: none), (pointer: coarse) {
  @media (orientation: portrait) {
    .custom-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
