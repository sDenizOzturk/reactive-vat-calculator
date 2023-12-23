<template>
  <input
    :value="modelValue"
    :type="type"
    @input="inputEvent"
    :placeholder="type === 'phone' ? '+90 (555) 555 55 55' : ''"
    maxlength="60"
  />
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    vuelidateVar: null,
    type: {
      default: 'text'
    },
    insideFormItem: {
      default: false
    }
  },
  methods: {
    inputEvent(event) {
      if (this.type === 'phone') {
        let x = event.target.value
          .replace(/\D/g, '')
          .match(/(\W{0,1})(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

        x[1] = !x[2] ? '' : '+'
        event.target.value =
          x[1] +
          x[2] +
          (x[3] ? ' (' : '') +
          x[3] +
          (x[4] ? ') ' : '') +
          x[4] +
          (x[5] ? ' ' + x[5] : '') +
          (x[6] ? ' ' + x[6] : '')
      }
      if (!this.insideFormItem) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
}
</script>

<style scoped>
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid var(--color3);
  background-color: var(--color3_1);
  padding: 0.3rem;
}

input:focus,
textarea:focus {
  border-color: var(--color2);
  background-color: var(--color1);
  outline: none;
}

.input-error,
.input-error:focus {
  border: 1px dashed var(--color5);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
  text-align: right;
}
</style>
