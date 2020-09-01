<!-- Markus Schiffer and Alex Eidt -->
<!-- This file is how each news article (current or archived) 
     is displayed on the News page. -->

<template>
<!-- Everything in the article tag makes up a news article. -->
  <article class="d-flex flex-column my-5">
    <!-- Following is the article title. -->
    <h2>{{ article.title }}</h2>
    <!-- Following is article author followed by article date. -->
    <h3 class="mb-3">{{ article.author + "  |  " + article.date }}</h3>
    <!-- Following is article content. -->
    <p>{{ article.content }}</p>
    <!-- Article image, is optional. -->
    <img v-if="article.image !== ''" class="news-img align-self-center mt-5" :src="'/Website/News/' + article.image" />
  </article>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: {
    article: {  // Passed in from news page, contains article information.
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Title style. */
h2 {
  font-size: 2.5rem;
}
/* Author and Date style. */
h3 {
  font-size: 1.9rem;
}
/* Font size for article text. */
article {
  font-size: 1.3rem;
}
/* Style for the image of each news article. */
.news-img {
  max-width: 100%;
  height: auto;
  border: 2px solid black;
}
/* Changes styles based on screen size. */
@media (min-width: 768px) {
  .news-img {
    max-width: 50%;
  }
}
</style>
