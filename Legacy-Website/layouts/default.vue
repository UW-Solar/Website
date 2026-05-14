<!-- Markus Schiffer and Alex Eidt -->
<!-- This file contains the layout used by the home page, as well as style rules
     used by all pages. -->

<template>
  <div id="__main">
    <!-- Background must become blurred before becoming white!! -->
    <div id="background-blur"></div>
    <div id="background-white"></div>
    <!-- Header component. -->
    <u-w-s-header />
    <!-- The page we use. -->
    <nuxt />
    <!-- Footer component. -->
    <u-w-s-footer />
  </div>
</template>

<script>
import UWSHeader from '~/components/Header.vue'
import UWSFooter from '~/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  // This, combined with the import statements, lets us use the header and
  // footer components.
  components: {
    UWSHeader,
    UWSFooter
  },
  // Mounted runs when the HTML is set. Initializes using the other functions.
  mounted () {
    this.winHeight = window.innerHeight;
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  // Destroyed runs when the page is closed/left.
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // This method ensures that the navbar's appearance is updated based on how
    // far the user has scrolled.
    handleScroll () {
      const scrollTop = window.pageYOffset;  // How much has the user scrolled.
      // Fraction of entire page user has scrolled.
      const scrollWindow = scrollTop / this.winHeight;
      // Calculation for the opacity of the navbar, based on distance scrolled.
      const opacity = Math.min(scrollWindow * 2.5, 0.65);
      let blurPX;  // How much to blur the background by.
      if (opacity == 0.65) {
        blurPX = "5";
      } else {
        blurPX = (Math.floor(5 * Math.min(1, scrollWindow))).toString();
      }
      // Background fading to white on scroll.
      document.getElementById("background-white").style["background-color"] = "rgba(255, 255, 255, " + opacity.toString() + ")";
      // Background blurring on scroll.
      document.getElementById("background-blur").style["filter"] = "blur(" + blurPX + "px)";
    }
  }
}
</script>

<style>
/* All text is colored black */
html, body {
  height: 100vh;
  color: black;
}
/* All links are not underlined and are bolded */
a {
  text-decoration: none;
  font-weight: bolder;
  color: inherit;
}
/* All h1 tags displaying the page name for every page other than the Home Page.
    This is the large text at the top of each of these pages with the distinct underline */
h1 {
  font-size: 3rem;
  border-bottom: 0.15em solid black;
  padding: 0.2em;
  width: fit-content;
  border-bottom-right-radius: 0.4rem;
}
h3 {
  margin: 0;
}
.card-header h3 {
  text-align: center;
}
/* The section tag styles blocks of text. Only used for font size */
section {
  font-size: 1.3rem;
}
/* The "data" class is at the top of every page other than the Home page
    and is used to add padding to the top of the page to prevent the content
    from going off the top of the screen */
.data {
  height: 15vh;
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
/* Used for the background blur effect when user scrolls on the Home page */
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
/* Used for the background brightening effect when user scrolls on the Home page */
#background-white {
  background-color: transparent;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -9;
}
/* The icons on the Projects page when the screen width is less than 650px */
.project-icon {
  width: 30%;
  margin-top: 1rem;
}
/* card-header is the semi-transparent boxes that feature the project name
    and the icon describing the solar array racking type.
    When the screen width is less than 650px, this box re-arranges the content
    such that the project name text is centered and directly below it is the icon */
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
}
/* When the user hovers over the boxes with the project names, the background becomes a
    faint white and the text becomes underlined */
.card-header:hover {
  background-color: rgba(255, 255, 255, 0.4);
  text-decoration: underline;
}
/* When the screen width is greater than 650px, the boxes with project names re-arrange
    the content such that the Project name text is left aligned, and the icon is right aligned */
@media (min-width: 650px) {
  .card-header h3 {
    text-align: initial;
  }
  #project.card-header {
    flex-direction: row;
    justify-content: space-between;
    height: 25vh;
  }
  .project-icon {
    width: 10%;
  }
}
/* Fine tuning the Project box sizes to look good on other screen sizes. */
@media (min-width: 750px) {
  #project.card-header {
    height: 15vh;
  }
}
@media (min-width: 1200px) {
  #project.card-header {
    height: 25vh;
  }
}
</style>
