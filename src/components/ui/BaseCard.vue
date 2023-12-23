<template>
  <div class="card" :class="mode" :style="customStyle"><slot></slot></div>
</template>

<script>
export default {
  props: ['customStyle', 'mode']
}
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem auto;
  background: var(--color3_1);
}
.white-BG {
  background: var(--color1);
}
.warn {
  animation: border-blink 2s linear infinite;
  border: 0.3rem solid var(--color5);
}
@keyframes border-blink {
  50% {
    border: 0.3rem solid var(--color1);
  }
}
</style>
