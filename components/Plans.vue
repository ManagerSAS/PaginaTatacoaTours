<template>
    <v-container id="Planes" fluid class="mt-15 pt-15">
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center">
                <h1>NUESTROS PLANES</h1>
            </v-col>
        </v-row>
        <v-row v-if="Plans.length" align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="10" lg="9" sm="12">
                 <VueSlickCarousel   v-bind="settings"  justify="center" align="center"> 
                    <div v-for="(Planes, index) in Plans" :key="index">
                        <div class="my-2 mb-2 elevation-5 RoundedCardPlans">
                            <div>
                                <v-img :src="Planes.icon" class="FotoService" alt="">
                                    <div align="start" class="TitlePlan pa-3 ml-2">
                                        {{ Planes.title }}
                                    </div>
                                </v-img>
                            </div>
                            <div align="start"  class="Text-h2 pa-5">
                                Incluye
                            </div>
                            <div align="start" class="DescServices px-5">
                                {{ Planes.desc }}
                            </div>
                            <div align="start" class="TitleService pt-2 px-2 ml-3">
                                {{ Planes.valor | currency}}
                            </div>
                            <div class="my-2 ">
                                <v-btn  elevation="2" rounded color="#67b539" x-small>
                                    Reservar plan
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.slick-prev:before {
    // position: relative !important;
    // left:-10px !important;
    // z-index: 10 !important;
    content: url('../static/arrowLeft.png');
}
.slick-next:before {
    // position: relative !important;
    // right: 0px !important;
    // z-index: 10 !important;
    content: url('../static/arrowRight.png');
}
</style>
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
                title:'Plan #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "2",
                icon:'/Img/Services/1.png',
                type:'Alojamiento',
                title:'Plan #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "3",
                icon:'/Img/Services/1.png',
                type:'Transporte',
                title:'Plan #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "4",
                icon:'/Img/Services/1.png',
                type:'Transporte',
                title:'Plan #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "5",
                icon:'/Img/Services/1.png',
                type:'Guianza',
                title:'Plan #1', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                valor: 50000
            },
            {
                id: "6",
                icon:'/Img/Services/1.png',
                type:'Guianza',
                title:'Plan #1', 
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
                    "slidesToShow": 1,
                    "arrows": false,
                    "infinite": true,
                    "dots": false
                }
            },
            {
            "breakpoint": 375,
                "settings": {
                    "slidesToShow": 1,
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
                    "slidesToShow": 2,
                    "arrows": true,
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