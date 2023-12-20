<script>
import Jumbo from './Jumbo.vue';
import MainDevCourses from './MainDevCourses.vue';
import MainLimitlessLearning from './MainLimitlessLearning.vue';
import MainRecentCourses from './MainRecentCourses.vue';
import MainSubscribe from './MainSubscribe.vue';
import MainPopCourses from './MainPopCourses.vue';
import MainStart from './MainStart.vue';
import MainYourFuture from './MainYourFuture.vue';

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
    MainYourFuture,
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
  <MainYourFuture />
</template>

<style scoped></style>
