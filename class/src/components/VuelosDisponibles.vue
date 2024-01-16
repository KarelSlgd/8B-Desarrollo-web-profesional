<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-tabs content-class="mt-3">
      <b-tab title="Vive Mexico" active>
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </b-tab>
      <b-tab title="Turkey Airplane"><p>I'm the second tab</p></b-tab>
    </b-tabs>
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
          text: "Vuelos Disponibles",
          active: true,
        },
        {
          text: "Lineas de Vuelo",
          to: "/lineas",
        },
      ],
    };
  },
};
</script>
  
<style></style>