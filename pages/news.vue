<template>
  <div class="data-container">
    <div class="data"></div>
      <h1>News</h1>
      <br />
      <br />
      <br />
      <br />
      <div id="root"></div>
      <div class="mt-5">
        <img id="rss-icon" class="mr-2" src="../static/RSS.png" alt="RSS Feed logo">
        Subscribe to our 
        <a href="../feed.xml">
            RSS feed
        </a>
      </div>
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
    const list = await $content("news").where({ archive: false }).sortBy("order", "desc").fetch();
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

      const hr = document.createElement("hr");
      hr.setAttribute("style", "border: 2px solid black;");
      document.getElementById("root").appendChild(hr);
    }
  }
}
</script>

<style scoped>
#rss-icon {
  width: 25px;
  height: auto;
}
</style>