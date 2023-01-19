<template>
    <v-container>
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
                            v-model="municipality"
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
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <Gcaptcha @captcha="verifyCaptcha"/>
                    </v-col>
                </v-row>
                <v-row align="center" justify="start" class="pb-5">
                    <v-btn  elevation="2" rounded color="#67b539" class="white--text font-weight-black text-capitalize" large>
                        Enviar Información
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
// import Post from "./Post/Post"
import Gcaptcha from './recaptcha.vue'

export default {
    components:{
        Gcaptcha,
    },
    data(){
        return{
            name:'',
            number:'',
            email:'',
            city:'',
            municipality:'',
            service:'',
            messageText:'',
            terms:false,
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
        }
    },
    methods:{
        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
    }
}
</script>