<template>
  <div class="data-container">
    <div class="news"></div>
        <h1>News</h1>
        <br><br><br><br>
  </div>
</template>

<script>
export default {
  name: "News",
  layout: "secondary",
}
</script>

<style scoped>
h1 {
    font-size: 3rem;
    border-bottom: 0.15em solid black;
    padding: 0.2em;
    color: black;
    width: fit-content;
    border-bottom-right-radius: 0.7rem;
}
.news {
  height: 15vh;
}
section {
  font-size: 1.3rem;
  color: black;
}
</style>