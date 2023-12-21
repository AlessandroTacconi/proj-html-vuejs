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
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Course Formats</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Demos</a></li>
        </ul>
        <!-- /Menu -->
        <!-- Social -->
        <ul class="logo flex">
          <li>
            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon icon="fa-brands fa-google-plus"
            /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
          </li>
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
