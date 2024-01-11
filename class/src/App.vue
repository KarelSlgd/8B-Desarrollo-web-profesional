<script setup>
</script>

<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>

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
    </div>
    <div class="row mt-1">
      <div class="col-3">
        <ul style="list-style: none;">
          <li>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero culpa repellat quibusdam ullam amet
                veritatis id alias dolor sunt libero harum nisi, vitae ex, sint earum illo, rerum necessitatibus.
              </p>
              <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <div>
          <b-card no-body class="overflow-hidden m-5">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
