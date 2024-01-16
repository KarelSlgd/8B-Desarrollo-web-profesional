<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div>
      <b-card-group>
        <b-card title="Reservas de vuelo" img-src="" img-alt="Image" img-top>
          <b-link to="/reservas">Ir a...</b-link>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 1 mins ago</small>
          </template>
        </b-card>

        <b-card title="Vuelos disponibles" img-src="" img-alt="Image" img-top>
          <b-link to="/disponibles">Ir a...</b-link>
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card title="Vuelos cancelados" img-src="" img-alt="Image" img-top>
          <b-link to="/cancelados">Ir a...</b-link>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 2 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "LandPage",
          active: true,
        },
      ],
    };
  },
};
</script>

<style></style>
