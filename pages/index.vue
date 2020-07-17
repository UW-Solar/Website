<template>
  <div class="container" id="white-back">
    <div class="occupy-solo">
      <img id="header-img" class=".mx-auto" src="../static/uwsolar.png" alt="UW Solar logo and title" title="UW Solar log and title">
    </div>
    <div class="occupy-solo container">
      <div v-for="(article, index) in myContent" :key="index">
        <header class="display-2">{{ article.header }}</header>
        <p>{{ article.body }}</p>
      </div>
    </div>
    <!-- <div>
      <logo />
      <h1 class="title">
        UWSolar2.0
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div> -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      winHeight: 0,
      myContent: [{header: 'HEADER1', body: 'this is 1 text'}, {header: 'HEADER2', body: 'this is 2 text'}, {header: 'HEADER3', body: 'this is 3 text'}]
    }
  },
  mounted () {
    this.winHeight = window.innerHeight
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      const scrollTop = window.pageYOffset;
      const opacity = Math.min(scrollTop / this.winHeight * 0.75, 0.65);
      document.body.style["background-color"] = "rgba(255, 255, 255, " + (opacity).toString() + ")";
    }
  }
}
</script>

<style scoped>
.occupy-solo {
  height: 65vh;
  display: flex;
  align-items: center;
}
#header-img {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
