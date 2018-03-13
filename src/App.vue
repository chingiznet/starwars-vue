<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">STARTWARS</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" active-class="active" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link class="nav-item" tag="li" active-class="active" to="/data/people">
            <a class="nav-link">Persona</a>
          </router-link>
          <router-link class="nav-item" tag="li" active-class="active" to="/data/planets">
            <a class="nav-link">Planets</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <div style="margin:30px 0">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style>
</style>
