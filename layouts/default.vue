<template>
  <div>
    <u-w-s-header />
    <nuxt />
    <u-w-s-footer />
  </div>
</template>

<script>
import UWSHeader from '~/components/Header.vue'
import UWSFooter from '~/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    UWSHeader,
    UWSFooter
  }
}
</script>

<style>
html {
  background-image: url("../static/UWSolarBackground.png");
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.19) 0%, rgba(255, 255, 255, 0.21) 100%), url("../static/UWSolarBackground.png");
  background-repeat: no-repeat, repeat;
  background-size: cover; /* Resize the background image to cover the entire container */
  background-attachment: fixed;
  height: 100%;
}
body {
  background-color: transparent;
}
</style>
