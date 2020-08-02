<template>
  <footer>
    <hr id="hrFooter" />
    <br />
    <br />
    <a id="UWFooterLink" href="http://www.washington.edu/" target="_blank">
      <img id="UWFooter" src="../static/UWFooterBlack.png">
    </a>
    <br />
    <br />
    <div id="footerDiv">
      <a href="https://www.facebook.com/UW-Solar-251198231673083/" class="footerImg" target="_blank"><img class="w-100 m-auto" src="~/static/facebook.png"></a>
      <a href="https://www.instagram.com/uwsolar/" class="footerImg" target="_blank"><img class="w-100 m-auto" src="~/static/instagram.png"></a>
      <a href="https://www.google.com/maps/place/Gould+Hall/@47.6549618,-122.3149216,490m/data=!3m2!1e3!4b1!4m5!3m4!1s0x549014f2574c64b3:0xa7800607c2811e5e!8m2!3d47.6549618!4d-122.3127329" class="footerImg" target="_blank"><img class="w-100 m-auto" src="~/static/map.png"></a>
      <a href="mailto:Solar_at_uw@uw.edu" class="footerImg"><img class="w-100 m-auto" src="~/static/email.png"></a>
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
footer {
  margin-top: 10rem;
}
.footerImg {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  filter: invert(100%);
}
.footerImg:hover {
  filter: invert(0%);
}
#hrFooter {
  width: 90%;
  border: 1px solid black;
}
#UWFooter {
  width: 30%;
  filter: grayscale(100%);
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#footerDiv {
  text-align: center;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
</style>