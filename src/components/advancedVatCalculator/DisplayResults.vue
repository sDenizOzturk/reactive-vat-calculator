<template>
  <Transition name="component">
    <BaseCard style="margin: 0.5rem">
      <h3>{{ title }}</h3>
      <BaseSpacer />
      <BaseWrapper mode="grid-3 width100">
        <h4>
          <u>{{ t('excludedAmount') }}</u>
        </h4>
        <h4>
          <u>{{ t('vatAmount') }}</u>
        </h4>
        <h4>
          <u>{{ t('includedAmount') }}</u>
        </h4>
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

import { useI18n } from 'vue-i18n'
import useI18nMessages from '@/hooks/i18nMessages.js'
const { t } = useI18n({
  messages: useI18nMessages().vatCalculationPageMessages
})

import TheResults from './TheResults.vue'

const props = defineProps({
  rate: Number,
  selectedOptions: Object,
  baseValue: Number
})

const { rate } = toRefs(props)

const title = computed(() => {
  if (rate.value.isCustom) return `%${rate.value.value} (${t('custom')})`
  else return rate.value.label
})
</script>

<style scoped>
h4 {
  max-width: 7rem;
  margin: auto;
}
</style>
