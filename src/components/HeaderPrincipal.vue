<script></script>

<template>
  <div class="container flex principal">
    <!-- Logo -->
    <div>
      <img src="/img/MasterStudy.svg" alt="Logo" />
    </div>
    <!-- /Logo -->
    <!-- Search bar -->
    <div class="flex find">
      <div>Category</div>
      <div>
        <input type="text" placeholder="Search courses" />
        <span class="m-glass"
          ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
        /></span>
      </div>
    </div>
    <!-- /Search bar -->
    <!-- Altro -->
    <div class="flex plus">
      <div>
        <font-awesome-icon icon="fa-solid fa-bullhorn" />Become an instructor
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-briefcase" />For enterprise
      </div>
    </div>
    <!-- /Altro -->
    <!-- Log in -->
    <div class="flex sign">
      <div><font-awesome-icon icon="fa-regular fa-user" />Log in</div>
      <button type="button" class="btn btn-danger">Sign in</button>
      <div><font-awesome-icon icon="fa-regular fa-bookmark" /></div>
    </div>
    <!-- /Log in -->
  </div>
</template>

<style scoped lang="scss">
.m-glass {
  background-color: #457992;
  color: white;
}

.find {
  gap: 25px;
  align-items: center;
}

input {
  border: 0;
}

.principal {
  gap: 50px;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0;
}

.plus,
.sign {
  gap: 30px;
  align-items: center;
}
</style>
