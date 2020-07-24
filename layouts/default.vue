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
import UWSHeader from '~/components/Header.vue'
import UWSFooter from '~/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    UWSHeader,
    UWSFooter
  },
  data () {
    return {
      winHeight: 0
    }
  },
  mounted () {
    this.winHeight = window.innerHeight;
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      const scrollTop = window.pageYOffset;
      const opacity = Math.min(scrollTop / this.winHeight * 2.5, 0.8);
      const blurPX = (Math.floor(5 * Math.min(1, scrollTop / this.winHeight))).toString();
      document.getElementById("background-white").style["background-color"] = "rgba(255, 255, 255, " + (opacity).toString() + ")";
      document.getElementById("background-blur").style["filter"] = "blur(" + blurPX + "px)";
    }
  }
}
</script>

<style>
html, body {
  height: 100vh;
}
a {
  text-decoration: none;
  font-weight: bolder;
  color: inherit;
}
#__nuxt {
  height: 100%;
}
#__layout {
  height: 100%;
}
#__main {
  height: 100%;
}
#background-blur {
  background-image: url("../static/UWSolarBackground.png");
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.19) 0%, rgba(255, 255, 255, 0.21) 100%), url("../static/UWSolarBackground.png");
  background-repeat: no-repeat, repeat;
  background-size: cover; /* Resize the background image to cover the entire container */
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  z-index: -10;
  position: fixed;
}
#background-white {
  background-color: transparent;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -9;
}
</style>
