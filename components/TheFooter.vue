<template>
    <v-container fluid align="center" justify="center">
        <v-row class="mt-5" align="center" justify="center">
            <v-col align="center" justify="center" cols="12" lg="2" md="2" sm="12">
                <v-img width="200" src="/logo.png"></v-img>
            </v-col>
            <v-col align="center" justify="center" cols="12" lg="5" md="5" sm="12">
                <v-row align="center" justify="center">
                    <h1> Dirección</h1>
                </v-row>
                <v-row align="center" justify="center">
                    <p>Villavieja, Huila</p>
                </v-row>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019767.1113086318!2d-76.28974146875001!3d3.233773300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b93101376e6b3%3A0x60293206019ef063!2sTatacoa%20Tours!5e0!3m2!1ses!2sco!4v1674507353635!5m2!1ses!2sco" min-width="350" max-width="600" height="200" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
            <v-col cols="12" lg="3" md="3" sm="12">
                <v-btn text target="_blanck" href="https://www.facebook.com/tatacoatours?mibextid=ZbWKwL" align="center" justify="center">
                    <v-icon color="#35713b">mdi-facebook mdi-24px </v-icon><p class="Text-h3 mt-5">Tatacoa Tours</p>
                </v-btn> <br>
                <v-btn text target="_blanck" href="https://www.instagram.com/tatacoatours/" align="center" justify="center">
                    <v-icon color="#35713b">mdi-instagram mdi-24px </v-icon><p class="Text-h3 mt-5">Tatacoa Tours</p>
                </v-btn><br>
                <v-btn text target="_blanck" href="https://api.whatsapp.com/send?phone=573212759998"  align="center" justify="center">
                    <v-icon color="#35713b">mdi-whatsapp mdi-24px </v-icon><p class="Text-h3 mt-5">Tatacoa Tours</p>
                </v-btn><br>
                <v-btn text target="_blanck" href="https://www.facebook.com/profile.php?id=100063510616145&mibextid=ZbWKwL"  align="center" justify="center">
                    <v-icon color="#35713b">mdi-facebook mdi-24px </v-icon><p class="Text-h3 mt-5">Hostal Laberintos Cuzco Tatacoa</p>
                </v-btn><br>
                <v-btn text target="_blanck" href="https://www.instagram.com/hostal_laberintos_cuzco_tataco/" align="center" justify="center">
                    <v-icon color="#35713b">mdi-instagram mdi-24px </v-icon><p class="Text-h3 mt-5">Hostal Laberintos Cuzco Tatacoa</p>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="mb-3" align="center" justify="center">
            <span style="font-size: 12px">&copy; {{ new Date().getFullYear() }} Desarrollado por Manager ~ <a href="https://agenciamanager.com/">El equipo para tu marca</a></span> 
        </v-row>
    </v-container>
</template>