<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-jumbotron
      header="BootstrapVue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "LandPage",
          to: "/inicio",
        },
        {
          text: "Vuelos Cancelados",
          active: true,
        },
        {
          text: "Proximos Vuelos",
          to: "/proximos",
        },
      ],
    };
  },
};
</script>
  
<style></style>