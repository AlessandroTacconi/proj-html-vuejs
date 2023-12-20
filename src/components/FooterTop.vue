<script>
export default {
  name: 'FooterTop',
  components: {},
};
</script>

<template>
  <div class="container2 flex">
    <div class="about">
      <h5>About</h5>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        vitae accusamus numquam in id totam rem. Quae non facere cupiditate
        mollitia beatae libero nihil perferendis quam illum, provident
        distinctio quaerat!
      </p>
    </div>
    <div>
      <h5>Contact</h5>
      <div>USA, California 20, First Avenue, California</div>
      <div class="tel">
        <p>Tel.: +1 212 458 300 32</p>
        <p>Tel.: +1 212 458 300 32</p>
      </div>
      <div class="email">info@masterstudy.com</div>
    </div>
    <div>
      <h5>Social Network</h5>
      <div class="social flex">
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
        <font-awesome-icon icon="fa-brands fa-facebook" class="logo" />
      </div>
    </div>
    <div><img src="/img/udemy.jpg" alt="udemy" /></div>
  </div>
</template>

<style scoped lang="scss">
.container2 {
  gap: 50px;
  padding: 60px 0;
  font-size: 12px;
  line-height: 1.5;

  h5 {
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 30px;
  }
  .about {
    max-width: 25%;
  }

  .tel {
    margin: 30px 0;
  }

  .email {
    color: #beb7b4;
  }
  img {
    display: block;
    width: 270px;
    height: auto;
  }

  .social {
    flex-wrap: wrap;
    max-width: 210px;
    gap: 10px;
    .logo {
      font-size: 14px;
      background-color: #3b5998;
      padding: 12px;
      border-radius: 50%;
    }
  }
}
</style>
