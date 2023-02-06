<template>
    <div>
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
        <div align="start" class="DescServices px-2">
            {{ inf.desc | truncate(caracateres) }} 
            <span v-if="inf.desc.length >= 119">
                <a @click="caracateres = 300" v-if="caracateres == 120">...ver más</a> 
                <a @click="caracateres = 120" v-else >...ver menos</a>
            </span>
        </div>
        <div align="start" v-if="inf.valor !== 0" :class="inf.classValor">
            {{ inf.valor | currency}}
        </div>
        
    </div>
</template>
<script>
    export default {
        props: ['inf'],
        data: () => ({
            caracateres: 120,
            // seeTruncate: true
        }),
        filters: {
        truncate: function (text, length) {
            // if(text.length < 120){
            //     this.seeTruncate = false
            // }
            if (text.length > length) {
                return text.substring(0, length);
            } else {
                return text;
            }
            }
        },
    };
</script>