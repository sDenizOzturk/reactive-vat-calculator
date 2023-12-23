<template>
  <button v-if="!to" :class="mode" :style="customStyle">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode" :style="customStyle">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    to: {
      type: String,
      required: false,
      default: null
    },
    customStyle: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: var(--color2);
  border: 1px solid var(--color2);
  color: var(--color1);
  cursor: pointer;
  border-radius: 0.95rem;
  margin-right: 0.5rem;
  display: inline-block;
  text-align: center;
  margin: auto 0;
}

a:hover,
a:active,
button:hover,
button:active {
  color: var(--color3);
  background-color: var(--color2_1);
  border-color: var(--color2_1);
}

.flat {
  background-color: transparent;
  color: var(--color2);
  border: none;
}

.outline,
a.router-link-active {
  background-color: transparent;
  border-color: var(--color2_1);
  color: var(--color2_1);
}

.formButton {
  float: right;
  margin: 0.5rem;
}

.text {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: var(--color2);
}
.text:hover {
  background: none;
  color: var(--color2_1);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: var(--color3);
  color: var(--color2);
}
</style>
