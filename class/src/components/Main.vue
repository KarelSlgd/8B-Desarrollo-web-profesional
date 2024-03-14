<template>
  <div class="mt-5">
    <b-row>
      <b-col>
        <h1>Registro</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group label="Nombre" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Username" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.username"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Password" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Aceptar</b-button>
        </b-form>
      </b-col>
      <b-col>
        <h1>Inicio de sesión</h1>
        <b-form @submit="loginSubmit" @reset="onResetLogin" v-if="show">
          <b-form-group label="Username" label-for="input-1">
            <b-form-input
              id="input-4"
              v-model="loginData.username"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input
              id="input-5"
              v-model="loginData.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Aceptar</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <UserAuth />
      </b-col>

      <b-col>
        <UserClient />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import UserAuth from "./UserAuth.vue";
import UserClient from "./UserClient.vue";
export default {
  components: {
    UserAuth,
    UserClient
  },
  data() {
    return {
      form: {
        name: "",
        username: "",
        password: "",
      },
      loginData: {
        username: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.register();
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.username = "";
      this.form.password = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetLogin(event) {
      event.preventDefault();
      this.loginData.username = "";
      this.loginData.password = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    loginSubmit(event) {
      event.preventDefault();
      this.login();
    },
    register() {
      axios
        .post("http://localhost:8080/auth/addNewUser", this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    login() {
      axios
        .post("http://localhost:8080/auth/generateToken", this.loginData)
        .then((response) => {
          let decoded = jwtDecode(response.data);
          localStorage.setItem("token", response.data);
          console.log(decoded);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>