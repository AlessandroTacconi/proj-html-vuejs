<script>
export default {
  name: 'FooterBottom',
  components: {},
};
</script>

<template>
  <div class="border">
    <div class="container2 flex">
      <div><img src="/img/footer-logo2.png" alt="" /></div>
      <span>Copyright © 2020. MasterStudy. Theme by StylrmixThemes</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.border {
  border-top: 0.1px solid white;
}
.container2 {
  padding: 25px 0;
  align-items: center;
  gap: 20px;

  img {
    display: block;
    max-width: 25px;
  }
}
</style>
