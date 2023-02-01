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
                            <div align="start"  class="Text-h2 pt-5 px-5">
                                Incluye
                            </div>
                            <div align="start" class="DescServices px-5">
                                {{ Planes.desc | truncate(caracateres) }} 
                                <a @click="caracateres = 300" v-if="caracateres <= 122">...ver más</a> 
                                <a @click="caracateres = 122" v-else>...ver menos</a>
                            </div>
                            <div align="start" v-if="Planes.valor !== 0" :class="Planes.classValor">
                                {{ Planes.valor | currency}}
                            </div>
                            <div align="start" v-else style="font-size: 11px" class="TextConsultarAsesor px-2 ml-3">
                                Consulta con un asesor*
                            </div>
                            <div class="my-2 ">
                            <v-btn  elevation="2" target="_blanck" :href="`https://api.whatsapp.com/send?phone=573212759998&text=Hola buen día estoy interesado en este plan ${Planes.title}`" rounded color="#35713b" class="white--text my-3" x-small>
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
    content: url('../static/arrowLeft.png');
}
.slick-next:before {
    content: url('../static/arrowRight.png');
}
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
     components: { VueSlickCarousel },
     filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
    data: () => ({
        filtro:'truncate(caracateres)',
        caracateres:122,
        Plans: [
            {
                id: "1",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/citytourtocaya.jpg',
                title:'City Tour Tocaya', 
                desc:'Tarjeta de asistencia medica, entrada y recorrido museo Paleontológico, entrada casa Museo de Totumo, Recorrido patrimonio cultural villavieja, Hidratacio, Recorrido por el rio magdalena, guia turistica local ',
                valor: 100000
            },
            {
                id: "2",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/circuitotatacoa.jpg',
                title:'Circuito Turístico Tatacoa', 
                desc:'Tarjeta de asistencia medica, transporte interno, piscina agua manantial, almuerzo tipico, visita a miradors, hidratacion Guia turistica local, parada de observacion en sector laberintos, estación de observacion en sector hoyos.',
                valor: 400000
            },
            {
                id: "3",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/tatacoatours.jpg',
                title:'Tatacoa Tours', 
                desc:'Tarjeta de asistencia medica, entrada a museo paleontológico, casa museo dle totumo, piscina en el desierto, observatorio astronómico, 4 comidas en el dia, guia turistica, senderismo, visita miradores, alojamiento en el Tatacoa',
                valor: 330000
            },
            {
                id: "4",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/pasadia.jpg',
                title:'Pasadía Tatacoa Tours (Personal)', 
                desc:'Tarjeta de asistencia medica, piscina en el desierto, observatorio AStronómico, almuerzo tipico, guianza turistica, senderismo, visita a mirador sector laberintos del cuzco, sector hoyos villa de fantasmas, visita a miradores y transporte',
                valor: 200000
            },
            {
                id: "5",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/pasadia.jpg',
                title:'Pasadía Tatacoa Tours (Parejas)', 
                desc:'Tarjeta de asistencia medica, Piscina en el desierto, observatorio AStronómico, almuerzo tipico, guianza turistica, senderismo sector laberintos del cuzco, sector hoyos villa de fantasmas, visita a miradores y transporte',
                valor: 350000
            },
            {
                id: "6",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/tournocturno.jpg',
                title:'Tour nocturno Tatacoa', 
                desc:'Tarjeta de asistencia medica, senderismo sector laberintos del cuzco, guianza turistica, mitos y leyendas, Bebida Sorpresa',
                valor: 100000
            },
            {
                id: "7",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/puentefestivo.jpg',
                title:'Puente festivo en la Tatacoa', 
                desc:'Tarjeta de asistencia medica, city tour villavieja, dos desayunos, dos almuerzos, dos cenas, observacion guiada de astronomia, senderismo sector laberintos del cuzco, sector hoyos, sector xilópalos, visita a miradores, guianza turistica, alojamiemto duracion 3 dias 2 noches ',
                valor: 880000
            },
            {
                id: "8",
                classValor:'TitleService pt-2 px-2 ml-3 ',
                classBtn:'',
                icon:'/Img/Planes/exploraciontour.jpg',
                title:'Tatacoa exploración tour', 
                desc:'Tarjeta de asistencia medica, transporte Neiva - Tatacoa - Neiva Almuerzo típico, Materia de ubicación ( Mapas y telefonos de contacto), un recorrido hecho por tu cuenta, plan especial para aventureros natos',
                valor: 150000
            },
            {
                id: "9",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/aviatour.jpg',
                title:'Avitour Tatacoa', 
                desc:'Guianza turistica ocal, Almuerzo típico transporte interno, visita a las tres coberturas de observacion de aves de la tatacoa, especialmente para amates a la fotografía y observadores de aves',
                valor: 250000
            },
            {
                id: "10",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/villavieja.jpg',
                title:'Villavieja una ventana al universo', 
                desc:'Tarjeta de asistencia medica, presentación cultural, city tour vilavieja, 3 desayunos, 4 Almuerzos, 3 cemas, observación guiada de astronomia, senderismo, circuito turistico Tatacoam piscina en el desierto, cabalgata, visita miradores, guianza turistica, transporte, alojamiento, duracion 4 dias 3 noches',
                valor: 0
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