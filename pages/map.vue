<template>
  <div class="container">
    <div class="map"></div>
        <h1>Map</h1>
        <br><br><br><br>
  </div>
</template>

<script>
export default {
  name: "Map",
  layout: "secondary",
}
</script>

<style scoped>
h1 {
    font-size: 4rem;
    border-bottom: 0.15em solid black;
    padding: 0.2em;
    color: black;
    width: fit-content;
    border-bottom-right-radius: 0.7rem;
}
.map {
  height: 15vh;
}
p {
  font-size: 1.5rem;
}
</style>