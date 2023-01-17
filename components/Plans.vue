<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center">
                <h1>NUESTROS PLANES</h1>
            </v-col>
        </v-row>
        <v-row v-if="Plans.length" align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="10" lg="10" sm="12">
                 <VueSlickCarousel  v-bind="settings" :arrows="false"  justify="center" align="center"> 
                    <div
                    v-for="(Planes, index) in Plans" :key="index" 
                    >
                        <v-card
                        class="ma-4"
                        height="300"
                        width="200"
                        @click="toggle"
                        >
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <v-col>
                                {{Planes}}
                            </v-col>
                        </v-row>
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
        Plans:[],
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