<script>
import Jumbo from './Jumbo.vue';
import MainPopCourses from './MainPopCourses.vue';
import MainLimitlessLearning from './MainLimitlessLearning.vue';
import MainRecentCourses from './MainRecentCourses.vue';
import MainSubscribe from './MainSubscribe.vue';

export default {
  name: 'AppMain',
  components: {
    Jumbo,
    MainPopCourses,
    MainLimitlessLearning,
    MainRecentCourses,
    MainSubscribe,
  },
};
</script>

<template>
  <Jumbo />
  <MainPopCourses />
  <MainLimitlessLearning />
  <MainRecentCourses />
  <MainSubscribe />
  <h2>Popular Courses</h2>
  <h2>Cards</h2>
  <h2>Investing For Your Future</h2>
</template>

<style scoped></style>
