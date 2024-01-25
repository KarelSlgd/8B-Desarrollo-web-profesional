<script setup>
</script>

<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="/inicio">Aerolinea Bass</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
          </b-navbar-nav> -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item href="#">Perfil</b-dropdown-item>
              <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container fluid>
      <b-row>
        <b-col md="2" class="sidebar">
          <b-nav vertical variant="primary">
            <b-nav-item>
              <b-link to="/inicio">Inicio</b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link to="/main">Main</b-link>
            </b-nav-item>
             <b-nav-item>
              <b-link to="/formulario">Formulario</b-link>
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col md="10">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped></style>
