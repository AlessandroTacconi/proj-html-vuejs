<script>
export default {
  name: 'MainPopCourses',
  components: {},
};
</script>

<template>
  <div class="container">
    <!-- TITLE -->
    <h3>Popular Development Courses</h3>
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
              /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
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
              /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
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
        <img src="/img/git.jpg" alt="git" />
        <div class="info">
          <div class="field-courses">Development></div>
          <div class="title-courses">
            The complete iOS 10 & Swift 3 Developer Coourse
          </div>
          <div class="flex info-courses">
            <div class="stars">
              <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                icon="fa-solid fa-star"
              /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
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
        <img src="/img/iphone.jpg" alt="iphone" />
        <div class="info">
          <div class="field-courses">Development></div>
          <div class="title-courses">
            The complete iOS 10 & Swift 3 Developer Coourse
          </div>
          <div class="flex info-courses">
            <div class="stars">
              <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                icon="fa-solid fa-star"
              /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
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
        <img src="/img/android.jpg" alt="android" />
        <div class="info">
          <div class="field-courses">Development></div>
          <div class="title-courses">
            The complete iOS 10 & Swift 3 Developer Coourse
          </div>
          <div class="flex info-courses">
            <div class="stars">
              <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                icon="fa-solid fa-star"
              /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
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
        <img src="/img/x.jpg" alt="x" />
        <div class="info">
          <div class="field-courses">Development></div>
          <div class="title-courses">
            The complete iOS 10 & Swift 3 Developer Coourse
          </div>
          <div class="flex info-courses">
            <div class="stars">
              <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                icon="fa-solid fa-star"
              /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
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
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 90px 20px;

  .cards {
    justify-content: center;
    gap: 20px;
    .card {
      border: 1px solid #e0e0e0;
      img {
        max-width: 100%;
        height: auto;
      }

      .info {
        padding: 20px;

        .field-courses {
          font-size: 0.75rem;
          color: #a2a2a2;
          margin-bottom: 20px;
        }

        .title-courses {
          font-size: 0.9375rem;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        .info-courses {
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          font-size: 0.875rem;
          .stars {
            color: #efb467;
          }
          .old-price {
            font-size: 0.75rem;
            color: #a2a2a2;
            text-decoration: line-through;
          }
        }
      }
    }
  }

  h3 {
    margin-bottom: 40px;
  }
}
</style>
