<template>
    <div>
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center">
                <h1>NUESTROS SERVICIOS</h1>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="9" lg="8" sm="12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo, impedit harum dolorem quis voluptatibus magni dolorum consequatur ullam. Nostrum nemo eaque fuga unde laborum ut officia odit rem in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum fugit ducimus ullam illum voluptatum labore consequuntur ab non dignissimos. Molestiae atque corrupti animi, voluptatem veritatis quos dignissimos eum in.
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                <v-btn  elevation="2" rounded color="accent" large>
                    Servicio de Guianza
                </v-btn>
            </v-col>
            <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                <v-btn  elevation="2" rounded color="accent" large>
                    Servicio de Alojamiento
                </v-btn>
            </v-col>
            <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                <v-btn  elevation="2" rounded color="accent" large>
                    Servicio de Transporte
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col align="center"  cols="12" md="11" lg="11" xl="9" sm="12">
                <v-row  align="center">
                    <v-col  align-self="start" cols="12" lg="4" md="4" sm="12" v-for="(inf, index) in information" :key="index">
                        <v-card  class="ma-2">
                            <div>
                                <!-- <v-img :src="inf.icon" class="FotoPostGrado" alt=""> -->
                                    <div class="overlayPosgrados"></div>
                                    <div  align="start" class="contentPost ml-2 Text-PostGrado">
                                        <div>
                                            <!-- <h4 class="Postgrado">{{inf.title}}</h4> -->
                                        </div>
                                        <div >
                                            <!-- <h4 class="namePosgrado">{{inf.name }}</h4 > -->
                                        </div>
                                    </div>    
                                <!-- </v-img> -->
                            </div>
                            <div align="start" class="mt-2 mb-2">
                                <!-- <p class="Text-Description">{{inf.desc}}</p>  -->
                            </div>
                            <!-- <div :class="inf.margen">
                                <v-btn  hide-details style="border-radius:0;" target="_blanck" :href="inf.pdf"  width="200px" height="30px" color="#fbb03b" outlined dense >
                                    Descargar PDF
                                </v-btn>
                            </div> -->
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center"  cols="12" md="11" lg="11" xl="9" sm="12">
                <v-row align="center" justify="center">
                    <v-col cols="12" align="center" justify="center">
                        <h1>ARMA TU PLAN</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card  class="ma-2">
                            <div>
                                <!-- <v-img :src="inf.icon" class="FotoPostGrado" alt=""> -->
                                    <div class="overlayPosgrados"></div>
                                    <div  align="start" class="contentPost ml-2 Text-PostGrado">
                                        <div>
                                            <!-- <h4 class="Postgrado">{{inf.title}}</h4> -->
                                        </div>
                                        <div >
                                            <!-- <h4 class="namePosgrado">{{inf.name }}</h4 > -->
                                        </div>
                                    </div>    
                                <!-- </v-img> -->
                            </div>
                            <div align="start" class="mt-2 mb-2">
                                <!-- <p class="Text-Description">{{inf.desc}}</p>  -->
                            </div>
                            <!-- <div :class="inf.margen">
                                <v-btn  hide-details style="border-radius:0;" target="_blanck" :href="inf.pdf"  width="200px" height="30px" color="#fbb03b" outlined dense >
                                    Descargar PDF
                                </v-btn>
                            </div> -->
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center">
                <p>Tu plan tiene un costo de: $500.000</p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-btn  elevation="2" rounded color="accent" large>
                Hablar con un asesor
            </v-btn>
        </v-row>
    </div>
</template>
<script>

export default {
    data: () => ({
        information: [
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/GestionAmbientalSostenible.jpg',
                type:'Es',
                title:'Servicio #1', 
                name:'Gestión Ambiental Sostenible', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                pdf:'/PdfPosgrados/Especializaciones/01.Gestion_ambiental_sostenible.pdf'
            },
        ]
    })
}
</script>
