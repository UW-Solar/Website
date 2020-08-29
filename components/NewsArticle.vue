<template>
  <article class="d-flex flex-column my-5">
    <h2>{{ article.title }}</h2>
    <h3 class="mb-3">{{ article.author + "  |  " + article.date }}</h3>
    <p>{{ article.content }}</p>
    <img v-if="article.image !== ''" class="news-img align-self-center mt-5" :src="'~/news/' + article.image" />
  </article>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.9rem;
}
article {
  font-size: 1.3rem;
}
.news-img {
  max-width: 100%;
  height: auto;
  border: 2px solid black;
}
@media (min-width: 768px) {
  .news-img {
    max-width: 50%;
  }
}
</style>
