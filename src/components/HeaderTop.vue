<script></script>

<template>
  <div class="top">
    <div
      class="d-flex justify-content-between container py-2 align-items-center"
    >
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
      <div class="d-flex">
        <ul class="d-flex menu">
          <li>home</li>
          <li>Pages</li>
          <li>Course Formats</li>
          <li>Courses</li>
          <li>Demos</li>
        </ul>
        <!-- /Menu -->
        <!-- Social -->
        <ul class="d-flex logo">
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

<style lang="scss">
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

.menu {
  gap: 30px;
}

.logo {
  gap: 15px;
}
</style>
