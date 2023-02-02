<template>
    <div>
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
</template>
<script>
    export default {
        props: ['Planes'],
        
        data: () => ({
            caracateres:120,
        }),
        filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
            }
        },
    };
</script>