<script setup>
</script>

<template>
  <div>
    <b-row>
      <b-col>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item>
              <b-link :to="{ name: 'inicio' }">Opc</b-link>
            </b-nav-item>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-sidebar
          id="sidebar-right"
          title="Sidebar"
          no-close-on-route-change=1
          z-index="-1"
        >
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <b-img
              src="https://picsum.photos/500/500/?image=54"
              fluid
              thumbnail
            ></b-img>
          </div>
        </b-sidebar>
      </b-col>
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped></style>
