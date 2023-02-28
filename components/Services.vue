<template>
    <v-container fluid id="Services">
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center" class="mt-10">
                <h1 style="color: #019add" class="Titles">NUESTROS SERVICIOS</h1>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col class="Paragraph pa-5" style="color: #515150" align="center" justify="center" cols="12" md="9" lg="8" sm="11">
                ¡Bienvenido! Si estás listo para embarcarte en una gran aventura, éste es el lugar correcto. Aquí puedes dar rienda suelta a tu plan para disfrutar al máximo la experiencia en el Desierto de la Tatacoa.
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="11" lg="10" xl="8" sm="12">
                <v-row align="center" justify="center" class="my-5">
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Guianza')" class="white--text BtnService" elevation="2" rounded color="#019add" large>
                            Servicio de Guianza
                        </v-btn>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Alojamiento')" class="white--text BtnService" elevation="2" rounded color="#019add" large>
                            Servicio de Alojamiento
                        </v-btn>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Transporte')" class="white--text BtnService" elevation="2" rounded color="#019add" large>
                            Servicio de Transporte
                        </v-btn>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" md="3" lg="3" sm="12">
                        <v-btn @click="filter('Alimentacion')" class="white--text BtnService" elevation="2" rounded color="#019add" large>
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
                        <v-card  class="ma-2 Contenhover rounded-lg" height="auto" width="400" rounded elevation="5">
                            <Service :inf="inf"/>
                            <v-btn  elevation="2" @click="Plan(inf)" target="_blanck"  rounded color="#35713b" :class="inf.classBtn" x-small>
                                Agregar a mi plan
                            </v-btn>
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
                        <p class="TitleServices" style="font-size: 15px">Servicio de {{ inf.type }}</p>
                        <v-card  class="ma-2 Contenhover rounded-lg" elevation="5" height="400">
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
                                                style="z-index: 2; text-shadow: 0.1em 0.1em 0.2em black;"
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
                            <div align="start" v-if="inf.valor !== 0" :class="inf.classValor">
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
                <p class="TitlePlan" >Tu plan tiene un costo aproximado de: {{TotalPlan | currency}} 
                    <v-tooltip
                        v-model="show"
                        bottom
                        color="warning"
                        align="center" justify="center"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon v-bind="attrs" v-on="on" color="red">mdi-alert-circle-outline mdi-18px</v-icon>
                        </template>
                        <span align="center" justify="center" >Los precios estan sujetos a verificación <br> por parte de la empresa</span>
                </v-tooltip>  
                </p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="pb-5">
            <v-btn  elevation="2" target="_blanck" v-if="ArmedPlan.length" :href='href' rounded color="#35713b" class="white--text text-capitalize" large>
                HABLAR CON UN ASESOR
            </v-btn>
            <v-btn  elevation="2" v-else target="_blanck" href='https://api.whatsapp.com/send?phone=573212759998&text=Hola, Buen día' rounded color="#35713b" class="white--text text-capitalize" large>
                HABLAR CON UN ASESOR
            </v-btn>
        </v-row>
    </v-container>
</template>
<script>

