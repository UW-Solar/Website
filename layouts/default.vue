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
  .card-header {
    flex-direction: row;
    justify-content: space-between;
    height: 25vh;
  }
  .project-icon {
    width: 10%;
  }
}
@media (min-width: 750px) {
  .card-header {
    height: 15vh;
  }
}
@media (min-width: 1200px) {
  .card-header {
    height: 25vh;
  }
}
</style>
