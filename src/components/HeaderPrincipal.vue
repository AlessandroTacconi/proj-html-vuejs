<script></script>

<template>
  <div class="container flex">
    <!-- logo -->
    <div class="logo"><img src="/img/MasterStudy.svg" alt="logo" /></div>
    <!-- /logo -->
    <!-- research -->

    <div class="flex research">
      <div class="category">
        <font-awesome-icon icon="fa-solid fa-bars" /><span>category</span>
      </div>
      <div class="search-bar flex">
        <input type="text" placeholder="Search Courses" />
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="mg-glass"
        />
      </div>
    </div>
    <!-- /research -->
    <!-- third section -->

    <div class="flex third-section">
      <div>
        <font-awesome-icon icon="fa-solid fa-bullhorn" /><span
          >Become an instructor</span
        >
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-briefcase" /><span
          >For Enterprise</span
        >
      </div>
    </div>
    <!-- /third section -->
    <!-- log-in -->

    <div class="flex log-in">
      <div>
        <font-awesome-icon icon="fa-regular fa-user" /><span>Log in</span>
      </div>
      <div><button class="btn-red">Sign up</button></div>
      <div>
        <font-awesome-icon icon="fa-regular fa-bookmark" class="bookmark" />
      </div>
    </div>
    <!-- /log-in -->
  </div>
</template>

<style scoped lang="scss">
.container {
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  font-size: 14px;
  color: #1f2c43;
  .logo {
    max-width: 250px;
  }
  span {
    margin-left: 10px;
  }

  .research {
    gap: 15px;
    align-items: center;
    margin-right: 50px;
    .search-bar {
      align-items: center;

      input {
        min-width: 100%;
        padding: 10px;
        border: none;
        background-color: #f0f2f5;
      }
      .mg-glass {
        background-color: #457992;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .mg-glass:hover {
        background-color: #3a6579;
      }
    }
  }
  .third-section {
    gap: 30px;
  }

  .log-in {
    gap: 30px;
    align-items: center;
    .btn-red {
      margin: 0;
    }
    .bookmark {
      font-size: 20px;
    }
  }
}
</style>
