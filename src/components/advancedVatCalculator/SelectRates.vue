<template>
  <BaseWrapper mode="horizontal vertical-center">
    <BaseWrapper mode="horizontal vertical-center" v-for="(rate, key) in rates" :key="rate">
      <BaseCheckBox
        style="margin: 0"
        :label="rate.isCustom ? t('custom') : rate.label"
        v-model="rate.display"
      />
      <BaseInput
        v-if="key === 'custom'"
        type="number"
        style="width: 2rem; text-align: center; padding: 0"
        v-model="rate.value"
      />
    </BaseWrapper>
  </BaseWrapper>
</template>

<script setup>
import { defineEmits, defineProps, toRefs, watch } from 'vue'

import { useI18n } from 'vue-i18n'
import useI18nMessages from '@/hooks/i18nMessages.js'
const { t } = useI18n({
  messages: useI18nMessages().vatCalculationPageMessages
})

const props = defineProps(['rates'])
const { rates } = toRefs(props)

const emit = defineEmits(['ratesChanged'])
watch(rates, () => {
  emit('ratesChanged', rates)
})
</script>
