<script>
import Jumbo from './Jumbo.vue';
import MainPopCourses from './MainPopCourses.vue';

export default {
  name: 'AppMain',
  components: {
    Jumbo,
    MainPopCourses,
  },
};
</script>

<template>
  <Jumbo />
  <MainPopCourses />
  <h2>Limitless learning</h2>
  <h2>Recent Courses</h2>
  <h2>Subscribe</h2>
  <h2>Popular Courses</h2>
  <h2>Cards</h2>
  <h2>Investing For Your Future</h2>
</template>

<style scoped></style>
