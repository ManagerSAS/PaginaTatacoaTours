<template>
    <div>
        <div class="v-btn--Start elevation-5"   @click="dialogRating= true"  align="center" justify="center" >
            <v-img right width="36" class="Start" src="/start-02.png"></v-img>
        </div>
        <div class="v-btn--politicas elevation-5" align="center" @click="dialogPoliticas= true" justify="center" >
           <v-icon color="#019add" class="shield">mdi-shield-check mdi-36px</v-icon>
        </div>
        <v-dialog
            v-model="dialogPoliticas"
            transition="dialog-bottom-transition"
            max-width="700"
        >
            <v-card class="pa-5"> 
                <v-row justify="center" align="center">
                    <v-col>
                        <h2 class="titulos">Politica de tratamiento de datos</h2>
                        <div class="pa-5">De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y el Decreto 1377 de 2.013, le informamos que sus
                            datos consignados en el presente formulario serán incorporados en una base de datos de responsabilidad de TATACOA TOURS, siendo tratados con las siguientes finalidades: históricos, científicos, estadísticos, gestión administrativa,
                            gestión de clientes, encuestas de opinión, prospección comercial, venta a distancia, gestión de cobros y pagos, gestión
                            económica y contable. De igual modo, se le informa que la base de datos en la que se encuentran sus datos personales es
                            tratada cumpliendo con las medidas de seguridad definidas en la política de tratamiento desarrollada por TATACOA TOURS a la cual se puede tener acceso a través de la página web www.haciendacanaima1.com. Usted puede ejercitar
                            los derechos de acceso, corrección, supresión, revocación o reclamo por infracción sobre sus datos, mediante escrito
                            dirigido a TATACOA TOURS por correo electrónico example@gmail.com, indicando en el asunto el derecho
                            que desea ejercitar, o mediante correo ordinario remitido a la dirección: Km 38 via Puerto Lopez -vereda Indostan
                            Villavicencio, Meta, Colombia
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="dialogRating"
            max-width="800px"
            transition="dialog-bottom-transition"
            >
            <v-card >
                <v-container fluid>

                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center">
                            <h1 class="mb-6 mt-5 titulos" >
                                Califica tu experiencia
                            </h1>
                            <v-rating
                                v-model="rating"
                                background-color="#019add"
                                color="#019add"
                                :empty-icon="emptyicon"
                                :full-icon="fullicon"
                                :half-icon="halficon"
                                half-increments
                                length="5"
                                size="50"
                            ></v-rating>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col cols="12" lg="6" md="6" sm="12">
                            <v-text-field
                                :rules="nameRules"
                                v-model="nombre"
                                color="#395730"    
                                class="input"    
                                label="Nombre: " 
                                outlined
                                single-line
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col  cols="12" lg="6" md="6" sm="12">
                            <v-textarea
                                v-model="comentario"
                                :rules="nameRules"
                                outlined
                                dense
                                :counter="255"
                                :maxlength="255"
                                color="#395730"
                                class="input"
                                label="Mensaje:"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <div justify="center" align="center">
                        <v-btn class="rounded-lg white--text" color="#019add" @click="Enviar">Enivar comentario</v-btn>
                    </div>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-snackbar
                                class="pb-8"
                                :timeout="3000"
                                :value="snackbar"
                                :color="colorSnack"
                                rounded="pill"
                            > {{ message }} </v-snackbar>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-progress-circular
                                v-show="loading"
                                indeterminate
                                color="#019add"
                            ></v-progress-circular>
                        </v-col>
                    </v-row>
                    
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import Post from "./Post/Post"
export default ({
    data: () => ({
        dialogPoliticas: false,
        dialogRating: false,
        snackbar: false,
        message: '',
        colorSnack: '',
        loading: false,
        emptyicon:'mdi-heart-outline',
        fullicon:'mdi-heart',
        halficon:'mdi-heart-half-full',
        rating:'',
        nombre:'',
        comentario:'', 
        nameRules: [
            v => !!v || 'Campo requerido',
        ],
    }),
    methods:{
        async Enviar(){
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            const data = {
                Stars : this.rating,
                Name : this.nombre,
                Message : this.comentario,
            }
            console.log(data)
            const response = await Post.SendComment(data)
            if(response!== true){
                this.loading = false
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'Gracias por dejar su comentario'
                this.dialog = false
            }

        }
    }
})
</script>