import useHelpers from '@/hooks/helpers.js'
const { parseNumber } = useHelpers()

export default function useVatCalculations() {
  const calculateFromExcluded = (_exludedValue, rateRef, vatValueRef, inludedValueRef) => {
    const exludedValue = parseNumber(_exludedValue)
    let vatValue = (exludedValue * parseNumber(rateRef.value)) / 100
    let inludedValue = vatValue + exludedValue

    vatValueRef.value = vatValue.toFixed(2)
    inludedValueRef.value = inludedValue.toFixed(2)
  }

  const calculateFromVat = (_vatValue, rateRef, excludedtValueRef, inludedValueRef) => {
    const vatValue = parseNumber(_vatValue)
    let exludedValue = (vatValue * 100) / parseNumber(rateRef.value)
    let inludedValue = vatValue + exludedValue

    excludedtValueRef.value = exludedValue.toFixed(2)
    inludedValueRef.value = inludedValue.toFixed(2)
  }

  const calculateFromIncluded = (_includedtValue, rateRef, excludedtValueRef, vatValueRef) => {
    const includedtValue = parseNumber(_includedtValue)
    let vatValue =
      (includedtValue * parseNumber(rateRef.value)) / (100 + parseNumber(rateRef.value))
    let exludedValue = includedtValue - vatValue

    excludedtValueRef.value = exludedValue.toFixed(2)
    vatValueRef.value = vatValue.toFixed(2)
  }
  return {
    calculateFromExcluded,
    calculateFromVat,
    calculateFromIncluded
  }
}
