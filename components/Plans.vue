<template>
    <v-container id="Planes" fluid class="mt-15 pt-15">
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center">
                <h1>NUESTROS PLANES</h1>
            </v-col>
        </v-row>
        <v-row v-if="Plans.length" align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="11" lg="11" xl="9" sm="12">
                 <VueSlickCarousel   v-bind="settings"  justify="center" align="center"> 
                    <div v-for="(Planes, index) in Plans" :key="index">
                        <Plan :Planes="Planes"/>
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
     components: { 
        VueSlickCarousel,
        Plan: () => import('@/components/Plans/Plan'), 
    },
     filters: {
        truncate: function (text, length) {
            if (text.length > length) {
                return text.substring(0, length);
            } else {
                return text;
            }
        },
    },
    data: () => ({
        filtro:'',
        caracateres:122,
        Plans: [
            {
                id: "1",
                classValor:'TitleService pt-2 px-2 ml-3',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/citytourtocaya.jpg',
                title:'City Tour Tocaya', 
                desc:'Tarjeta de asistencia médica, entrada y recorrido museo paleontológico, entrada a la casa Museo del Totumo, recorrido patrimonio cultural Villavieja, hidratación, recorrido por el río Magdalena, guia turística local.',
                valor: 100000
            },
            {
                id: "2",
                classValor:'TitleService pt-2 px-2 ml-3',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/circuitotatacoa.jpg',
                title:'Circuito Turístico Tatacoa', 
                desc:'Tarjeta de asistencia médica, transporte interno, piscina agua manantial, almuerzo típico, visita al mirador, hidratación, guianza turística local, parada de observación en sector Laberintos, estación de observación en sector Hoyos.',
                valor: 400000
            },
            {
                id: "3",
                classValor:'TitleService pt-2 px-2 ml-3',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/tatacoatours.jpg',
                title:'Tatacoa Tours', 
                desc:'Tarjeta de asistencia médica, entrada al museo paleontológico, entrada a la casa Museo del Totumo, piscina en el desierto, observatorio astronómico, 4 comidas en el día, guia turística, senderismo, visita miradores, alojamiento en el Tatacoa.',
                valor: 330000
            },
            {
                id: "4",
                classValor:'TitleService pt-2 px-2 ml-3',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/pasadia.jpg',
                title:'Pasadía Tatacoa Tours (Personal)', 
                desc:'Tarjeta de asistencia médica, piscina en el desierto, observatorio astronómico, almuerzo típico, guianza turística, senderismo, visita al mirador sector Laberintos del Cuzco, sector Hoyos Villa de Fantasmas, visita a miradores y transporte',
                valor: 200000
            },
            {
                id: "5",
                classValor:'TitleService pt-2 px-2 ml-3',
                icon:'/Img/Planes/pasadia.jpg',
                classBtn:'white--text my-3',
                title:'Pasadía Tatacoa Tours (Parejas)', 
                desc:'Tarjeta de asistencia médica, piscina en el desierto, observatorio astronómico, almuerzo típico, guianza turística, senderismo sector Laberintos del Cuzco, sector Hoyos Villa de Fantasmas, visita a miradores y transporte',
                valor: 350000
            },
            {
                id: "6",
                classValor:'TitleService pt-2 px-2 ml-3',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/tournocturno.jpg',
                title:'Tour nocturno Tatacoa', 
                desc:'Tarjeta de asistencia médica, senderismo sector Laberintos del Cuzco, guianza turística, mitos y leyendas, bebida sorpresa',
                valor: 100000
            },
            {
                id: "7",
                classValor:'TitleService pt-2 px-2 ml-3',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/puentefestivo.jpg',
                title:'Puente Festivo en la Tatacoa', 
                desc:'Tarjeta de asistencia médica, city tour Villavieja, 2 desayunos, 2 almuerzos, 2 cenas, observación guiada de astronomía, senderismo sector Laberintos del Cuzco, sector Hoyos, sector Xilópalos, visita a miradores, guianza turística, alojamiento duración 3 días 2 noches ',
                valor: 880000
            },
            {
                id: "8",
                classValor:'TitleService pt-2 px-2 ml-3 ',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/exploraciontour.jpg',
                title:'Tatacoa Exploración Tour', 
                desc:'Tarjeta de asistencia médica, transporte Neiva - Tatacoa - Neiva, almuerzo típico, material de ubicación (mapas y teléfonos de contacto), un recorrido hecho por tu cuenta, plan especial para aventureros natos',
                valor: 150000
            },
            {
                id: "9",
                classValor:'TitleService pt-2 px-2 ml-3',
                classBtn:'white--text my-3',
                icon:'/Img/Planes/aviatour.jpg',
                title:'Avitour Tatacoa', 
                desc:'Guianza turística local, almuerzo típico transporte interno, visita a las 3 coberturas de observación de aves de la Tatacoa, especialmente para amates a la fotografía y observadores de aves',
                valor: 250000
            },
            {
                id: "10",
                classValor:'TitleService pt-2 px-5 ml-3',
                classBtn:'white--text mt-15',
                icon:'/Img/Planes/villavieja.jpg',
                title:'Villavieja una Ventana al Universo', 
                desc:'Tarjeta de asistencia médica, presentación cultural, city tour Villavieja, 3 desayunos, 4 almuerzos, 3 cenas, observación guiada de astronomía, senderismo, circuito turístico Tatacoa piscina en el desierto, cabalgata, visita miradores, guianza turística, transporte, alojamiento, duración 4 días 3 noches',
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
                },
                {
                "breakpoint": 1200,
                    "settings": {
                        "slidesToShow": 3,
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