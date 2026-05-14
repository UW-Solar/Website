<!-- Markus Schiffer and Alex Eidt -->
<!-- This file contains the footer on the bottom of each page. -->

<template>
  <footer>
    <hr id="hrFooter" />
    <br />
    <br />
    <!-- Big UW logo. -->
    <a href="http://www.washington.edu/" target="_blank">
      <img id="UWFooter" src="../static/UWFooterBlack.png">
    </a>
    <br />
    <br />
    <!-- Social media and email information. -->
    <div id="footerDiv">
      <a href="https://www.facebook.com/UW-Solar-251198231673083/" class="footerImg" target="_blank"><img class="w-100 m-auto" src="~/static/facebook.png"></a>
      <a href="https://www.instagram.com/uwsolar/" class="footerImg" target="_blank"><img class="w-100 m-auto" src="~/static/instagram.png"></a>
      <a href="https://www.google.com/maps/place/Gould+Hall/@47.6549618,-122.3149216,490m/data=!3m2!1e3!4b1!4m5!3m4!1s0x549014f2574c64b3:0xa7800607c2811e5e!8m2!3d47.6549618!4d-122.3127329" class="footerImg" target="_blank"><img class="w-100 m-auto" src="~/static/map.png"></a>
      <a href="mailto:janwhit@uw.edu" class="footerImg"><img class="w-100 m-auto" src="~/static/email.png"></a>
    </div>
    <br />
    <br />
    <br />
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Top margin for the entire footer. */
footer {
  margin-top: 10rem;
}
/* Social media icons */
.footerImg {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  filter: invert(100%);
}
/* Make social media images white on hover. */
.footerImg:hover {
  filter: invert(0%);
}
/* Style for the horizontal bar. */
#hrFooter {
  width: 90%;
  border: 1px solid black;
}
/* Style for the big UW Logo in the footer. */
#UWFooter {
  width: 70%;
  filter: grayscale(100%);
  display: block;
  margin-left: auto;
  margin-right: auto;
}
/* Make the big UW Logo white on hover. */
#UWFooter:hover {
  filter: invert(100%);
}
/* Style for the div that holds the social media images. */
#footerDiv {
  text-align: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
/* Changes styles when the screen gets bigger. */
@media (min-width: 550px) {
  #footerDiv {
    width: 30%;
  }
  #UWFooter {
    width: 30%;
  }
  .footerImg {
    width: 10%;
  }
}
</style>