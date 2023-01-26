<template>
    <v-container fluid id="Services">
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center" class="mt-10">
                <h1 style="color: #019add" class="Titles">NUESTROS SERVICIOS</h1>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col class="Paragraph pa-5" style="color: #515150" align="center" justify="center" cols="12" md="9" lg="8" sm="11">
                ¡Bienvenidos en esta seccion esta diseñada para que puedas armar tu plan de aventura al Desierto de la Tatacoa! Si estás listo para embarcarte en una gran aventura, ¡estás en el lugar correcto! Aquí encontrarás todo lo que necesitas para planificar tu viaje y disfrutar al máximo de la experiencia.
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="11" lg="8" sm="12">
                <v-row align="center" justify="center" class="my-5">
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Guianza')" class="white--text" elevation="2" rounded color="#019add" large>
                            Servicio de Guianza
                        </v-btn>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Alojamiento')" class="white--text" elevation="2" rounded color="#019add" large>
                            Servicio de Alojamiento
                        </v-btn>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Transporte')" class="white--text" elevation="2" rounded color="#019add" large>
                            Servicio de Transporte
                        </v-btn>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Alimentacion')" class="white--text" elevation="2" rounded color="#019add" large>
                            Servicio de Alimentación
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col align="center"  cols="12" md="11" lg="10" xl="8" sm="12">
                <v-row  align="center">
                    <v-col  align-self="start" cols="12" lg="3" md="4" sm="12" v-for="(inf, index) in information" :key="index">
                        <v-card @click="Plan(inf)" class="ma-2 Contenhover rounded-lg" height="390" rounded elevation="5">
                            <div>
                                <v-img :src="inf.icon" lazy-src="/logo.png" class="FotoService" max-width="500" max-height="200" aspect-ratio="1">
                                    <v-row justify="center">
                                        <template v-slot:placeholder>
                                            <v-row
                                                class="fill-height ma-0"
                                                align="center"
                                                justify="center"
                                            >
                                                <v-progress-circular
                                                indeterminate
                                                color="grey lighten-5"
                                                ></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-row>
                                </v-img>
                            </div>
                            <div align="start" class="TitleService pt-2 px-2">
                                {{ inf.title }}
                            </div>
                            <div align="start" class="DescServices pb-2 px-2">
                                {{ inf.desc }}
                            </div>
                            <div align="start" v-if="inf.valor !== 0" class="TitleService pt-2 px-2">
                                {{ inf.valor | currency}}
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col  style="background-color: white" align="center" class="mb-5" cols="12" md="11" lg="10" xl="8" sm="12">
                <v-row align="center" justify="center">
                    <v-col cols="12" align="center" justify="center">
                        <h1 style="color: #019add" class="Titles">TU PLAN</h1>
                    </v-col>
                </v-row>
                <v-row v-if="ArmedPlan.length">
                    <v-col  align-self="start" cols="12" lg="3" md="3" sm="12" v-for="(inf, index) in ArmedPlan" :key="index">
                        <p class="TitlePlan" style="font-size: 15px">Servicio de {{ inf.type }}</p>
                        <v-card  class="ma-2 Contenhover rounded-lg" elevation="5" height="390">
                            <div>
                                <v-img :src="inf.icon" class="FotoService" alt="" max-width="500" max-height="200">
                                    <v-row justify="center">
                                        <v-app-bar
                                        flat
                                        color="rgba(0, 0, 0, 0)"
                                        >
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular
                                                    indeterminate
                                                    color="grey lighten-5"
                                                    ></v-progress-circular>
                                                </v-row>
                                            </template>
                                            <v-spacer></v-spacer>
    
                                            <v-btn
                                                style="z-index: 2"
                                                color="white"
                                                icon
                                                @click="DeletePlan(inf)"
                                            >
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </v-app-bar>
                                    </v-row>
                                </v-img>
                            </div>
                            <div align="start" class="TitleService pt-2 px-2">
                                {{ inf.title }}
                            </div>
                            <div align="start" class="DescServices pb-2 px-2">
                                {{ inf.desc }}
                            </div>
                            <div align="start" v-if="inf.valor !== 0" class="TitleService pt-2 px-2">
                                {{ inf.valor | currency}}
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <v-snackbar
                    class="pb-8"
                    :timeout="3000"
                    :value="snackbar"
                    :color="colorSnack"
                    rounded="pill"
                > 
                    {{ message }} 
                </v-snackbar>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col v-if="TotalPlan!=''" align="center" justify="center">
                <p class="TitlePlan" >Tu plan tiene un costo aproximado de: {{TotalPlan | currency}}*</p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="pb-5">
            <v-btn  elevation="2" target="_blanck" v-if="ArmedPlan.length" :href='href' rounded color="#35713b" class="white--text text-capitalize font-weight-black" large>
                Hablar con un asesor
            </v-btn>
            <v-btn  elevation="2" v-else target="_blanck" href='https://api.whatsapp.com/send?phone=573212759998&text=Hola, Buen día' rounded color="#35713b" class="white--text text-capitalize font-weight-black" large>
                Hablar con un asesor
            </v-btn>
        </v-row>
    </v-container>
</template>
<script>

