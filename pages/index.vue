<template>
  <div class="container">
    <div class="occupy-solo">
      <img src="../static/uwsolar.png" alt="UW Solar logo and title" title="UW Solar log and title">
    </div>
    <div class="occupy-solo">
      Next content.
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
  }
}
</script>

<style scoped>
.occupy-solo {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
