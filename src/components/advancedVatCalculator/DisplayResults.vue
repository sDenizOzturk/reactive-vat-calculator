<template>
  <Transition name="component">
    <BaseCard style="margin: 0.5rem">
      <h3>{{ title }}</h3>
      <BaseSpacer />
      <BaseWrapper mode="grid-3 width100">
        <h4><u>Hariç Tutar</u></h4>
        <h4><u>KDV Tutarı</u></h4>
        <h4><u>Dahil Tutar</u></h4>
      </BaseWrapper>

      <TheResults
        v-if="selectedOptions.fromVatExcluded"
        :baseValue="baseValue"
        :rate="rate"
        mode="fromVatExcluded"
      />
      <TheResults
        v-if="selectedOptions.fromVat"
        :baseValue="baseValue"
        :rate="rate"
        mode="fromVat"
      />
      <TheResults
        v-if="selectedOptions.fromVatIncluded"
        :baseValue="baseValue"
        :rate="rate"
        mode="fromVatIncluded"
      />
    </BaseCard>
  </Transition>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import TheResults from './TheResults.vue'

const props = defineProps({
  rate: Number,
  selectedOptions: Object,
  baseValue: Number
})

const { rate } = toRefs(props)

const title = computed(() => {
  if (rate.value.isCustom) return `%${rate.value.value} (${rate.value.label})`
  else return rate.value.label
})
</script>
