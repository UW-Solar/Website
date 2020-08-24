<template>
  <div class="data-container">
    <div class="data"></div>
    <h1>News</h1>
    <br />
    <br />
    <br />
    <br />
    <div id="root">
      <div v-for="(article, index) in currArticleList" :key="'news-' + index">
        <news-article :article="article" />
      </div>
    </div>
    <h1>Archive</h1>
    <div id="archive-root">
      <div v-for="year in Object.keys(archive)" :key="'wrapper-' + year">
        <div v-b-toggle="'date-' + year" class="card-header">
          <h3>{{ year }}</h3>
        </div>
        <b-collapse :id="'date-' + year">
          <div v-for="(article, index) in archive[year]" :key="'news-wrapper-' + year + index">
            <div v-b-toggle="'news-' + year + index" class="card-header">
              <h3>{{ article.title }}</h3>
            </div>
            <b-collapse :id="'news-' + year + index">
              <news-article :article="article" />
            </b-collapse>
          </div>
        </b-collapse>
      </div>
    </div>
    <div class="mt-5">
      <img id="rss-icon" class="mr-2" src="../static/RSS.png" alt="RSS Feed logo">
      Subscribe to our 
      <a href="../feed.xml" targtet="_blank">
          RSS feed
      </a>
      </div>
  </div>
</template>

<script>
import NewsArticle from '~/components/NewsArticle.vue';

export default {
  name: "News",
  layout: "secondary",
  components : {
    NewsArticle,
  },
  data () {
    return {
      list: [],
      currArticleList: [],
      archive: {},
    }
  },
  head () {
    return {
      title: 'News | UW Solar'
    }
  },
  async asyncData ({ $content }) {
    return {
      list: await $content("news").sortBy("order", "desc").fetch()
    }
  },
  mounted () {
    const currList = [];
    const archiveDict = {};
    this.list.forEach(article => {
      const splitDate = article.date.split(" ");
      const year = parseInt(splitDate[2]);
      const month = this.$mapMonth[splitDate[0]];
      if (this.$academicYear(year, month)) {
        currList.push(article);
      } else {
        const academicYear = 2012 + Math.floor((article.order - 263) / 365);
        const key = academicYear + "/" + (academicYear + 1)
        if (archiveDict.hasOwnProperty(key)) {
          archiveDict[key].push(article);
        } else {
          archiveDict[key] = [article];
        }
      }
    });
    this.currArticleList = currList;
    this.archive = archiveDict;
  }
}
</script>

<style scoped>
#rss-icon {
  width: 25px;
  height: auto;
}
</style>