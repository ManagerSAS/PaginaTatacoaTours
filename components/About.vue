<template>
    <v-container id="About" fluid>
        <v-row align="center" justify="center" class="my-15">
            <v-col ccols="12" md="10" lg="9" sm="12">
                <v-row align="center" justify="center">
                    <v-col  cols="12" md="7" lg="7" sm="12">
                        <h1 class="my-6 mx-2" style="font-size: 30px">QUIÉNES SOMOS</h1>
                        <p class="mx-2" style="text-align: justify;">Somos una experiencia turística. Una agencia dedicada a ofrecer productos con un alto contenido de aventuras en la localidad, tenemos lugar de operación en la zona rural del Municipio de Villavieja y estamos acorde a las normas ambientales que gobiernan las zonas turísticas. Todos los destinos están diseñados para evitar un desgaste injusto  y para garantizarle a las próximas  generaciones el poder disfrutar del paisaje junto a la foto que usted se está tomando hoy.</p>
                    </v-col>
                    <v-col align="center" justify="center" cols="12" md="4" lg="4" sm="12">
                        <v-img class="rounded-lg elevation-10" lazy-src="/logo.png" src="/Img/About/about-04.png" width="300">
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
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>