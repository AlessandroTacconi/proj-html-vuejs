<script>
import Jumbo from './Jumbo.vue';
import MainDevCourses from './MainDevCourses.vue';
import MainLimitlessLearning from './MainLimitlessLearning.vue';
import MainRecentCourses from './MainRecentCourses.vue';
import MainSubscribe from './MainSubscribe.vue';
import MainPopCourses from './MainPopCourses.vue';
import MainStart from './MainStart.vue';

export default {
  name: 'AppMain',
  components: {
    Jumbo,
    MainDevCourses,
    MainLimitlessLearning,
    MainRecentCourses,
    MainSubscribe,
    MainPopCourses,
    MainStart,
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
  <MainStart />
  <h2>Investing For Your Future</h2>
</template>

<style scoped></style>
