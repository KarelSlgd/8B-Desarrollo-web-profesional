<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-table striped hover :items="items2"></b-table>
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
          to: "/reservas",
        },
        {
          text: "Asientos Reservados",
          active: true,
        },
      ],
      items2: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>
  
<style></style>