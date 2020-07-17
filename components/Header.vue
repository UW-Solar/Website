<template>
  <header class="fix-offset">
    <b-navbar id="fading-background" toggleable="md" fixed="top">
      <!--<nuxt-link class="navbar-brand" to="/">
        <img
          src="../static/logographic.png"
          alt="UW Solar stylized with Life Sciences building in the background"
          width="50"
          height="50"
          class="d-inline-block align-top"
        >
      </nuxt-link>-->
      <b-navbar-toggle target="nav-collapse" />
      <!-- Make collapsable for small screens. -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link class="nav-link" to="/">
            Home <span v-if="currentPage === 0" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/projects">
            Projects <span v-if="currentPage === 1" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/map">
            Map <span v-if="currentPage === 2" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/data">
            Data <span v-if="currentPage === 3" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/news">
            News <span v-if="currentPage === 4" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/people">
            People <span v-if="currentPage === 5" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/partners">
            Partners <span v-if="currentPage === 6" class="sr-only">(current)</span>
          </nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    // Helps the screen reader announce the current page.
    currentPage () {
      const path = this.$route.path
      if (path.includes('cities')) {
        return 1
      } else if (path.includes('blog')) {
        return 2
      } else if (path.includes('resources')) {
        return 3
      } else {
        return 0
      }
    }
  },
  data () {
    return {
      winHeight: 0
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
      const opacity = Math.min((scrollTop / this.winHeight * 10), 0.9);
      document.getElementById("fading-background").style["background-color"] = "rgba(0, 0, 0, " + (opacity).toString() + ")";
    }
  }
}
</script>

<!-- This style accounts for bolding/white the current nav link -->
<style lang="scss" scoped>
// Bootstrap and its default variables
// @import '../node_modules/bootstrap/scss/bootstrap';
// // BootstrapVue and its default variables
// @import '../node_modules/bootstrap-vue/src/index.scss';
// // BoostrapVue navbar
// @import '../node_modules/bootstrap/scss/_navbar.scss';
// $navbar-light-color: black;
// .navbar-light.navbar-nav.nav-link {
//   color: black;
// }

.navbar {
  padding-left: 2rem;
  font-size: 1.35em;
}
.nav-link {
  padding-left: 3rem;
}
.fix-offset {
  margin-bottom: 4.5rem;
}
.nuxt-link-exact-active {
  font-weight: bolder; 
}
.container img {
  overflow: hidden;
  object-position: center;
  width: 100%;
  max-height: 15rem;
}
.container {
  flex-direction: column;
}
</style>