<template>
  <article :id="unique">
    <h3>{{ article.title }}</h3>
    <h4>{{ article.date }}</h4>
    <h5>{{ article.author }}</h5>
    <p>{{ article.content }}</p>
<img :src="'/news/' + article.image" />
  </article>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: {
    article: {
      type: Object,
      required: true
    },
    unique: {
        type: String,
        required: true
    }
  }
}
</script>