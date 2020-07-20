<template>
  <nav id="fading-background" class="navbar navbar-expand-md" @mouseenter="this.handleHover" @mouseleave="this.handleScroll">

  <!-- Toggler/collapsibe Button -->
  <b-navbar-toggle target="nav-collapse" />

  <!-- Navbar links -->
  <b-collapse id="nav-collapse" is-nav>
    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">
          Home <span v-if="currentPage === 0" class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/projects">
          Projects <span v-if="currentPage === 1" class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/map">
          Map <span v-if="currentPage === 2" class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/data">
          Data <span v-if="currentPage === 3" class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/news">
          News <span v-if="currentPage === 4" class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/people">
          People <span v-if="currentPage === 5" class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/partners">
          Partners <span v-if="currentPage === 6" class="sr-only">(current)</span>
        </nuxt-link>
      </li>
    </ul>
  </b-collapse>
  <div id="UIL-logo">
    <img src="~/static/skyline(black).png" />
    <h5>UW Urban Infrastructure Lab</h5>
  </div>
</nav>
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
      winHeight: 0,
      svgStart: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='",
      svgEnd: "' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")"
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
      const color = 255 * Math.min(1, scrollTop / this.winHeight * 10);
      const colorString = color.toString()
      document.getElementById("fading-background").style["background-color"] = "rgba(0, 0, 0, " + (opacity).toString() + ")";
      const links = document.getElementsByClassName("nav-link");
      Array.from(links).forEach((el) => {
        el.style["color"] = "rgb(" + colorString + ", " + colorString + ", " + colorString + ")";
      });
      try {
        document.getElementsByClassName("navbar-toggler collapsed")[0].style["background-image"] = this.svgStart + "rgb(" + colorString + ", " + colorString + ", " + colorString + ")" + this.svgEnd;
        document.getElementsByClassName("navbar-toggler collapsed")[0].style["border-color"] = "rgb(" + colorString + ", " + colorString + ", " + colorString + ")";
      } catch (error) {
        document.getElementsByClassName("navbar-toggler not-collapsed")[0].style["background-image"] = this.svgStart + "rgb(" + colorString + ", " + colorString + ", " + colorString + ")" + this.svgEnd;
        document.getElementsByClassName("navbar-toggler not-collapsed")[0].style["border-color"] = "rgb(" + colorString + ", " + colorString + ", " + colorString + ")";
      }
    },
    handleHover () {
      document.getElementById("fading-background").style["background-color"] = "black";
      const links = document.getElementsByClassName("nav-link");
      Array.from(links).forEach((el) => {
        el.style["color"] = "white";
      });
    }
  }
}
</script>

<!-- This style accounts for bolding/white the current nav link -->
<style lang="scss" scoped>

nav {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
}
// nav:hover {
//   background-color: black;
//   color: white;
// }
// nav:hover a {
//   color: white;
// }
.navbar-toggler.collapsed {
  border-color: black;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  background-size: 100% 100% ;
}
.navbar-toggler.not-collapsed {
  border-color: black;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  background-size: 100% 100% ;
}
.navbar {
  padding-left: 2rem;
  font-size: 1.35em;
}
.nav-item {
  padding-left: 5rem;
}
.nav-link {
  color: black;
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
#UIL-logo {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
#UIL-logo img {
  width: auto;
  max-height: 5rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>