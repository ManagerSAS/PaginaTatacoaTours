<template>
    <div >
        <v-row align="center" justify="center">
            <v-col cols="12" align="center" justify="center" class="mt-10">
                <h1 style="color: #019add" class="Titles">NUESTROS SERVICIOS</h1>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col class="Paragraph" style="color: #515150" align="center" justify="center" cols="12" md="9" lg="8" sm="12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo, impedit harum dolorem quis voluptatibus magni dolorum consequatur ullam. Nostrum nemo eaque fuga unde laborum ut officia odit rem in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum fugit ducimus ullam illum voluptatum labore consequuntur ab non dignissimos. Molestiae atque corrupti animi, voluptatem veritatis quos dignissimos eum in.
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" md="9" lg="8" sm="12">
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
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col align="center"  cols="12" md="11" lg="10" xl="8" sm="12">
                <v-row  align="center">
                    <v-col  align-self="start" cols="12" lg="3" md="3" sm="12" v-for="(inf, index) in information" :key="index">
                        <v-card @click="Plan(inf)" class="ma-2 Contenhover" elevation="5">
                            <div>
                                <v-img :src="inf.icon" class="FotoService" alt="">
                                </v-img>
                            </div>
                            <div align="start" class="TitleService pt-2 px-2">
                                {{ inf.title }}
                            </div>
                            <div align="start" class="DescServices pb-2 px-2">
                                {{ inf.desc }}
                            </div>
                            <div align="start" class="TitleService pt-2 px-2">
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
                        <v-card  class="ma-2 Contenhover" elevation="5">
                            <div>
                                <v-img :src="inf.icon" class="FotoService" alt="">
                                    <v-app-bar
                                        flat
                                        color="rgba(0, 0, 0, 0)"
                                    >
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            color="white"
                                            icon
                                            @click="DeletePlan(inf)"
                                        >
                                        <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-app-bar>
                                </v-img>
                            </div>
                            <div align="start" class="TitleService pt-2 px-2">
                                {{ inf.title }}
                            </div>
                            <div align="start" class="DescServices pb-2 px-2">
                                {{ inf.desc }}
                            </div>
                            <div align="start" class="TitleService pt-2 px-2">
                                {{ inf.valor | currency}}
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col v-if="TotalPlan!=''" align="center" justify="center">
                <p class="TitlePlan" >Tu plan tiene un costo de: {{TotalPlan | currency}}</p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="pb-5">
            <v-btn  elevation="2" rounded color="#67b539" class="white--text font-weight-black" large>
                Hablar con un asesor
            </v-btn>
        </v-row>
    </div>
</template>
<script>

export default {
    data: () => ({
        ArmedPlan:[],
        informationServices:[],
        TotalPlan:0,
        information: [
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
        ]
    }),
    created(){
        this.informationServices = this.information;
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
                console.log('El servicio ya esta incluido')
            } else{
                this.ArmedPlan.push(datos)
                console.log('El servicio ya se incluyo')
                this.TotalPlan += datos.valor
            } 
            console.log(this.TotalPlan)
        },
        DeletePlan(data){
            console.log(this.ArmedPlan)
            const resultado = this.ArmedPlan.filter(item => item.id !== data.id);
            this.ArmedPlan = resultado
            this.TotalPlan -= data.valor
            console.log(this.ArmedPlan)
            
        }
    }
}
</script>
