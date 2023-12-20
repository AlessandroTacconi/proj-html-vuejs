<script>
export default {
  name: 'MainPopCourses',
  components: {},
};
</script>

<template>
  <div class="bg">
    <div class="container">
      <!-- TITLE -->
      <div class="titles">
        <h2>Popular Courses</h2>
        <p>Discover our mostpopular courses for self learning</p>
      </div>

      <!-- /TITLE -->

      <div class="flex cards">
        <!-- CARD1 -->
        <div class="card">
          <img src="/img/ipad.jpg" alt="ipad" />
          <div class="info">
            <div class="field-courses">Development></div>
            <div class="title-courses">
              The complete iOS 10 & Swift 3 Developer Coourse
            </div>
            <div class="flex info-courses">
              <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
              <div class="price">
                <div class="old-price">$ 199.99</div>
                <div class="new-price">$ 100</div>
              </div>
            </div>
          </div>
        </div>
        <!-- /CARD1 -->
        <!-- CARD2 -->
        <div class="card">
          <img src="/img/css.jpg" alt="css" />
          <div class="info">
            <div class="field-courses">Development></div>
            <div class="title-courses">
              The complete iOS 10 & Swift 3 Developer Coourse
            </div>
            <div class="flex info-courses">
              <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
              <div class="price">
                <div class="old-price">$ 199.99</div>
                <div class="new-price">$ 100</div>
              </div>
            </div>
          </div>
        </div>
        <!-- /CARD2 -->
        <!-- CARD3 -->
        <div class="card">
          <img src="/img/code.jpg" alt="code" />
          <div class="info">
            <div class="field-courses">Development></div>
            <div class="title-courses">
              The complete iOS 10 & Swift 3 Developer Coourse
            </div>
            <div class="flex info-courses">
              <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
              <div class="price">
                <div class="old-price">$ 199.99</div>
                <div class="new-price">$ 100</div>
              </div>
            </div>
          </div>
        </div>
        <!-- /CARD3 -->
        <!-- CARD4 -->
        <div class="card">
          <img src="/img/colors.jpg" alt="colors" />
          <div class="info">
            <div class="field-courses">Development></div>
            <div class="title-courses">
              The complete iOS 10 & Swift 3 Developer Coourse
            </div>
            <div class="flex info-courses">
              <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
              <div class="price">
                <div class="old-price">$ 199.99</div>
                <div class="new-price">$ 100</div>
              </div>
            </div>
          </div>
        </div>
        <!-- /CARD4 -->
        <!-- CARD5 -->
        <div class="card">
          <img src="/img/letters.jpg" alt="letters" />
          <div class="info">
            <div class="field-courses">Development></div>
            <div class="title-courses">
              The complete iOS 10 & Swift 3 Developer Coourse
            </div>
            <div class="flex info-courses">
              <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
              <div class="price">
                <div class="old-price">$ 199.99</div>
                <div class="new-price">$ 100</div>
              </div>
            </div>
          </div>
        </div>
        <!-- /CARD5 -->
        <!-- CARD6 -->
        <div class="card">
          <img src="/img/ninja.jpg" alt="ninja" />
          <div class="info">
            <div class="field-courses">Development></div>
            <div class="title-courses">
              The complete iOS 10 & Swift 3 Developer Coourse
            </div>
            <div class="flex info-courses">
              <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon
                  icon="fa-solid fa-star"
                /><font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
              <div class="price">
                <div class="old-price">$ 199.99</div>
                <div class="new-price">$ 100</div>
              </div>
            </div>
          </div>
        </div>
        <!-- /CARD6 -->
      </div>
      <div class="button-container flex">
        <button class="square-button">
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </button>
        <button class="square-button">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-color: #f0f4fa;
}
.container {
  padding: 110px 20px 75px;
  .titles {
    text-align: center;
    margin-bottom: 50px;
    rg h2 {
      font-size: 45px;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.85rem;
    }
  }
}

.button-container {
  justify-content: center;
  margin-top: 50px;
}

.square-button {
  padding: 15px 17px;
  text-align: center;
  color: #beb7b4;
  border: 1px solid #beb7b4;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.square-button:hover {
  background-color: #457992;
  border: none;
  color: white;
}
</style>
