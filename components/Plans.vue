<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center">
                <h1>NUESTROS PLANES</h1>
            </v-col>
        </v-row>
        <v-row v-if="Plans.length" align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="10" lg="8" sm="12">
                 <VueSlickCarousel  v-bind="settings" :arrows="false"  justify="center" align="center"> 
                    <div v-for="(Planes, index) in Plans" :key="index">
                        <v-card width="300" height="450" class="my-2" style="border-radius: 0 0 25% 10%;">
                            <div>
                                <v-img :src="Planes.icon" class="FotoService" alt="">
                                </v-img>
                            </div>
                            <div align="start" class="TitleService pa-5">
                                Incluye
                            </div>
                            <div align="start" class="DescServices px-5">
                                {{ Planes.desc }}
                            </div>
                            <div align="start" class="TitleService pt-2 px-2">
                                {{ Planes.valor | currency}}
                            </div>
                            <div class="my-2">
                                <v-btn  elevation="2" rounded color="accent" large>
                                    Reservar plan
                                </v-btn>
                            </div>
                        </v-card>
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
     components: { VueSlickCarousel },
    data: () => ({
        Plans: [
            {
                id: "1",
                icon:'/Img/Services/1.png',
                type:'Alojamiento',
                title:'Servicio #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "2",
                icon:'/Img/Services/1.png',
                type:'Alojamiento',
                title:'Servicio #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "3",
                icon:'/Img/Services/1.png',
                type:'Transporte',
                title:'Servicio #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "4",
                icon:'/Img/Services/1.png',
                type:'Transporte',
                title:'Servicio #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "5",
                icon:'/Img/Services/1.png',
                type:'Guianza',
                title:'Servicio #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "6",
                icon:'/Img/Services/1.png',
                type:'Guianza',
                title:'Servicio #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
        ],
        settings:{
        "arrows": true,
        "dots": false,
        "autoplay": true,
        "infinite": true,
        "autoplaySpeed": 4000,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "responsive": [
            {
            "breakpoint": 425,
                "settings": {
                    "arrows": false,
                    "infinite": true,
                    "dots": false
                }
            },
            {
            "breakpoint": 375,
                "settings": {
                    "arrows": false,
                    "infinite": true,
                    "dots": false
                }
            },
            {
            "breakpoint": 414,
                "settings": {
                    "arrows": false,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "infinite": true,
                    "dots": false
                }
            },
            {
            "breakpoint": 720,
                "settings": {
                    "arrows": false,
                    "arrows": false,
                    "infinite": true,
                    "dots": false
                }
            }
        ] 
        }
    }),
  }
</script>