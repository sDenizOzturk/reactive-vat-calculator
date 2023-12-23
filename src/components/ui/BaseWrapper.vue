<template>
  <div class="default" :class="mode"><slot></slot></div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
.default {
  gap: 1rem;
}
.gap-2rem {
  gap: 2rem;
}
.center {
  margin-left: auto;
  margin-right: auto;
}

.vertical-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.align-text-center {
  text-align: center;
}
.horizontal {
  display: flex;
  flex-direction: row;
}
.vertical {
  display: flex;
  flex-direction: column;
}
.max-40rem {
  max-width: 40rem;
}
.grid-2 {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1;
  grid-row-gap: 0;
}
.grid-3 {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1;
  grid-row-gap: 0;
}
</style>
