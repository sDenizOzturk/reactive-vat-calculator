export default function useHelpers() {
  const parseNumber = (input) => {
    if (typeof input === 'string') {
      return parseFloat(input.replace(',', '.'))
    }
    return input
  }

  const currency = (num) => {
    if (isNaN(num) || num === '') {
      return '0,00'
    }
    return parseNumber(num).toFixed(2).toString().replace('.', ',')
  }

  return {
    parseNumber,
    currency
  }
}