export default {
    data: () => ({
        ArmedPlan:[],
        planCompleto:'',
        href:'',
        informationServices:[],
        TotalPlan:0,
        snackbar: false,
        message: '',
        colorSnack: '',
        information: [
            {
                id: "1",
                icon:'/Img/Services/Alojamiento2.jpg',
                type:'Alojamiento',
                title:'Alojamiento Parejas', 
                desc:'Incluye: Desayuno, parqueadero, ventilador con energia solar y baño privado',
                valor: 90000
            },
            {
                id: "2",
                icon:'/Img/Services/Alojamiento1.jpg',
                type:'Alojamiento',
                title:'Alojamiento multiple', 
                desc:'Incluye: parqueadero, ventilador con energia solar y baño privado. (Valor por persona)',
                valor: 35000
            },
            {
                id: "3",
                icon:'/Img/Services/1.png',
                type:'Transporte',
                title:'Transporte', 
                desc:'Pregunta por el servicio de transporte',
                valor: 0
            },
            {
                id: "4",
                icon:'/Img/Services/Guianza1.jpg',
                type:'Guianza',
                title:'Guianza grupal Xilópalos', 
                desc:'Recorrido por sector Valle de los Xilopalos (Mirador Xilópalos, Paso de la señorita y Casa Campestre), el recorrido tiene una duracion de 2 horas y 30 minutos, valor de grupo entre 10 y 30 personas',
                valor: 120000,
                valor2: 120000
            },
            {
                id: "5",
                icon:'/Img/Services/Guianza2.jpg',
                type:'Guianza',
                title:'Guianza grupal Xilópalos', 
                desc:'Recorrido por sector Valle de los Xilopalos (Mirador Xilópalos, Paso de la señorita y Casa Campestre), el recorrido tiene una duracion de 2 horas y 30 minutos, valor de grupo más 31 personas',
                valor: 220000
            },
            {
                id: "6",
                icon:'/Img/Services/Guianza3.jpg',
                type:'Guianza',
                title:'Guianza grupal', 
                desc:'Recorrido por sector Laberintos del cuzco (Mirador del cuzco, la torre, Cementerio d elos fósiles y Cárcavas), valor de grupo entre 10 y 30 personas',
                valor: 90000
            },
            {
                id: "7",
                icon:'/Img/Services/Guianza4.jpg',
                type:'Guianza',
                title:'Guianza grupal', 
                desc:'Recorrido por sector Laberintos del cuzco (Mirador del cuzco, la torre, Cementerio d elos fósiles y Cárcavas), valor de grupo más de 31 personas',
                valor: 150000
            },
            {
                id: "8",
                icon:'/Img/Services/Guianza5.jpg',
                type:'Guianza',
                title:'Guianza grupal', 
                desc:'Recorrido por sector Laberintos HOyos (Los Altares, Valle Fantasma y Psicina), valor de grupo entre 10 y 30 personas',
                valor: 70000
            },
            {
                id: "9",
                icon:'/Img/Services/Guianza2.jpg',
                type:'Guianza',
                title:'Guianza grupal', 
                desc:'Recorrido por sector Laberintos HOyos (Los Altares, Valle Fantasma y Psicina), valor de grupo más de 31 personas',
                valor: 120000
            },
            {
                id: "10",
                icon:'/Img/Services/Guianza4.jpg',
                type:'Guianza',
                title:'Guianza Privada', 
                desc:'Visita a los miradortes naturales de Miguelito, Cardón y Ventanas, Recorrido por sector Laberitos del Cuzco, Sector Hoyos Fantasmas, charlas, recorrido por villa vieja, Duracion de 4 a 6 horas',
                valor: 120000
            },
            {
                id: "11",
                icon:'/Img/Services/alimento1.jpg',
                type:'Alimentacion',
                title:'1 Comida', 
                desc:'Incluye solo una comida en el dia ya sea desayuno, almuerzo o cena',
                valor: 0
            },
            {
                id: "12",
                icon:'/Img/Services/alimento2.jpg',
                type:'Alimentacion',
                title:'2 Comida', 
                desc:'Incluye dos comidas en el dia ya sea desayuno, almuerzo o cena',
                valor: 0
            },
            {
                id: "13",
                icon:'/Img/Services/alimento1.jpg',
                type:'Alimentacion',
                title:'3 Comida', 
                desc:'Incluye las tres comidas del dia desayuno, almuerzo o cena',
                valor: 0
            },
        ]
    }),
    created(){
        this.informationServices = this.information;
        this.filter('Guianza')
    },
    methods:{
        filter(type){
            this.information = this.informationServices
            this.information = this.information.filter(
                inf => {
                    return inf.type == type
                }
            )
        },
        all(){
            this.information = this.informationServices
        },
        Plan(datos){
            if(this.ArmedPlan.includes(datos)){
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'El servicio ya esta incluido en Tu plan'

            } else{
                this.ArmedPlan.push(datos)
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'El servicio ha sido agregado a Tu plan'
                setTimeout(()=>{ 
                    this.snackbar = false
                 },2000)
                this.TotalPlan += datos.valor
                this.planCompleto = datos.title + ',' + this.planCompleto
                this.href= "https://api.whatsapp.com/send?phone=573212759998&text=¡Hola! Buen día, Quisiera saber más sobre los siguientes servicios, "+this.planCompleto
            } 
        },
        DeletePlan(data){
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'El servicio se ha elimiando de Tu plan'
            setTimeout(()=>{ 
                    this.snackbar = false
                 },2000)
            const resultado = this.ArmedPlan.filter(item => item.id !== data.id);
            this.ArmedPlan = resultado
            this.TotalPlan -= data.valor
        }
    }
}
</script>
