<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="10" lg="9" sm="12">
                <v-row align="center" justify="center">
                    <v-col align="center" justify="center">
                        <h1>CONTÁCTANOS</h1>
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
                            type="mail"    
                            class="input"    
                            label="Mensaje: " 
                            outlined
                            single-line
                            dense
                        ></v-textarea>
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
            colorSnack: '',
            loading: false,
        }
    },
}
</script>