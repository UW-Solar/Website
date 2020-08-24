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
    <br />
    <div id="archive-root">
      <div v-for="year in Object.keys(archive)" :key="'wrapper-' + year">
        <div v-b-toggle="'date-' + year" class="card-header">
          <h3>{{ year }}</h3>
        </div>
        <b-collapse :id="'date-' + year">
          <div v-for="(article, index) in archive[year]" :key="'news-wrapper-' + year + index">
            <div v-b-toggle="'news-' + year + index" class="card-header flex-row-reverse">
              <h4>{{ article.title }}</h4>
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
      <a href="../feed.xml" target="_blank">
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
      list: await $content("news").where({ title: { $ne: 'JS-Skip' } }).fetch()
    }
  },
  mounted () {
    const currList = [];
    const archiveDict = {};
    const today = new Date();
    this.list.forEach(article => {
      const splitDate = article.date.split(" ");
      const date = new Date(`${this.$mapMonth[splitDate[0]]}/${splitDate[1]}/${splitDate[2]}`);
      article.order = today.getTime() - date.getTime();
    });
    this.list = this.list.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      } else if (a.order < b.order) {
        return -1;
      } else {
        return 0;
      }
    });
    this.list.forEach(article => {
      const splitDate = article.date.split(" ");
      const year = parseInt(splitDate[2]);
      const month = this.$mapMonth[splitDate[0]];
      if (this.$academicYear(year, month)) {
        currList.push(article);
      } else {
        let academicYear;
        if (month >= 9) {
          academicYear = `${year}/${year + 1}`;
        } else {
          academicYear = `${year - 1}/${year}`;
        }
        if (archiveDict.hasOwnProperty(academicYear)) {
          archiveDict[academicYear].push(article);
        } else {
          archiveDict[academicYear] = [article];
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
.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: auto;
}
</style>