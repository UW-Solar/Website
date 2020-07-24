<template>
  <div class="container">
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

export default {
  name: "People",
  layout: "secondary",
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
</style>
