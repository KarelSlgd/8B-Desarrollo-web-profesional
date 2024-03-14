<template>
  <div class="mt-5">
    <b-button @click="click" block variant="warning">Presioname ADMIN</b-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    click() {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .get("http://localhost:8080/auth/admin/adminProfile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
          });
      } else {
        console.log("no token");
      }
    },
  },
};
</script>

<style>
</style>