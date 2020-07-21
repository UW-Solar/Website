<template>
  <div class="container" id="white-back">
    <div class="people"></div>
    <div>
        <h1>People</h1>
        <br><br>
        <h2>Founders</h2>
        <br>
        <h2>RSO Officers</h2>
        <br>
        <h2>Current Members</h2>
        <br>
        <h2>Past Members</h2>
        <br>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.people {
  height: 15vh;
}
p {
  font-size: 1.5rem;
}
p.meetings {
    padding-left: 5%;
}
h3 {
    text-indent: 1%;
}
#header-img {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
body {
    background-color: rgba(255, 255, 255, 0.8);
}
</style>
