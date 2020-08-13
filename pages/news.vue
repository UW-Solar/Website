<template>
  <div class="data-container">
    <div class="data"></div>
      <h1>News</h1>
      <br />
      <br />
      <br />
      <br />
      <div class="news-wrapper" id="news-1">
        <section>
          <p>This is a tad bit of news.</p>
        </section>
      </div>
      <div class="news-wrapper" id="news-2">
        <section>
          <p>This is another snippet of news.</p>
        </section>
      </div>
  </div>
</template>

<script>
export default {
  name: "News",
  layout: "secondary",
  head () {
    return {
      title: 'News | UW Solar'
    }
  },
}
</script>

<style scoped>

</style>