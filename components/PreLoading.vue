<template>
    <v-overlay style="z-index: 1000" v-if="loading" :value="overlay" opacity="0.8">
        <v-img class="animation" width="350" src="/logoBlanco.png"> </v-img>
    </v-overlay>
</template>
<style>
.animation{
  -webkit-animation: rotate-in-2-bck-cw 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: rotate-in-2-bck-cw 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes rotate-in-2-bck-cw {
  0% {
    -webkit-transform: translateZ(200px) rotate(-45deg);
            transform: translateZ(200px) rotate(-45deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) rotate(0);
            transform: translateZ(0) rotate(0);
    opacity: 1;
  }
}
@keyframes rotate-in-2-bck-cw {
  0% {
    -webkit-transform: translateZ(200px) rotate(-45deg);
            transform: translateZ(200px) rotate(-45deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) rotate(0);
            transform: translateZ(0) rotate(0);
    opacity: 1;
  }
}
</style>
<script>
  export default {
    data: () => ({
      loading: false,
      overlay: false,
    }),
    methods: {
      start() {
        this.loading = true
        this.overlay = true
      },
      finish() {
        this.loading = false
        this.overlay = false
      },
      fail(error) {
        console.log(error)
      },
      increase(num) {
        // console.log(num)
      },
    },
  }
  </script>