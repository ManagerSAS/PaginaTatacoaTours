<template>
    <div>
        <TheHeader/>
        <MobileNavigation/>
        <Welcome/>
        <Plans/>
        <Services style="background-color: rgba(1,154,221, 0.2);"/>
        <About/>
        <CallToAction style="background-color: rgba(1,154,221, 0.2);"/>
        <FormContact/>
        <TheFooter style="background-color: rgba(1,154,221, 0.25);"/>
    </div>
</template>

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

export default {
    components: { TheFooter, TheHeader, Welcome, Plans, Services, About, CallToAction, FormContact, MobileNavigation }
}
</script>
