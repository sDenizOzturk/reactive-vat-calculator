export default function useI18nMessages() {
  const vatCalculationPageMessages = {
    en: {
      vatRate: 'VAT Rate',
      excludedAmount: 'Excluded Amount',
      includedAmount: 'Included Amount',
      vatAmount: 'VAT Amount',
      basicCalculator: 'Basic Calculator',
      advancedCalculator: 'Advanced Calculator',
      enterTheRate: 'Enter the rate',
      enterTheAmount: 'Enter the amount',
      calculateFromExcludingVatAmount: 'Calculate from the amount excluding VAT',
      calculateFromVatAmount: 'Calculate from the VAT amount',
      calculateFromInludingVatAmount: 'Calculate from the amount including VAT',
      custom: 'Custom'
    },
    tr: {
      vatRate: 'KDV Oranı',
      excludedAmount: 'Hariç Tutar',
      includedAmount: 'Dahil Tutar',
      vatAmount: 'KDV Tutarı',
      basicCalculator: 'Basit Hesaplayıcı',
      advancedCalculator: 'Gelişmiş Hesaplayıcı',
      enterTheRate: 'Oranı giriniz',
      enterTheAmount: 'Tutarı giriniz',
      calculateFromExcludingVatAmount: 'KDV hariç tutardan hesapla',
      calculateFromVatAmount: 'KDV yutarından hesapla',
      calculateFromInludingVatAmount: 'KDV dahil tutardan hesapla',
      custom: 'Özel'
    }
  }
  const headerMessages = {
    en: {
      basic: 'Basic',
      advanced: 'Advanced'
    },
    tr: {
      basic: 'Basit',
      advanced: 'Gelişmiş'
    }
  }
  return {
    vatCalculationPageMessages,
    headerMessages
  }
}
