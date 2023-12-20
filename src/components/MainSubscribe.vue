<script>
export default {
  name: 'Subscribe',
  components: {},
};
</script>

<template>
  <div class="bg">
    <div class="container2 flex">
      <!-- NEWSLETTER -->
      <div class="left">
        <h4>subscribe our newsletter</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          temporibus. Commodi illo inventore dignissimos maiores sapiente itaque
          provident quibusdam ipsam id.
        </p>
      </div>
      <!-- /NEWSLETTER -->
      <!-- EMAIL -->
      <div class="right">
        <h5>Your e-mail Address</h5>
        <div class="email flex">
          <input type="text" placeholder="Enter your email" />
          <button class="subscribe-btn">Subscribe</button>
        </div>
      </div>
      <!-- /EMAIL -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-color: #ff4450;
  color: white;
  .container2 {
    justify-content: center;
    padding: 40px 0 55px;
    gap: 30px;
  }
  .left {
    width: 55%;
    h4 {
      font-weight: bold;
      margin-bottom: 20px;
    }
    p {
      font-size: 0.85rem;
    }
  }
  .right {
    h5 {
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .email {
      align-items: center;

      input {
        min-width: 100%;
        padding: 10px;
        border: none;
      }
      .subscribe-btn {
        background-color: #457992;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .subscribe-btn:hover {
        background-color: #3a6579;
      }
    }
  }
}
</style>
