<script></script>

<template>
  <div
    class="container d-flex align-items-center py-3 justify-content-evenly principal"
  >
    <!-- Logo -->
    <div>
      <img src="/img/MasterStudy.svg" alt="" />
    </div>
    <!-- /Logo -->
    <!-- Search bar -->
    <div class="d-flex align-items-center find">
      <div>Category</div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="w3-input w3-border-0 bg-secondary-subtle px-3"
          placeholder="Search courses"
        />

        <span class="input-group-text m-glass" id="basic-addon2"
          ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
        /></span>
      </div>
    </div>
    <!-- /Search bar -->
    <!-- Altro -->
    <div class="d-flex plus">
      <div>
        <font-awesome-icon icon="fa-solid fa-bullhorn" />Become an instructor
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-briefcase" />For enterprise
      </div>
    </div>
    <!-- /Altro -->
    <!-- Log in -->
    <div class="d-flex sign align-items-center">
      <div><font-awesome-icon icon="fa-regular fa-user" />Log in</div>
      <button type="button" class="btn btn-danger">Sign in</button>
      <div><font-awesome-icon icon="fa-regular fa-bookmark" /></div>
    </div>
    <!-- /Log in -->
  </div>
</template>

<style lang="scss">
.m-glass {
  background-color: #457992;
  color: white;
}

.find {
  gap: 25px;
}

input {
  border: 0;
}

.principal {
  gap: 50px;
}

.plus,
.sign {
  gap: 30px;
}
</style>
