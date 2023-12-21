<script>
export default {
  name: 'HeaderBottom',
  data() {
    return {
      Items: [
        { name: 'Business', icon: 'fa-solid fa-chart-line' },
        { name: 'Design', icon: 'fa-solid fa-palette' },
        { name: 'Development', icon: 'fa-solid fa-gear' },
        { name: 'Lifestyle', icon: 'fa-regular fa-face-grin' },
        { name: 'Office Productivity', icon: 'fa-solid fa-print' },
      ],
    };
  },
};
</script>

<template>
  <div class="bottom">
    <!-- Menu -->
    <ul class="container flex">
      <li v-for="item in Items">
        <a href="#"> <font-awesome-icon :icon="item.icon" /> {{ item.name }}</a>
      </li>
      <!-- <li><font-awesome-icon icon="fa-solid fa-chart-line" /> Business</li>
      <li><font-awesome-icon icon="fa-solid fa-palette" />Design</li>
      <li><font-awesome-icon icon="fa-solid fa-gear" />Development</li>
      <li><font-awesome-icon icon="fa-regular fa-face-grin" />Lifestyle</li>
      <li><font-awesome-icon icon="fa-solid fa-print" />Office Productivity</li> -->
    </ul>
    <!-- /Menu -->
  </div>
</template>

<style scoped lang="scss">
.bottom {
  background-color: #273044;
  color: white;

  ul {
    gap: 55px;
    list-style: none;
    padding: 30px 0;
    justify-content: center;
    a:hover {
      color: #457992;
    }
  }
}
</style>
