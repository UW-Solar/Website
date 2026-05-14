<!-- Markus Schiffer and Alex Eidt -->
<!-- This file contains the page which displays current and archived news articles. -->
<!-- WARNING: THIS PAGE IS COMPLEX AND NOT EASY TO MODIFY. -->

<template>
  <div class="data-container">
    <!-- The following div adds spacing between page title and navbar. -->
    <div class="data"></div>
    <h1>News</h1>
    <br />
    <br />
    <br />
    <br />
    <div id="root">
      <!-- For each current news article, add it to "root". -->
      <div v-for="(article, index) in currArticleList" :key="'news-' + index">
        <news-article :article="article" />
      </div>
    </div>
    <h1>Archive</h1>
    <br />
    <div id="archive-root">
      <!-- For each year of the archived new articles, create the year dropdown. -->
      <div v-for="year in Object.keys(archive)" :key="'wrapper-' + year">
        <div v-b-toggle="'date-' + year" class="card-header year">
          <h3>{{ year }}</h3>
        </div>
        <!-- For each year, create a list of other news article dropdowns. -->
        <b-collapse :id="'date-' + year">
          <div v-for="(article, index) in archive[year]" :key="'news-wrapper-' + year + index">
            <!-- These are the individual news article dropdowns. They open each article. -->
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
    <!-- Link at the bottom to the UW Solar RSS feed. -->
    <div class="mt-5">
      <img id="rss-icon" class="mr-2" src="../static/RSS.png" alt="RSS Feed logo">
      Subscribe to our 
      <a href="/feed.xml" target="_blank">
          RSS feed
      </a>
      </div>
  </div>
</template>

<script>
import NewsArticle from '~/components/NewsArticle.vue';

export default {
  name: "News",  // Name of the page.
  layout: "secondary",  // The layout used (from layouts folder).
  // This, combined with the import statement, lets us use the
  // NewsArticle component.
  components : {
    NewsArticle,
  },
  data () {
    return {
      list: [],  // Synced with asyncData, list of all articles.
      currArticleList: [],  // List of current articles.
      archive: {},  // Dictionary mapping years to articles, used for archive.
    }
  },
  head () {  // The name of the page displayed on the browser tab.
    return {
      title: 'News | UW Solar'
    }
  },
  // Loads the news articles from the content/news directory.
  async asyncData ({ $content }) {
    return {
      list: await $content("news").fetch()
    }
  },
  mounted () {
    const currList = [];
    const archiveDict = {};
    const today = new Date();
    // Create the order variable for each article.
    this.list.forEach(article => {
      const splitDate = article.date.split(" ");
      const date = new Date(`${this.$mapMonth[splitDate[0]]}/${splitDate[1]
        .substring(0, splitDate[1].length - 1)}/${splitDate[2]}`);
      article.order = today.getTime() - date.getTime();
    });
    // Sort the articles by their order.
    this.list = this.list.sort((a, b) => {
      return a.order - b.order;
    });
    this.list.forEach(article => {
      const splitDate = article.date.split(" ");
      const year = parseInt(splitDate[2]);
      const month = this.$mapMonth[splitDate[0]];
      // If the article is current, add it to the currList.
      if (this.$academicYear(year, month)) {
        currList.push(article);
      } else {
        // Article is not current, sort into the appropriate ACADEMIC year.
        let academicYear;
        if (month >= 9) {
          academicYear = `${year}/${year + 1}`;
        } else {
          academicYear = `${year - 1}/${year}`;
        }
        if (!archiveDict.hasOwnProperty(academicYear)) {
          archiveDict[academicYear] = [];
        }
        archiveDict[academicYear].push(article);
      }
    });
    // Update our state (data).
    this.currArticleList = currList;
    this.archive = archiveDict;
  }
}
</script>

<style scoped>
/* Styles the appearance of the RSS link icon. */
#rss-icon {
  width: 25px;
  height: auto;
}
/* Specify how each card header is aligned using flex. */
.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: auto;
}
/* Add a bottom border to the year buttons. */
.year {
  border-bottom: 2px solid black;
}
</style>