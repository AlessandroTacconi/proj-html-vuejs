<script>
import Jumbo from './Jumbo.vue';
import MainDevCourses from './MainDevCourses.vue';
import MainLimitlessLearning from './MainLimitlessLearning.vue';
import MainRecentCourses from './MainRecentCourses.vue';
import MainSubscribe from './MainSubscribe.vue';
import MainPopCourses from './MainPopCourses.vue';

export default {
  name: 'AppMain',
  components: {
    Jumbo,
    MainDevCourses,
    MainLimitlessLearning,
    MainRecentCourses,
    MainSubscribe,
    MainPopCourses,
  },
};
</script>

<template>
  <Jumbo />
  <MainDevCourses />
  <MainLimitlessLearning />
  <MainRecentCourses />
  <MainSubscribe />
  <MainPopCourses />
  <h2>Cards</h2>
  <h2>Investing For Your Future</h2>
</template>

<style scoped></style>
