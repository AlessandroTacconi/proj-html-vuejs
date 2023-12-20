<script>
export default {
  name: 'YourFuture',
  components: {},
};
</script>

<template>
  <!-- BG -->
  <div class="bg">
    <div class="container2">
      <!-- DESCRIPTION -->

      <div class="text">
        <h2>Investing for Your Future</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          repellat autem accusamus dolorem iusto, soluta nemo libero molestiae,
          dolores deserunt debitis unde nesciunt doloremque illum enim
          exercitationem animi eos sequi.
        </p>
        <h5>Linda Green</h5>
        <p>Product Manager Apple Inc</p>
      </div>
      <!-- /DESCRIPTION -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url('/img/testimonial.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 70px 0;

  .text {
    width: 740px;
    background-color: white;
    padding: 100px;
    line-height: 1.5;
    h2 {
      margin-bottom: 40px;
    }
    h5 {
      margin-top: 50px;
    }
  }
}
</style>
