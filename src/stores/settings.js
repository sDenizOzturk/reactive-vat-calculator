import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const selectedOptions = reactive({
      fromVatIncluded: true,
      fromVat: true,
      fromVatExcluded: true
    })

    const selectedRates = reactive({
      _20: {
        value: 20,
        label: '%20',
        display: true
      },
      _10: {
        value: 10,
        label: '%10',
        display: true
      },
      _1: {
        value: 1,
        label: '%1',
        display: true
      },
      custom: {
        value: 18,
        label: 'Özel',
        display: false,
        isCustom: true
      }
    })

    const mode = ref('basic')

    return { selectedOptions, selectedRates, mode }
  },
  { persist: true }
)
