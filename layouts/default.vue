<template>
  <div>
    <u-w-s-header />
    <nuxt />
  </div>
</template>

<script>
import UWSHeader from '~/components/Header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    UWSHeader
  }
}
</script>

<style>
body {
  background-image: url("../static/UWSolarBackground.png");
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.19) 0%, rgba(255, 255, 255, 0.21) 100%), url("../static/UWSolarBackground.png");
  background-repeat: no-repeat, repeat;
  background-size: cover; /* Resize the background image to cover the entire container */
  background-attachment: fixed;
  height: 100%;
}
html {
  height: 100%;
}
</style>
