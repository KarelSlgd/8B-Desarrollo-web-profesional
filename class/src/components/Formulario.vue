<template>
  <div>
    <b-card title="Registro">
      <form action class="form" @submit.prevent="register">
        <b-row>
          <b-col> <label>Nombre:</label> </b-col>
          <b-col> <label>Apellido Paterno:</label> </b-col>
          <b-col> <label>Apellido Materno:</label> </b-col>
        </b-row>
        <b-row>
          <b-col
            ><input
              v-model="nombre"
              class="form-input"
              type="text"
              id="nombre"
              required
              placeholder="Nombre"
          /></b-col>
          <b-col>
            <input
              v-model="apellidoP"
              class="form-input"
              type="text"
              id="apellidoP"
              required
              placeholder="Apellido Paterno"
            />
          </b-col>
          <b-col>
            <input
              v-model="apellidoM"
              class="form-input"
              type="text"
              id="apellidoM"
              placeholder="Apellido Materno"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col> <label>Ciudad:</label> </b-col>
          <b-col> <label>Calle:</label> </b-col>
          <b-col> <label>Numero:</label> </b-col>
          <b-col> <label>Codigo postal:</label> </b-col>
        </b-row>
        <b-row>
          <b-col
            ><input
              v-model="ciudad"
              class="form-input"
              type="text"
              id="ciudad"
              required
              placeholder="Ciudad"
          /></b-col>
          <b-col>
            <input
              v-model="calle"
              class="form-input"
              type="text"
              id="calle"
              required
              placeholder="Calle"
            />
          </b-col>
          <b-col>
            <input
              v-model="numero"
              class="form-input"
              type="number"
              id="numero"
              required
              placeholder="Numero exterior"
            />
          </b-col>
          <b-col>
            <input
              v-model="cp"
              class="form-input"
              type="number"
              id="cp"
              placeholder="62760"
              required
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col> <label>Fecha de nacimiento:</label> </b-col>
          <b-col> <label>Correo electronico:</label> </b-col>
          <b-col> <label>Numero telefonico:</label> </b-col>
        </b-row>
        <b-row>
          <b-col
            ><input
              v-model="fechaNacimiento"
              class="form-input"
              type="date"
              id="fechaNacimiento"
              required
              max=""
          /></b-col>
          <b-col>
            <input
              v-model="correo"
              class="form-input"
              type="text"
              id="correo"
              required
              placeholder="Correo electronico"
            />
          </b-col>
          <b-col>
            <input
              v-model="telefono"
              class="form-input"
              type="number"
              required
              id="telefono"
              placeholder="7771112233"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col> <label>Fotografia:</label> </b-col>
        </b-row>
        <b-row>
          <b-col
            ><input
              @change="updateFoto($event)"
              class="form-input"
              type="file"
              id="foto"
              accept="image/*"
              required
          /></b-col>
        </b-row>
        <b-row>
          <div class="mt-3">
            <b-button pill variant="primary" type="submit">Registrar</b-button>
          </div>
        </b-row>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    nombre: "",
    apellidoM: "",
    apellidoP: "",
    ciudad: "",
    calle: "",
    numero: "",
    cp: "",
    fechaNacimiento: "",
    correo: "",
    telefono: "",
    foto: "",
  }),
  methods: {
    updateFoto(event) {
      this.foto = event.target;
    },
    register() {
      if (
        nombre !== "" &&
        apellidoM !== "" &&
        ciudad !== "" &&
        calle !== "" &&
        numero !== "" &&
        cp !== "" &&
        fechaNacimiento !== "" &&
        !this.validEmail(this.correo) &&
        telefono !== "" &&
        foto !== ""
      ) {
        if (this.telefono.length < 10) {
          alert("El numero telefonico debe tener 10 digitos");
        }
        if (this.foto.files[0].size < 2000) {
          console.log("La imagen debe ser menor a 2MB");
        }
        console.log(this.foto.files[0].size);
        console.log(this.apellidoP);
        console.log(this.nombre);
      }
    },
  },

  validEmail: function (email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
};
</script>

<style>
input {
  width: 100%;
}
</style>