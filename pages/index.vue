<template>
    <div>
        <TheHeader/>
        <MobileNavigation/>
        <Welcome/>
        <Politicas/>
        <RedesSociales/>
        <Plans class="mb-10"/>
        <Services style="background-color: rgba(1,154,221, 0.2);"/>
        <About/>
        <CallToAction class="fondoCall" />
        <FormContact/>
        <TheFooter style="background-color: rgba(1,154,221, 0.25);"/>
    </div>
</template>
<style>
  .fondoCall{
    background-image: url('/Img/Banners/banner1.jpg'); 
    text-align: center;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
  .fondoCall:before {
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0.6);
  }
</style>
<script>
import TheFooter from '~/components/TheFooter.vue';
import TheHeader from '~/components/TheHeader.vue';
import Welcome from '~/components/Welcome.vue';
import Plans from '~/components/Plans.vue';
import Services from '~/components/Services.vue';
import About from '~/components/About.vue';
import CallToAction from '~/components/CallToAction.vue';
import FormContact from '~/components/FormContact.vue';
import MobileNavigation from '~/components/MobileNavigation.vue';
import RedesSociales from '~/components/RedesSociales.vue';
import Politicas from '~/components/Politicas.vue';

export default {
    components: { TheFooter, TheHeader, Welcome, Plans, Services, About, CallToAction, FormContact, MobileNavigation, RedesSociales,Politicas },
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      })
    }
}
</script>
