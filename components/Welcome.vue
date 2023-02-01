<template>
  <div>
    <div class="intro-slider d-none d-md-block d-lg-block d-xl-block">
      <VueSlickCarousel v-bind="settingsWelcome" :arrows="false"  justify="center" align="center"> 
        <div  v-for="({bgImgSrc}, index) in sliderDataPC" :key="index" >
          <div class="intro-section bg-cover bg" :style="{backgroundImage: `url(${bgImgSrc})`,imageRendering: 'auto'}">
          </div>
        </div>
      </VueSlickCarousel>
    </div> 
    <div class="intro-slider d-block d-md-none d-lg-none d-xl-none">
      <VueSlickCarousel v-bind="settingsWelcome" :arrows="false"  justify="center" align="center"> 
        <div  v-for="({bgImgSrc}, index) in sliderDataCel" :key="index" >
          <div class="intro-section bg-cover bg" :style="{backgroundImage: `url(${bgImgSrc})`,imageRendering: 'auto'}">
          </div>
        </div>
      </VueSlickCarousel>
    </div> 
    <v-container fluid >
      <v-row justify="center" align="center">
        <v-btn target="_blanck" href='https://api.whatsapp.com/send?phone=573212759998&text=Hola, Buen día' class="BtnBanner" rounded x-large>
          <v-img src="/arrow30.png" width="35"  class="mr-2 arrowbtnbanner"></v-img>
            Reserva con nosotros
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.slick-dots {
  background-color: transparent;
  position: relative;
}
.slick-dots button:before {
  color: #35713b !important; 
  opacity: .3; 
  background-color: transparent; 
  font-size: 20px !important;
  
}
.slick-dots .slick-active button:before {
     color: #cc6b48 !important;
     opacity: 1;
     scale: 120% !important;
}
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    data: () => ({
      model: 0,
      sliderDataPC: [
          {
              bgImgSrc: "/Img/Banners/banner1.jpg"

          },
          {
              bgImgSrc: "/Img/Banners/banner2.jpg"
          },
      ],
      sliderDataCel: [
          {
              bgImgSrc: "/Img/Banners/BannerCel1.jpg"

          },
          {
              bgImgSrc: "/Img/Banners/BannerCel2.jpg"
          },
      ],
      settingsWelcome:{
          "dots": true,
          "autoplay": true,
          "infinite": true,
          "autoplaySpeed": 4000,
          "slidesToShow": 1,
          "slidesToScroll": 1,
      },         
    }),
  }
</script>