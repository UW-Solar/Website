<template>
  <div id="__main">
    <div id="background-blur"></div>
    <div id="background-white"></div>
    <u-w-s-header />
    <nuxt />
    <u-w-s-footer />
  </div>
</template>

<script>
import UWSHeader from "~/components/Header.vue";
import UWSFooter from "~/components/Footer.vue";

export default {
  name: 'secondary',
  components: {
    UWSHeader,
    UWSFooter
  }
}
</script>

<style scoped>
#background-blur {
  filter: blur(5px);
}
#background-white {
  background-color: rgba(255, 255, 255, 0.55);
}
</style>