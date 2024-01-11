<template>
  <div>
    <b-breadcrumb router-component-name="" :items="items"></b-breadcrumb>
    <b-link :to="{ name: 'inicio' }">Opc</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>