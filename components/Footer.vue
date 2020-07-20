<template>
  <div>
    <hr id="hrFooter" />
    <br><br>
    <img id="UWFooter" src="../static/UWFooterBlack.png">
    <br><br>
    <div id="footerDiv">
      <a href="https://www.facebook.com" class="footerImg"><img class="w-100 m-auto" src="fb.png"></a>
      <a href="https://www.instagram.com" class="footerImg"><img class="w-100 m-auto" src="ig.png"></a>
      <a href="mailto:frank@gmail.com" class="footerImg"><img class="w-100 m-auto" src="email.png"></a>
    </div>
    <br><br><br>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footerImg {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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