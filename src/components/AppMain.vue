<script>
import Jumbo from './Jumbo.vue';
import MainPopCourses from './MainPopCourses.vue';
import MainLimitlessLearning from './MainLimitlessLearning.vue';
import MainRecentCourses from './MainRecentCourses.vue';

export default {
  name: 'AppMain',
  components: {
    Jumbo,
    MainPopCourses,
    MainLimitlessLearning,
    MainRecentCourses,
  },
};
</script>

<template>
  <Jumbo />
  <MainPopCourses />
  <MainLimitlessLearning />
  <MainRecentCourses />
  <h2>Subscribe</h2>
  <h2>Popular Courses</h2>
  <h2>Cards</h2>
  <h2>Investing For Your Future</h2>
</template>

<style scoped></style>
