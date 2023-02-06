<template>
    <v-container fluid id="Contact">
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="10" lg="9" sm="12">
                <v-row align="center" justify="center">
                    <v-col align="center" justify="center">
                        <h1 class="" style="font-size: 30px">CONTÁCTANOS</h1>
                    </v-col>
                </v-row>
                <v-form ref="formContact" autocomplete="off">
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
                                label="Número de celular: " 
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
                                label="Departamento:  " 
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
                                label="Servicio de interés:  " 
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
                        <v-btn elevation="2" rounded color="#35713b"  data-sitekey="6LecuRYkAAAAADxyKKcnmMKNHo5162hjSQcZzKHf" data-callback='onSubmit' 
                            data-action='submit' class="g-recaptch ma-2 white--text text-capitalize" large @click="EnviarFormulario">
                            Enviar Información
                        </v-btn>
                        <!-- <v-btn elevation="2" rounded color="#35713b" data-sitekey="6LdSgx4kAAAAAOXZc0UH31A4DvXhTjPNRMnvb6nv" data-callback='onSubmit' 
                            data-action='submit' class="g-recaptch white--text font-weight-black text-capitalize" large @click="EnviarFormulario">
                            Enviar Información
                        </v-btn> -->
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
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Post from "./Post/Post"
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
            terminos: false,
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
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
            if(this.name !=='' && this.number !== '' && this.email !=='' && this.city !=='' && this.Departamento !=='' && this.service !=='' && this.messageText !== ''&& this.term !==false){
                const data = {
                    NombreCompleto:this.name,
                    Correo:this.email,
                    NCelular:this.number,
                    Ciudad:this.city,
                    Departamento:this.Departamento,
                    Servicio:this.service,
                    Mensaje:this.messageText,
                    fechaRegistro: hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 )  + '-' +  hoy.getDate() + ' '+ hoy.getHours()+ ':' + hoy.getMinutes()+ ':' + hoy.getSeconds(),
                }
                const response = await Post.SendForm(data)
                console.log(response)
                if(response.error === false)
                {
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Su Formualrio fue enviado exitosamente'
                    setTimeout(()=>{ this.snackbar = false },5000)
                    this.$refs.formContact.reset()
                }
                else{
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Por favor intente nuevamente'
                    setTimeout(()=>{ this.snackbar = false },5000)
                }
            }
            else{
                this.loading = false
                this.snackbar = true
                this.colorSnack = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{ this.snackbar = false },3000)
            }
        },
    }
}
</script>