<script>
export default {
  name: 'Start',
  components: {},
};
</script>

<template>
  <div class="container flex">
    <div class="left sheet flex">
      <div><img src="/img/image-box-1.png" alt="" /></div>
      <div>
        <h2>Become an Instructor</h2>
        <p>
          Teach what you love Masterstudy gives you the tools to create a course
        </p>
        <button class="btn-red">Start Teaching</button>
      </div>
    </div>
    <div class="right sheet flex">
      <div><img src="/img/image-box-2.png" alt="" /></div>
      <div>
        <h2>Access For Business</h2>
        <p>Get unlimited access to 2.500 of top courses for your team.</p>
        <button class="btn-red">Doing Business</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  justify-content: center;
  gap: 30px;
  padding: 75px 20px;
  .sheet {
    max-width: 50%;
    border: 1px solid #e2d9d6;
    padding: 70px 40px;
    gap: 50px;
    p {
      margin: 35px 0;
      font-size: 14px;
    }
  }

  .btn-red {
    margin: 0;
  }
  .btn-red:hover {
    background-color: #46c197;
  }
}
</style>
