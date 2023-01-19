<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script> 
<template>
    <div>
        <vue-recaptcha 
            sitekey="6LdrrSshAAAAANwnQ2ia4pHzUqy4bnreVqouSD-8" 
            :loadRecaptchaScript="true"
            @verify="verifyCaptcha"            
        ></vue-recaptcha>
        <!-- <vue-recaptcha 
            sitekey="6LcC5_IgAAAAAAkMC9SkVn3pxf15VQatALkge7Sn" 
            :loadRecaptchaScript="true"      
            @verify="verifyCaptcha"  
        ></vue-recaptcha> -->
    </div>
</template> 
<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
    components: { 
        VueRecaptcha
    },
    data(){
        return{
            recaptcha: null
        }
    },
    methods:{
        verifyCaptcha(response){
            if(response){
                this.recaptcha = response
                this.$emit('captcha', true)
            }
        },
    }
};
</script>