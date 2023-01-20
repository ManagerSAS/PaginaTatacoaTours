<template>
    <div class="intro-slider d-none d-md-block d-lg-block d-xl-block">
          <VueSlickCarousel v-bind="settingsWelcome" :arrows="true"  justify="center" align="center"> 
              <div  v-for="({bgImgSrc}, index) in sliderData" :key="index" >
                  <div class="intro-section bg-cover" :style="{backgroundImage: `url(${bgImgSrc})`,imageRendering: 'auto'}">
                      <div class="container">
                          <v-row justify="center" align="center">
                              <v-col  justify="center" align="center" >
                                  <v-btn class="BtnBanner" rounded x-large>
                                    <v-img src="/arrow30.png" width="35"  class="mr-2 arrowbtnbanner"></v-img>
                                    Reseva con nosotros
                                  </v-btn>
                              </v-col>
                          </v-row>
                      </div>
                  </div>
                </div>
          </VueSlickCarousel>
      </div> 
</template>
<style lang="scss">
.slick-dots {
  background-color: transparent;
  position: relative;
}
.slick-dots button:before {
  color: #019add !important; 
  opacity: .3; 
  background-color: transparent; 
  font-size: 20px !important;
  
}
.slick-dots .slick-active button:before {
     color: #67b539 !important;
     opacity: 1;
     font-size: 30px !important;
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
      sliderData: [
          {
              bgImgSrc: "/Img/Banners/banner.png"

          },
          {
              bgImgSrc: "/Img/Banners/banner.png"
          },
          {
              bgImgSrc: "/Img/Banners/banner.png"
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