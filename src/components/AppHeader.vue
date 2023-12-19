<script>
import HeaderTop from './HeaderTop.vue';
import HeaderPrincipal from './HeaderPrincipal.vue';
import HeaderBottomVue from './HeaderBottom.vue';

export default {
  name: 'AppHeader',
  components: {
    HeaderTop,
    HeaderPrincipal,
    HeaderBottomVue,
  },
};
</script>

<template>
  <HeaderTop />
  <HeaderPrincipal />
  <HeaderBottomVue />
</template>

<style lang="scss">
@use '../assets/scss/partials/reset' as *;
</style>
