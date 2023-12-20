<script></script>

<template>
  <div class="top">
    <div class="head-all container flex">
      <!-- Lenguage -->
      <form>
        <label for="lenguage"></label>
        <select name="lenguage" id="lenguage">
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Italian">Italian</option>
        </select>
      </form>
      <!-- /Lenguage -->
      <!-- Menu -->
      <div class="right flex">
        <ul class="menu flex">
          <li>home</li>
          <li>Pages</li>
          <li>Course Formats</li>
          <li>Courses</li>
          <li>Demos</li>
        </ul>
        <!-- /Menu -->
        <!-- Social -->
        <ul class="logo flex">
          <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
          <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
          <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
          <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
          <li><font-awesome-icon icon="fa-brands fa-google-plus" /></li>
          <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
        </ul>
        <!-- /Social -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head-all {
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
}
.top {
  border-bottom: 1px solid black;
  color: #afaead;

  select {
    border: 0;
    color: #afaead;
  }
}

li {
  list-style: none;
}

.right {
  gap: 40px;
}
.menu {
  gap: 30px;
}

.logo {
  gap: 15px;
}
</style>
