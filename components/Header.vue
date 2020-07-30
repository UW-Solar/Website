<template>
  <nav
    id="fading-background"
    class="navbar navbar-expand-lg"
    @mouseover="this.handleFocus"
    @mouseout="this.handleScroll"
  >
    <!-- Toggler/collapsibe Button -->
    <b-navbar-toggle target="nav-collapse" @click="this.handleFocus" />

    <!-- Navbar links -->
    <b-collapse id="nav-collapse" is-nav>
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Home
            <span v-if="currentPage === 0" class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/projects">
            Projects
            <span v-if="currentPage === 1" class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/map">
            Map
            <span v-if="currentPage === 2" class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/data">
            Data
            <span v-if="currentPage === 3" class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/news">
            News
            <span v-if="currentPage === 4" class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/people">
            People
            <span v-if="currentPage === 5" class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item" v-if="this.winWidth < 992">
          <b-navbar-brand id="UIL-logo" href="http://uil.be.uw.edu/" target="_blank">
            <img id="UILLogo" src="~/static/skyline.png" :style="currFilter"/>
            <p id ="special-link" class="nav-link" :style="currColor">Urban Infrastructure Lab</p>
          </b-navbar-brand>
        </li>
      </ul>
      <div id="UIL-logo" v-if="this.winWidth > 991">
        <a href="http://uil.be.uw.edu/" target="_blank">
          <img id="UILLogo" src="~/static/skyline.png" :style="currFilter"/>
        </a>
        <a href="http://uil.be.uw.edu/" target="_blank" class="nav-link" :style="currColor">
          Urban Infrastructure Lab
        </a>
      </div>
    </b-collapse>
  </nav>
</template>

<script>
export default {
  name: "Header",
  computed: {
    // Helps the screen reader announce the current page.
    currentPage() {
      const path = this.$route.path;
      if (path.includes("projects")) {
        return 1;
      } else if (path.includes("map")) {
        return 2;
      } else if (path.includes("data")) {
        return 3;
      } else if (path.includes("news")) {
        return 4;
      } else if (path.includes("people")) {
        return 5;
      } else {
        return 0;
      }
    },
  },
  data() {
    return {
      winHeight: undefined,
      winWidth: undefined,
      currColor: 'black',
      currFilter: 0,
      svgStart:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='",
      svgEnd:
        "' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
    };
  },
  mounted() {
    this.winHeight = window.innerHeight;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // Make sure that we intialize the page correctly based on browser width.
    // I think mounted runs before the v-ifs in the HTML template, so this line will always fail unless we wait for the template to load.
    setTimeout(() => this.handleScroll(), 20); // Make sure the page displays correctly based on how much has already been scrolled.
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.expanded()) {
        return;
      }
      const scrollTop = window.pageYOffset; // How much of the page has been scrolled.
      const opacity = Math.min((scrollTop / this.winHeight) * 15, 0.9); // The opacity of the page, based on distance scrolled.
      const color = (
        255 * Math.min(1, (scrollTop / this.winHeight) * 10)
      ).toString(); // Grayscale single rgb value.
      const rgb = "rgb(" + color + ", " + color + ", " + color + ")";
      document.getElementById("fading-background").style["background-color"] =
        "rgba(0, 0, 0, " + opacity.toString() + ")"; // Background color (clear-dark)
      const links = document.getElementsByClassName("nav-link"); // Link color (black-white)
      Array.from(links).forEach((el) => {
        el.style["color"] = rgb;
      });
      this.currColor = "color: " + rgb;
      
      const filter = "invert(" + Math.min(scrollTop, 100) + "%)";
      document.getElementById("UILLogo").style["filter"] = filter;
      this.currFilter = "filter: " + filter;
      
      document.getElementsByClassName("navbar-toggler collapsed")[0].style[
        "background-image"
      ] = this.svgStart + rgb + this.svgEnd; // Button color (black-white)
      document.getElementsByClassName("navbar-toggler collapsed")[0].style[
        "border-color"
      ] = rgb; // Button border color (black-white)
    },
    handleFocus() {
      if (this.expanded()) {
        return;
      }
      document.getElementById("fading-background").style["background-color"] =
        "rgba(0, 0, 0, 0.9)"; // Dark navbar
      const links = document.getElementsByClassName("nav-link"); // White links
      Array.from(links).forEach((el) => {
        el.style["color"] = "white";
      });
      this.currColor = "color: white"
      document.getElementById("UILLogo").style["filter"] = "invert(100%)";
      this.currFilter = "filter: invert(100%)";
      document.getElementsByClassName("navbar-toggler collapsed")[0].style[
        "background-image"
      ] = this.svgStart + "white" + this.svgEnd; // White button
      document.getElementsByClassName("navbar-toggler collapsed")[0].style[
        "border-color"
      ] = "white"; // White button
    },
    handleResize() {
      const width = window.innerWidth;
      if (width > 991) {
        setTimeout(() => (this.handleScroll()), 20);
        // this.handleScroll();
      }
      this.winWidth = width;
      this.winHeight = window.innerHeight;
    },
    expanded() {
      return document.getElementsByClassName("collapsed").length === 0;
    },
  },
};
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
  background-size: 100% 100%;
}
.navbar-toggler.not-collapsed {
  border-color: black;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  background-size: 100% 100%;
}
.navbar {
  font-size: 1.5em;
}
.nav-item {
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
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
.navbar-brand {
  font-size: 1.5rem;
}
#UIL-logo {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  text-decoration: none;
}
#UIL-logo img {
  width: auto;
  max-height: 3.5rem;
  margin-left: 1rem;
  margin-right: 2rem;
  border-radius: 20%;
}
/* To remove the blue underline. */
#special-link:hover {
  text-decoration: underline;
}

@media screen and (min-width: 992px) {
  #nav-collapse {
    display: flex;
    justify-content: space-between;
  }
}
</style>