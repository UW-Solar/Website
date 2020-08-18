<template>
  <div class="data-container">
    <div class="data"></div>
      <h1>News</h1>
      <br />
      <br />
      <br />
      <br />
      <div>
        Subscribe to our 
        <a href="../feed.xml">
            RSS feed.
        </a>
      </div>
      <div id="root" class="container"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import NewsArticle from '~/components/NewsArticle';

export default {
  name: "News",
  layout: "secondary",
  data () {
    return {
      articleList: null
    }
  },
  head () {
    return {
      title: 'News | UW Solar'
    }
  },
  async asyncData ({ $content }) {
    const list = await $content("news").sortBy("order", "desc").fetch();
    return {
      articleList: list
    }
  },
  mounted () {
    for (let index = 0; index < this.articleList.length; index++) {
      const div = document.createElement("div");
      div.setAttribute("id", "temp");
      document.getElementById("root").appendChild(div);
      const ComponentClass = Vue.extend(NewsArticle);
      const instance = new ComponentClass({ propsData: {
        article: this.articleList[index],
        unique: "news-" + index
      }});
      
      instance.$mount("#temp");
    }
  }
}
</script>

<style scoped>

</style>