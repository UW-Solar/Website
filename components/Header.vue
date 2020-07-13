<template>
  <header class="fix-offset">
    <b-navbar id="fading-background" toggleable="md" fixed="top">
      <nuxt-link class="navbar-brand" to="/">
        <img
          src="../static/logographic.png"
          alt="UW Solar stylized with Life Sciences building in the background"
          width="50"
          height="50"
          class="d-inline-block align-top"
        >
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse" />
      <!-- Make collapsable for small screens. -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link class="nav-link" to="/">
            About <span v-if="currentPage === 0" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/affiliated">
            Affiliated Labs <span v-if="currentPage === 1" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/projects">
            Projects <span v-if="currentPage === 2" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/reseach">
            Research <span v-if="currentPage === 3" class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-link" to="/members">
            Lab Members <span v-if="currentPage === 4" class="sr-only">(current)</span>
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
      const opacity = scrollTop / this.winHeight;
      document.getElementById("fading-background").style["background-color"] = "rgba(200, 200, 200, " + (opacity).toString() + ")";
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