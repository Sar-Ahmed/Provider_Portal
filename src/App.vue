<template>
  <router-view />
</template>

<script>
import router from "./routes";

export default {
  name: "App",
  router,
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
</style>
