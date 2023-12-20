<script>
export default {
  name: 'Limitless Learning',
  components: {},
};
</script>

<template>
  <!-- BG -->
  <div class="bg">
    <div class="container2">
      <!-- DESCRIPTION -->

      <div class="text">
        <h2>Limitless learning, more possibilities</h2>
        <p>
          Online courses open the opportunity for learning to almost anyone,
          regardeless of their scheduling commitments.
        </p>
        <button class="btn-red">Read More</button>
      </div>
      <!-- /DESCRIPTION -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url('/img/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 140px 0;

  .text {
    max-width: 550px;
  }

  h2 {
    margin-bottom: 25px;
    font-size: 45px;
  }
}
</style>
