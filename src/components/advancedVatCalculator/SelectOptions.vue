<template>
  <BaseCheckBox label="KDV Hariç Tutardan Hesapla" v-model="options.fromVatExcluded" />
  <BaseCheckBox label="KDV Tutarından Hesapla" v-model="options.fromVat" />
  <BaseCheckBox label="KDV Dahil Tutardan Hesapla" v-model="options.fromVatIncluded" />
</template>

<script setup>
import { defineEmits, defineProps, toRefs, watch } from 'vue'

const props = defineProps(['options'])
const { options } = toRefs(props)

const emit = defineEmits(['optionsChanged'])
watch(options, () => {
  emit('optionsChanged', options)
})
</script>
