<template>
  <BaseCheckBox :label="t('calculateFromExcludingVatAmount')" v-model="options.fromVatExcluded" />
  <BaseCheckBox :label="t('calculateFromVatAmount')" v-model="options.fromVat" />
  <BaseCheckBox :label="t('calculateFromInludingVatAmount')" v-model="options.fromVatIncluded" />
</template>

<script setup>
import { defineEmits, defineProps, toRefs, watch } from 'vue'

import { useI18n } from 'vue-i18n'
import useI18nMessages from '@/hooks/i18nMessages.js'
const { t } = useI18n({
  messages: useI18nMessages().vatCalculationPageMessages
})

const props = defineProps(['options'])
const { options } = toRefs(props)

const emit = defineEmits(['optionsChanged'])
watch(options, () => {
  emit('optionsChanged', options)
})
</script>
