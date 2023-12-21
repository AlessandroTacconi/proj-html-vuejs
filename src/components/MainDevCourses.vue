<script>
import { store } from '../store';
export default {
  name: 'MainPopCourses',
  data() {
    return {
      devCourses: store.courses.filter(
        (course) => course.field === 'Development >'
      ),
    };
  },
};
</script>

<template>
  <div class="container">
    <!-- TITLE -->
    <h3>Popular Development Courses</h3>
    <!-- /TITLE -->
    <!-- cards -->
    <ul class="flex cards">
      <li v-for="course in devCourses" class="card">
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
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 90px 20px;

  h3 {
    margin-bottom: 40px;
  }
}
</style>
