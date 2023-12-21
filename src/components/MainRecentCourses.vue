<script>
import { store } from '../store';

export default {
  name: 'RecentCourses',
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h2>Recent courses</h2>
  <div class="container">
    <div>
      <!-- BUTTONS -->
      <ul class="flex">
        <li><button>All Categories</button></li>
        <li><button>Business</button></li>
        <li><button>Design</button></li>
        <li><button>Development</button></li>
        <li><button>IT & Software</button></li>
        <li><button>Lifestyle</button></li>
        <li><button>Marketing</button></li>
        <li><button>Office Productivity</button></li>
      </ul>
      <!-- /BUTTONS -->
      <!-- CARDS -->
      <ul class="flex cards">
        <li v-for="course in store.courses.slice(0, 12)" class="card">
          <a href="#">
            <img :src="course.image" :alt="course.title" />
            <div class="info">
              <div class="field-courses">{{ course.field }}</div>
              <div class="title-courses">{{ course.title }}</div>
              <div class="flex info-courses">
                <div class="stars">
                  <font-awesome-icon
                    icon="fa-solid fa-star"
                    v-for="star in course.stars.length"
                  />
                  <font-awesome-icon
                    icon="fa-regular fa-star"
                    v-for="star in 5 - course.stars.length"
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
      <!-- /CARDS -->

      <!-- button -->
      <div class="flex btn"><button class="btn-red flex">Show All</button></div>
      <!-- button -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 0 20px;
}

h2 {
  margin-top: 125px;
  text-align: center;
}

.btn {
  justify-content: center;
  margin-bottom: 110px;
}

ul {
  list-style: none;
  justify-content: center;
  margin-bottom: 50px;

  button {
    background-color: transparent;
    color: #457992;
    border: 0;
    border-radius: 50px;
    padding: 15px;
    margin-top: 50px;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #f0f4fa;
    cursor: pointer;
  }
}
</style>
