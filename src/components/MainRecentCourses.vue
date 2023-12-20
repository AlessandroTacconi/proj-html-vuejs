<script>
export default {
  name: 'RecentCourses',
  components: {},
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
        <li><button>Office Poductivity</button></li>
      </ul>
      <!-- /BUTTONS -->
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  margin-top: 125px;
  text-align: center;
}

ul {
  list-style: none;
  justify-content: center;
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
