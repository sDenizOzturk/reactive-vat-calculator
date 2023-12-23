<template>
  <div class="footer">
    <div class="leftItem">
      <a :href="targetUrl" target="_blank"><p>© 2023 BINAK</p></a>
    </div>
    <div class="centerItem"></div>
    <div class="rightItem">
      <a :href="targetUrl" target="_blank"> <img class="logo" :src="logoImage" alt="" /></a>
    </div>
  </div>
</template>

<script setup>
import logoImage from '@/assets/logo.webp'
const targetUrl = 'https://binakybs.com'
</script>

<style scoped>
.footer {
  color: var(--color1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  background: var(--color3_9);
}
.leftItem {
  text-align: left;
  margin: 1rem;
}
.centerItem {
  text-align: center;
}
.rightItem {
  text-align: right;
  margin-right: 0.5rem;
  display: flex;
  justify-content: right;
}
p {
  color: var(--color2);
  margin: auto 0;
  filter: drop-shadow(var(--color2_9) 0.1rem 1rem 1rem);
}

.logo {
  height: 4rem;
  margin: 0.5rem;
  margin-left: 1.5rem;
  margin-right: 0.5rem;
  filter: drop-shadow(var(--color2_5) 0.1rem 1rem 1rem);
}

a {
  text-decoration: none;
}

@media screen and (orientation: portrait) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
  }
  .centerItem {
    display: none;
  }
}
</style>
