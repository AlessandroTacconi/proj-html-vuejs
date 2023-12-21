<script>
export default {
  name: 'FooterTop',
  data() {
    return {
      logos: [
        { logo: 'fa-brands fa-facebook', backgroundColor: '#3b5998' },
        { logo: 'fa-brands fa-instagram', backgroundColor: '#c32aa3' },
        { logo: 'fa-brands fa-linkedin', backgroundColor: '#0077b5' },
        { logo: 'fa-brands fa-pinterest', backgroundColor: '#bd081c' },
        { logo: 'fa-brands fa-twitter', backgroundColor: '#1da1f2' },
        { logo: 'fa-brands fa-dribbble', backgroundColor: '#ea4c89' },
        { logo: 'fa-brands fa-google-plus', backgroundColor: '#db4437' },
        { logo: 'fa-brands fa-skype', backgroundColor: '#00aff0' },
      ],
    };
  },
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
      <ul class="social flex">
        <li
          class="logo"
          v-for="logo in logos"
          :style="{ backgroundColor: logo.backgroundColor }"
        >
          <a href="#"> <font-awesome-icon :icon="logo.logo" /></a>
        </li>
      </ul>
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
    max-width: 230px;
    gap: 10px;
    .logo {
      font-size: 1rem;
      width: 45px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      border-radius: 50%;
    }
  }

  li {
    list-style: none;
  }
}
</style>
