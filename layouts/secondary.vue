<!-- Markus Schiffer and Alex Eidt -->
<!-- This file defines the page layout of every page other than the home pages. -->

<template>
  <div id="__main">
    <!-- Background must become blurred before becoming white!! -->
    <div id="background-blur"></div>
    <div id="background-white"></div>
    <!-- Header component. -->
    <u-w-s-header />
    <!-- The page we use. -->
    <nuxt />
    <!-- Footer component. -->
    <u-w-s-footer />
  </div>
</template>

<script>
import UWSHeader from "~/components/Header.vue";
import UWSFooter from "~/components/Footer.vue";

export default {
  name: 'secondary',
  components: {
    // This, combined with the import statements, lets us use the header and
    // footer components.
    UWSHeader,
    UWSFooter
  }
}
</script>

<style scoped>
/* Adds the constant blur needed to the background. */
#background-blur {
  filter: blur(5px);
}
/* Adds the opaque white layer to the background. */
#background-white {
  background-color: rgba(255, 255, 255, 0.65);
}
/* Defines the container which holds the content of each page. */
.data-container {
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>