export default {
    data() {
        return{
            show: false,
        }
    },
    components:{
        Service: () => import('@/components/Services/Service'),
    },
    data: () => ({
        ArmedPlan:[],
        planCompleto:'',
        href:'',
        caracateres:120,
        asignar: false,
        informationServices:[],
        TotalPlan:0,
        snackbar: false,
        message: '',
        colorSnack: '',
        information: [
            {
                classValor:'TitleService px-2 ',
                classBtn:'white--text my-2',
                icon:'/Img/Services/Guianza2.jpg',
                type:'Guianza',
                title:'Guianza Publica', 
                desc:'Recorridos por sector Laberintos del Cuzco (Mirador Cuzco, La Torre, entre otros atractivos), salidas de observatorio y Hostal Laberintos del Cuzco, en horarios: 07:00 Am, 07:00Am, 11:00Am, 01:00 Pm, 03:00 Pm y 05:00 Pm. Con mínimo 6 personas inicia el servicio.',
                valor: 7000
            },
            {
                classValor:'TitleService pt-2 px-2 my-0',
                classBtn:'white--text my-3',
                icon:'/Img/Services/Guianza4.jpg',
                type:'Guianza',
                title:'Guianza Privada', 
                desc:'Visita a los miradores naturales de Miguelito, Cardón y Ventanas, recorrido por sector Laberintos del Cuzco, sector Hoyos Fantasmas, charlas, recorrido por Villavieja, duración de 4 a 6 horas.',
                valor: 120000
            },
            {
                classValor:'TitleService pt-2 px-2 my-0',
                classBtn:'white--text my-3',
                icon:'/Img/Services/Guianza1.jpg',
                type:'Guianza',
                title:'Guianza grupal Cuzco', 
                desc:'Recorrido por sector Laberintos del Cuzco (mirador del Cuzco, La Torre, cementerio de los fósiles y Cárcavas), valor de grupo entre 10 y 30 personas.',
                valor: 90000
            },
            {
                classValor:'TitleService pt-2 px-2 my-0',
                classBtn:'white--text my-3',
                icon:'/Img/Services/Guianza2.jpg',
                type:'Guianza',
                title:'Guianza grupal Cuzco', 
                desc:'Recorrido por sector Laberintos del Cuzco (mirador del Cuzco, La Torre, cementerio de los fósiles y Cárcavas), valor de grupo más de 31 personas.',
                valor: 150000
            },
            {
                classValor:'TitleService px-2 my-2',
                classBtn:'white--text my-2',
                icon:'/Img/Services/Guianza5.jpg',
                type:'Guianza',
                title:'Guianza grupal Hoyos', 
                desc:'Recorrido por sector Laberintos Hoyos (Los Altares, Valle Fantasma y piscina), valor de grupo entre 10 y 30 personas.',
                valor: 70000
            },
            {
                classValor:'TitleService px-2 my-2',
                classBtn:'white--text my-2',
                icon:'/Img/Services/Hoyos-2.jpg',
                type:'Guianza',
                title:'Guianza grupal Hoyos', 
                desc:'Recorrido por sector Laberintos hoyos (los Altares, Valle Fantasma y piscina), valor de grupo más de 31 personas.',
                valor: 120000
            },
            {
                classValor:'TitleService pt-2 px-2 my-0',
                classBtn:'white--text my-3',
                icon:'/Img/Services/Xilopalos.jpg',
                type:'Guianza',
                title:'Guianza grupal Xilópalos', 
                desc:'Recorrido por sector Valle de los Xilópalos (mirador Xilópalos, paso de la Señorita y casa campestre), el recorrido tiene una duración de 2 horas y 30 minutos, valor de grupo entre 10 y 30 personas.',
                valor: 120000,
            },
            {
                classValor:'TitleService pt-2 px-2 my-0',
                classBtn:'white--text my-3',
                icon:'/Img/Services/Xilopalos2.jpg',
                type:'Guianza',
                title:'Guianza grupal Xilópalos', 
                desc:'Recorrido por sector Valle de los Xilópalos (mirador Xilópalos, paso de la Señorita y casa campestre), el recorrido tiene una duración de 2 horas y 30 minutos, valor de grupo más 31 personas.',
                valor: 220000
            },    
            {
                classValor:'TitleService pt-2 px-2 ',
                classBtn:'white--text my-2',
                icon:'/Img/Services/Alojamiento2.jpg',
                type:'Alojamiento',
                title:'Alojamiento Parejas', 
                desc:'Incluye: Desayuno, parqueadero, ventilador con energía  solar y baño privado.',
                valor: 90000
            },
            {
                classValor:'TitleService pt-2 px-2',
                classBtn:'white--text my-2',
                icon:'/Img/Services/Alojamiento1.jpg',
                type:'Alojamiento',
                title:'Alojamiento multiple', 
                desc:'Incluye: Parqueadero, ventilador con energía solar y baño privado. (Valor por persona).',
                valor: 35000
            }, 
            {
                classValor:'TitleService pt-2 px-2',
                classBtn:'white--text my-3',
                icon:'/Img/Services/alimento1.jpg',
                type:'Alimentacion',
                title:'1 Comida', 
                desc:'Incluye solo una comida en el día ya sea desayuno, almuerzo o cena.',
                valor: 0
            },
            {
                classValor:'TitleService pt-2 px-2',
                classBtn:'white--text my-3',
                icon:'/Img/Services/alimento2.jpg',
                type:'Alimentacion',
                title:'2 Comida', 
                desc:'Incluye dos comidas en el día ya sea desayuno, almuerzo o cena.',
                valor: 0
            },
            {
                classValor:'TitleService pt-2 px-2',
                classBtn:'white--text my-3',
                icon:'/Img/Services/alimento1.jpg',
                type:'Alimentacion',
                title:'3 Comida', 
                desc:'Incluye las tres comidas del día desayuno, almuerzo y cena.',
                valor: 0
            },
            {
                classValor:'TitleService pt-2 px-2',
                classBtn:'white--text my-3',
                icon:'/Img/Services/transporte-privado.jpg',
                type:'Transporte',
                title:'Transporte', 
                desc:'Pregunta por el servicio de transporte particular o privado.',
                valor: 0
            },
            {
                classValor:'TitleService pt-2 px-2',
                classBtn:'white--text my-5',
                icon:'/Img/Services/transporte-publico.jpg',
                type:'Transporte',
                title:'Transporte', 
                desc:'Pregunta por el servicio de transporte Publico.',
                valor: 0
            },
            {
                classValor:'TitleService pt-2 px-2',
                classBtn:'white--text my-3',
                icon:'/Img/Services/motocarro.jpg',
                type:'Transporte',
                title:'Transporte', 
                desc:'Pregunta por el servicio de transporte en motocarro o motocicleta.',
                valor: 0
            },
        ],
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
