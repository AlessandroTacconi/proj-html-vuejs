<script>
export default {
  name: 'Jumbo',
  components: {},
};
</script>

<template>
  <div class="jumbo flex">
    <div></div>
    <div class="prova"><img src="/img/slide-1.jpg" alt="foto di gruppo" /></div>
  </div>
</template>

<style scoped ang="scss">
.jumbo {
  margin-top: 30px;
  background-color: #ff4450;
}

.prova {
  margin-left: auto;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}

img {
  display: block;
  width: 100%;
}
</style>
