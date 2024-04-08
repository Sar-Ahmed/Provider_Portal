<template>
  <header class="header fixed-top" v-if="!isLoginPage()">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img
            :src="imagePath"
            class="img-fluid"
            style="max-width: 150px"
            alt="Logo"
          />
        </div>
        <div class="col-md-8">
          <nav class="nav">
            <ul class="list-unstyled d-flex">
              <!-- <li><router-link to="/home">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li> -->
              <li class="dropdown">
                <a href="#" class="dropdown-toggle anchor" data-bs-toggle="dropdown">Features</a>
                <ul class="dropdown-menu">
                  <li><router-link class="anchor text-secondary" to="/education">Education</router-link></li>
                  <li class="dropdown-divider"></li>
                  <li><router-link class="anchor text-secondary" to="/login_logs">Login Logs</router-link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <router-view />
</template>

<script>
import logoImage from "../src/assets/logo.png";
import router from "./routes";

export default {
  name: "App",
  router,
  data() {
    return {
      imagePath: logoImage,
    };
  },
  methods: {
    isLoginPage() {
      console.log(this.$route.path);
      return this.$route.path === "/";
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #f8f9fa !important;
}
.btn {
  background-color: #9f2f2e !important;
  border: none !important;
  padding: 5px 15px 5px 15px !important;
  color: white !important;
}
.form-label {
  color: gray;
  margin-top: 5px;
}
.header {
  background-color: white !important;
}
.anchor {
  color: black !important;
  text-decoration: none !important;
}
.nav {
  margin: 15px;
}
.dropdown-menu {
  padding: 10px 0px 5px 10px !important;
}
</style>
