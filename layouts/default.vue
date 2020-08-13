<template>
  <div id="__main">
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
html, body {
  height: 100vh;
  color: black;
}
a {
  text-decoration: none;
  font-weight: bolder;
  color: inherit;
}
h1 {
  font-size: 3rem;
  border-bottom: 0.15em solid black;
  padding: 0.2em;
  width: fit-content;
  border-bottom-right-radius: 0.7rem;
}
.project-icon {
  width: 30%;
  margin-top: 1rem;
}
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 20vh; */
}
.card-header:hover {
  background-color: rgba(255, 255, 255, 0.4);
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
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.19) 0%, rgba(255, 255, 255, 0.21) 100%), url("../static/UWSolarBackground.png");
  background-repeat: no-repeat, repeat;
  background-size: cover;
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

@media (min-width: 650px) {
  .card-header {
    flex-direction: row;
    justify-content: space-between;
  }
  .project-icon {
    width: 10%;
  }
}
</style>
