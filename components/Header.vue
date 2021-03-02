<!-- Markus Schiffer and Alex Eidt -->
<!-- This file is the Navbar at the top of each page. -->
<!-- The edge case that is often referred to is when the screen transitions
     from desktop to mobile sizes. -->

<template>
  <!-- Encompasses the navbar. Hover triggers JavaScript functions. -->
  <nav
    id="fading-background"
    class="navbar navbar-expand-lg"
    @mouseover="this.handleFocus"
    @mouseout="this.handleScroll"
  >
    <!-- Toggler/collapsable button. Focus the navbar when clicked. -->
    <b-navbar-toggle target="nav-collapse" @click="this.handleFocus" />

    <!-- Navbar links. Can collapse on mobile. -->
    <b-collapse id="nav-collapse" is-nav>
      <!-- Stores all pages to navigate to. -->
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
        <!-- Special li, for the urban infrastructure lab website link. Only displays for mobile. -->
        <li class="nav-item" v-if="this.winWidth < 992">
          <b-navbar-brand id="UIL-logo" href="http://uil.be.uw.edu/" target="_blank">
            <img id="UILLogo" src="~/static/skyline.png" :style="currFilter"/>
            <!-- Use dynamic style currColor to handle edge case. -->
            <p id ="special-link" class="nav-link" :style="currColor">Urban Infrastructure Lab</p>
          </b-navbar-brand>
        </li>
      </ul>
      <!-- Display urban infrastructure lab website logo and link on computer screens. -->
      <div id="UIL-logo" v-if="this.winWidth > 991">
        <a href="http://uil.be.uw.edu/" target="_blank">
          <img id="UILLogo" src="~/static/skyline.png" :style="currFilter"/>
        </a>
        <!-- Use dynamic style currColor to handle edge case. -->
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
    // Numbers correspond to template spans above.
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
      winHeight: undefined,  // Stores current browser height.
      winWidth: undefined,  // Stores current browser width.
      currColor: 'black',  // Initial starting color of UIL logo/link text.
      currFilter: 0  // How much to invert the image by for the UIL image.
    };
  },
  // Mounted runs when the HTML is set. Initializes using the other functions.
  mounted() {
    this.winHeight = window.innerHeight;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // Intialize the page immediately based on browser width.
    // I think mounted runs before the v-ifs in the HTML template, so this line
    // will always fail unless we wait for the template to load.
    // Make sure the page displays correctly based on how much has already been scrolled.
    setTimeout(() => this.handleScroll(), 20);
  },
  // Destroyed runs when the page is closed/left.
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // This method ensures that the navbar's appearance is updated based on how
    // far the user has scrolled.
    handleScroll() {
      // Do nothing if the navbar is both on mobile and has been expanded
      // (aka clicked on).
      if (this.expanded()) {
        return;
      }
      const scrollTop = window.pageYOffset; // How much has the user scrolled.
      // Calculation for the opacity of the navbar, based on distance scrolled.
      const opacity = Math.min((scrollTop / this.winHeight) * 15, 0.9);
      // Grayscale color value for the text of the navbar, single rgb value.
      const color = (255 * Math.min(1, (scrollTop / this.winHeight) * 10)).toString();
      const rgb = "rgb(" + color + ", " + color + ", " + color + ")";
      // Background color for navbar (clear through dark).
      document.getElementById("fading-background").style["background-color"] =
        "rgba(0, 0, 0, " + opacity.toString() + ")";
      // Link color (black through white).
      const links = document.getElementsByClassName("nav-link");
      Array.from(links).forEach((el) => {  // Iterate through each link.
        el.style["color"] = rgb;
      });
      this.currColor = "color: " + rgb; // Save the latest color for edge case.
      
      // Set inversion (aka color) for the UIL logo.
      const filter = "invert(" + (100 * Math.min((scrollTop / this.winHeight) * 10, 1)).toString() + "%)";
      document.getElementById("UILLogo").style["filter"] = filter;
      this.currFilter = "filter: " + filter;  // Save filter for edge case.
      // Set inversion (aka color) of the three bar  navbar button.
      document.getElementsByClassName("navbar-toggler collapsed")[0].style["filter"] = filter;
    },
    handleFocus() {
      // Already fully expanded (meaning focused), no need to do anything.
      if (this.expanded()) {
        return;
      }
      // Make the navbar completely dark.
      document.getElementById("fading-background").style["background-color"] =
        "rgba(0, 0, 0, 0.9)";
      // Make all of the links white.
      const links = document.getElementsByClassName("nav-link");
      Array.from(links).forEach((el) => {
        el.style["color"] = "white";
      });
      this.currColor = "color: white";  // Save the latest color for edge case.
      document.getElementById("UILLogo").style["filter"] = "invert(100%)";
      this.currFilter = "filter: invert(100%)";  // Save filter for edge case.
      // Set inversion (aka color) of the three bar navbar button to white.
      document.getElementsByClassName("navbar-toggler collapsed")[0].style["filter"] =
        "invert(100%)";
    },
    // This method is called when the user resizes their browser window or upon
    // page initialization.
    handleResize() {
      const width = window.innerWidth;  // Browser width.
      if (width > 991) {
        setTimeout(() => (this.handleScroll()), 20);  // Reset scroll.
      }
      this.winWidth = width;  // Save width for later use.
      this.winHeight = window.innerHeight;  // Save height for later use.
    },
    // This function returns true or false if the navbar is expaned or not. It
    // is a helper function for the other functions from above.
    expanded() {
      return document.getElementsByClassName("navbar-toggler collapsed").length === 0;
    },
  },
};
</script>

<!-- This style accounts for bolding/white the current nav link -->
<style scoped>
/* Styles the navbar to stay on top of the screen and above other content. */
nav {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}
/* Styles the links in the navbar. */
a {
  font-weight: normal;
}
/* Styles the navbar links on hover. */
a:hover {
  text-decoration: underline;
}
/* Styles the navbar button when it is not expanded. */
.navbar-toggler.collapsed {
  border-color: black;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  background-size: 100% 100%;
}
/* Styles the navbar button when it is expanded. */
.navbar-toggler.not-collapsed {
  border-color: black;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  background-size: 100% 100%;
}
/* Additional navbar class styling. */
.navbar {
  font-size: 1.2em;
}
/* Styling for individual items (link wrappers) in the navbar. */
.nav-item {
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
}
/* Default color for the nav links. */
.nav-link {
  color: black;
}
/* Specifies the adjustment for fixing the navbar at the top of the screen. */
.fix-offset {
  margin-bottom: 4.5rem;
}
/* Styles the link for the currently selected page. */
.nuxt-link-exact-active {
  font-weight: bolder;
}
/* The font size of the UIL element. */
.navbar-brand {
  font-size: inherit;
}
/* Special styling for the UIL logo container element. */
#UIL-logo {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  text-decoration: none;
}
/* Special styling and margins for the UIL logo. */
#UIL-logo img {
  width: auto;
  max-height: 2.5rem;
  margin-left: 1rem;
  margin-right: 2rem;
  border-radius: 20%;
}
/* To remove the blue underline. */
#special-link:hover {
  text-decoration: underline;
}
/* For computer screen sizes. */
@media screen and (min-width: 992px) {
  /* How the nav links are spaced on the computer view. */
  #nav-collapse {
    display: flex;
    justify-content: space-between;
  }
}
</style>