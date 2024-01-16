<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <b-calendar block locale="en-US"></b-calendar>
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
          text: "Reserva de vuelos",
          active: true,
        },
        {
          text: "Asientos Reservados",
          to: "/reservados",
        },
      ],
    };
  },
};
</script>
  
<style></style>