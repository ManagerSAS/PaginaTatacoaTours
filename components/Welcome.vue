<template>
    <div>
        <div class="intro-slider d-none d-md-block d-lg-block d-xl-block">
            <v-carousel  hide-delimiters v-model="model">
                <v-carousel-item
                v-for="(color) in colors"
                :key="color"
                >
                    <div :color="color" class="intro-section bg-cover"  >
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
</script>