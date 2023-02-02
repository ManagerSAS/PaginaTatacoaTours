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
        <div align="start" class="DescServices pb-2 px-2">
            {{ inf.desc | truncate(caracateres) }} 
            <a @click="caracateres = 300" v-if="caracateres <= 120">...ver más</a> 
            <a @click="caracateres = 120" v-else >...ver menos</a>
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