<script>
import { store } from '../store';
export default {
  name: 'MainPopCourses',
  data() {
    return {
      store,
    };
  },
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
      <!-- cards -->
      <ul class="flex cards">
        <li v-for="course in store.courses.slice(0, 6)" class="card">
          <a href="#">
            <img :src="course.image" :alt="course.title" />
            <div class="info">
              <div class="field-courses">{{ course.field }}</div>
              <div class="title-courses">{{ course.title }}</div>
              <div class="flex info-courses">
                <div class="stars">
                  <font-awesome-icon
                    v-for="star in course.stars"
                    :key="star"
                    icon="fa-solid fa-star"
                  />
                </div>
                <div class="price">
                  <div class="old-price">{{ course.oldPrice }}</div>
                  <div class="new-price">{{ course.newPrice }}</div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <!-- /cards -->

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
  transition: background-color 0.5s;
}

.square-button:hover {
  background-color: #457992;
  border: none;
  color: white;
}
</style>
