<template>
    
  <nav id="fading-background" class="navbar navbar-expand-lg" @mouseenter="this.handleHover" @mouseleave="this.handleScroll">

  <!-- Toggler/collapsibe Button -->
  <b-navbar-toggle target="nav-collapse" @click="this.handleExpand" />

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
    </ul>
    <div id="UIL-logo">
      <a href="http://uil.be.uw.edu/" target="_blank">
          <img id="UILLogo" src="~/static/skyline.png" />
      </a>
      <a href="http://uil.be.uw.edu/" target="_blank">
          <div class="nav-link">Urban Infrastructure Lab</div>
      </a>
    </div>
  </b-collapse>
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
      svgEnd: "' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
      expanded: false
    }
  },
  mounted () {
    this.winHeight = window.innerHeight
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();  // Make sure the page displays correctly based on how much has already been scrolled.
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if (this.expanded) {
        return;
      }
      const scrollTop = window.pageYOffset;  // How much of the page has been scrolled.
      const opacity = Math.min((scrollTop / this.winHeight * 15), 0.9);  // The opacity of the page, based on distance scrolled.
      const color = (255 * Math.min(1, scrollTop / this.winHeight * 10)).toString(); // Grayscale single rgb value.
      const rgb = "rgb(" + color + ", " + color + ", " + color + ")";
      document.getElementById("fading-background").style["background-color"] = "rgba(0, 0, 0, " + (opacity).toString() + ")";  // Background color (clear-dark)
      const links = document.getElementsByClassName("nav-link");  // Link color (black-white)
      Array.from(links).forEach((el) => {
        el.style["color"] = rgb;
      });
      document.getElementById("UILLogo").style["filter"] = "invert(" + Math.min(scrollTop, 100) + "%)";  // Logo color (black-white)
      document.getElementsByClassName("navbar-toggler collapsed")[0].style["background-image"] = this.svgStart + rgb + this.svgEnd; // Button color (black-white)
      document.getElementsByClassName("navbar-toggler collapsed")[0].style["border-color"] = rgb;  // Button border color (black-white)
    },
    handleHover () {
      if (this.expanded) {  // Do nothing if expanded
        return;
      }
      this.focus();
    },
    handleExpand () {
      this.expanded = !this.expanded;  // Toggle whether expanded or not.
      if (!this.expanded) {
        return;
      }
      this.focus();
    },
    focus () {
      document.getElementById("fading-background").style["background-color"] = "rgba(0, 0, 0, 0.9)";  // Dark navbar
      const links = document.getElementsByClassName("nav-link");  // White links
      Array.from(links).forEach((el) => {
        el.style["color"] = "white";
      });
      document.getElementById("UILLogo").style["filter"] = "invert(100%)";
      document.getElementsByClassName("navbar-toggler collapsed")[0].style["background-image"] = this.svgStart + "white" + this.svgEnd; // White button
      document.getElementsByClassName("navbar-toggler collapsed")[0].style["border-color"] = "rgb(255, 255, 255)";  // White button
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
  z-index: 10;
}
a {
  font-weight: normal;
}
a:hover {
  text-decoration: underline;
}
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
#nav-collapse {
  display: flex;
  justify-content: space-between;
}
.navbar {
  font-size: 1.5em;
}
.nav-item {
  padding-left: 1.5rem;
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
  max-height: 3.5rem;
  margin-left: 1rem;
  margin-right: 2rem;
  border-radius: 20%;
}
</style>