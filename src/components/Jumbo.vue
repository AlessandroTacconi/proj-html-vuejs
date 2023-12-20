<script>
export default {
  name: 'Jumbo',
  components: {},
};
</script>

<template>
  <!-- JUMBO -->
  <div class="jumbo flex">
    <div class="jumbo-text flex container2">
      <h2>Udemy Affiliate Sales</h2>
      <p>Monitize your audience and attract new customers with Udemy!</p>
    </div>
    <div class="image"><img src="/img/slide-1.jpg" alt="foto di gruppo" /></div>
  </div>
  <!-- /JUMBO -->
</template>

<style scoped lang="scss">
.jumbo {
  margin-top: 30px;
  color: white;
  background-color: #ff4450;
  .jumbo-text {
    flex-direction: column;
    padding-left: 20px;
    max-width: 650px;
    gap: 30px;

    h2 {
      font-size: 45px;
    }
  }
}

.image {
  margin-left: auto;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}

img {
  display: block;
  width: 100%;
}
</style>
