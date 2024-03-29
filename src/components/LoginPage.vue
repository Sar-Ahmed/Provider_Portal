<template>
  <div class="container">
    <div class="card shadow">
      <div
        class="card-header bg-danger text-white text-center fw-bold"
        style="font-size: 24px"
      >
        Login to Provider Portal
      </div>
      <div class="card-body">
        <div class="text-center mb-4">
          <img
            :src="imagePath"
            class="img-fluid"
            style="max-width: 200px"
            alt="Logo"
          />
        </div>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="formValues.email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="formValues.password"
            />
          </div>
          <div>
            <button type="submit" class="btn btn-danger">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import logoImage from "../assets/logo.png";

export default {
  data() {
    return {
      imagePath: logoImage,
      formValues: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.formValues);
      axios
        .post("http://127.0.0.1:8000/api/login", this.formValues)
        .then(({ data }) => {
          console.log(data);
          try {
            if (data.status === true) {
              alert("Login Successfully");
              // his.$router.push({ name: 'HelloWorld' })
            } else {
              alert("Login failed");
            }
          } catch (err) {
            alert("Error, please try again");
          }
        });
      this.formValues.email = "";
      this.formValues.password = "";
    },
  },
};
</script>

<style>
.card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
