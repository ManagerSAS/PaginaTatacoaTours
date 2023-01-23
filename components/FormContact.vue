<template>
    <v-container fluid id="Contact">
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="10" lg="9" sm="12">
                <v-row align="center" justify="center">
                    <v-col align="center" justify="center">
                        <h1 class="TitlePlan" style="font-size: 30px">CONTÁCTANOS</h1>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col align="center" justify="center" cols="12" lg="4" md="4" sm="12">
                        <v-text-field
                            :rules="nameRules"
                            v-model="name"
                            color="#395730"    
                            class="input"    
                            label="Nombre: " 
                            outlined
                            single-line
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" lg="4" md="4" sm="12">
                        <v-text-field
                            v-model="number"
                            color="#395730"
                            type="number"    
                            class="input"    
                            label="Numero de celular: " 
                            outlined
                            single-line
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" lg="4" md="4" sm="12">
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            color="#395730"
                            type="mail"    
                            class="input"    
                            label="Correo Electrónico: " 
                            outlined
                            single-line
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" lg="4" md="4" sm="12">
                        <v-text-field
                            v-model="city"
                            :rules="nameRules"
                            color="#395730"
                            type="mail"    
                            class="input"    
                            label="Ciudad: " 
                            outlined
                            single-line
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" lg="4" md="4" sm="12">
                        <v-text-field
                            v-model="Departamento"
                            :rules="nameRules"
                            color="#395730"
                            type="mail"    
                            class="input"    
                            label="Municipio:  " 
                            outlined
                            single-line
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" lg="4" md="4" sm="12">
                        <v-text-field
                            v-model="service"
                            :rules="nameRules"
                            color="#395730"
                            type="mail"    
                            class="input"    
                            label="Servicio de intéres:  " 
                            outlined
                            single-line
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" lg="12" md="12" sm="12">
                        <v-textarea
                            v-model="messageText"
                            :rules="nameRules"
                            color="#395730"
                            class="input"    
                            label="Mensaje: " 
                            outlined
                            dense
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row align="center" class="ma-2">
                    <v-checkbox
                        v-model="terminos"
                        hide-details
                        color="white"
                        class="mr-2 mt-0"
                        off-icon="mdi-circle-outline mdi-dark"
                        on-icon="mdi-check-circle mdi-dark"
                        dense
                    ></v-checkbox>
                    <a style="text-decoration: underline white"> Acepto términos y condiciones*</a>
                </v-row>
                <v-row align="center" justify="start" class="pb-5">
                    <!-- <v-btn elevation="2" rounded color="#67b539" data-sitekey="6LecuRYkAAAAADxyKKcnmMKNHo5162hjSQcZzKHf" data-callback='onSubmit' 
                        data-action='submit' class="g-recaptch white--text font-weight-black text-capitalize" large @click="EnviarFormulario">
                        Enviar Información
                    </v-btn> -->
                    <v-btn elevation="2" rounded color="#67b539" data-sitekey="6LdSgx4kAAAAAOXZc0UH31A4DvXhTjPNRMnvb6nv" data-callback='onSubmit' 
                        data-action='submit' class="g-recaptch white--text font-weight-black text-capitalize" large @click="EnviarFormulario">
                        Enviar Información
                    </v-btn>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <v-snackbar
                            class="pb-8"
                            :timeout="3000"
                            :value="snackbar"
                            :color="colorSnack"
                            rounded="pill"
                        > {{ message }} </v-snackbar>
                        <v-progress-circular
                            v-show="loading"
                            indeterminate
                            color="red darken-3"
                        ></v-progress-circular>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
// import Post from "./Post/Post"
export default {
    data(){
        return{
            name:'', 
            number:'',
            email:'',
            city:'',
            Departamento:'',
            service:'',
            messageText:'',
            terms:false,
            snackbar: false,
            message: '',
            preloader: false,
            colorSnack: '',
            loading: false,
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            snackbar: false,
            message: '',
            resCaptcha: false,
            colorSnack: '',
            loading: false,
            terminos: false,
        }
    },
    methods:{
        async EnviarFormulario(){
            this.btn= false
            this.loading = true
            this.snackbar = true

            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            const hoy = new Date();
            if(this.name !=='' && this.number !== '' && this.email !==''&& this.city !==''&& this.Departamento !=='' && this.service !==''&& this.messageText !== ''&& this.term !==false){
                const data = {
                    NombreCompleto:this.name,
                    Correo:this.email,
                    NumeroCelular:this.number,
                    Ciudad:this.Ciudad,
                    Departamento:this.Departamento,
                    service:this.service,
                    fechaRegistro: hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 )  + '-' +  hoy.getDate() + hoy.getHours()+ ':' + hoy.getMinutes()+ ':' + hoy.getSeconds(),
                }
                const response = await Post.SendForm(data)
                console.log(response)
            }
        },
    }
}
</script>