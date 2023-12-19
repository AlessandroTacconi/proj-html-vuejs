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
  <header>
    <HeaderTop />
    <HeaderPrincipal />
    <HeaderBottomVue />
  </header>
</template>

<style scoped lang="scss"></style>
