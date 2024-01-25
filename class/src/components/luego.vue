<template>
  <div>
    <b-container class="mt-2">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col
            ><b-form-group id="nombre" label="Nombre">
              <b-form-input
                id="nombre"
                v-model="form.nombre"
                type="text"
                placeholder="Karel"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="apellidoP" label="Apellido paterno">
              <b-form-input
                id="apellidoP"
                type="text"
                v-model="form.apellidoP"
                placeholder="Mendoza"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="apellidoM" label="Apellido materno">
              <b-form-input
                id="apellidoM"
                type="text"
                v-model="form.apellidoM"
                placeholder="Salgado"
                required
              ></b-form-input> </b-form-group
          ></b-col>
        </b-row>
        <b-row>
          <b-col
            ><b-form-group id="calle" label="Calle">
              <b-form-input
                id="calle"
                v-model="form.calle"
                type="text"
                placeholder="Calle"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="ciudad" label="Ciudad">
              <b-form-input
                id="ciudad"
                type="text"
                v-model="form.ciudad"
                placeholder="Zapata"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="cp" label="Codigo postal">
              <b-form-input
                id="cp"
                v-model="form.cp"
                placeholder="62760"
                type="number"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="numero" label="Numero">
              <b-form-input
                id="numero"
                v-model="form.numero"
                placeholder="5"
                type="number"
                required
              ></b-form-input> </b-form-group
          ></b-col>
        </b-row>
        <b-row>
          <b-col
            ><b-form-group id="fechaNacimiento" label="Fecha de nacimiento">
              <b-form-input
                id="fechaNacimiento"
                v-model="form.fechaNacimiento"
                type="date"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="correo" label="Correo electronico">
              <b-form-input
                id="correo"
                type="email"
                v-model="form.correo"
                placeholder="20213tn076@utez.edu.mx"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="telefono" label="Numero de telefono">
              <b-form-input
                id="telefono"
                type="number"
                v-model="form.telefono"
                placeholder="7771234567"
                required
              ></b-form-input> </b-form-group
          ></b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-file
              v-model="file1"
              :state="Boolean(file1)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            ><b-button class="mt-2" type="submit" variant="primary">Submit</b-button></b-col
          >
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
</style>