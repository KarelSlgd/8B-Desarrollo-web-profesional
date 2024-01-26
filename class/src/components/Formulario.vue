<template>
    <div>

        <b-alert class="mt-3" :show="error !== ''" variant="danger">{{ error }}</b-alert>

        <b-card title="Registro">
            <form action class="form" @submit.prevent="registrar">
                <b-row>
                    <b-col> <label>Nombre:</label> </b-col>
                    <b-col> <label>Apellido Paterno:</label> </b-col>
                    <b-col> <label>Apellido Materno:</label> </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col><input v-model="nombre" class="form-input" type="text" id="nombre" /></b-col>
                    <b-col>
                        <input v-model="apellidoP" class="form-input" type="text" id="apellidoP" />
                    </b-col>
                    <b-col>
                        <input v-model="apellidoM" class="form-input" type="text" id="apellidoM" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col> <label>Ciudad:</label> </b-col>
                    <b-col> <label>Calle:</label> </b-col>
                    <b-col> <label>Numero:</label> </b-col>
                    <b-col> <label>Codigo postal:</label> </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col><input v-model="ciudad" class="form-input" type="text" id="ciudad" /></b-col>
                    <b-col>
                        <input v-model="calle" class="form-input" type="text" id="calle" />
                    </b-col>
                    <b-col>
                        <input v-model="numero" class="form-input" type="number" id="numero" />
                    </b-col>
                    <b-col>
                        <input v-model="cp" class="form-input" type="number" id="cp" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col> <label>Fecha de nacimiento:</label> </b-col>
                    <b-col> <label>Correo electronico:</label> </b-col>
                    <b-col> <label>Numero telefonico:</label> </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col><input v-model="fechaNacimiento" class="form-input" type="date" id="fechaNacimiento"
                            max="" /></b-col>
                    <b-col>
                        <input v-model="correo" class="form-input" type="text" id="correo" />
                    </b-col>
                    <b-col>
                        <input v-model="telefono" class="form-input" type="number" id="telefono" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col> <label>Imagen:</label> </b-col>
                </b-row>
                <b-row>
                    <b-col><input @change="updateFoto($event)" class="form-input" type="file" id="foto"
                            accept="image/*" /></b-col>
                    <b-col>
                        <div class="mt-3">
                            <b-button variant="primary" type="submit">Registrar</b-button>
                        </div>
                    </b-col>
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
        error: ''
    }), methods: {
        registrar() {
            this.error = '';

            if (!this.nombre.trim()) {
                this.error = 'Nombre no puede estar vacío';
                return;
            }

            if (!this.apellidoP.trim()) {
                this.error = 'Apellido Paterno no puede estar vacío';
                return;
            }

            if (this.validarCorreo(this.correo) === false) {
                this.error = 'Correo electrónico no válido';
                return;

            }

            if (this.telefono.toString().length < 10) {
                this.error = 'Número telefónico debe tener 10 dígitos';
                return;
            }

            if (!this.foto) {
                this.error = 'Debe cargar una imagen';
                return;
            }

            const fileSize = this.foto.size / (1024 * 1024);
            if (fileSize > 3) {
                this.error = 'Tamaño de archivo de la fotografía debe ser menor a 3 MB';
                return;
            }
        },
        validarCorreo: function (correo) {
            let re =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(correo);
        },
    },

};
</script>

<style>
input {
    width: 100%;
}
</style>