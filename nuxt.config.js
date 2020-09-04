// File intially written by Markus Schiffer and Alex Eidt for UW Solar.
// This file defines some of the behind the scenes behavior of the site.
// Refer to the inline comments for details about what everything does.

export default {
  target: 'static',  // We're building a static application.
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  router: {
    base: '/'  // For hosting on GitHub, specify the root directory.
  },
  generate: {
    fallback: true  // Allowing the page to refresh.
  },
  mode: 'universal',  // Not SPA, full static.
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // Either get page titles from head function on page, or default to
    // UW Solar | Urban Infrastructure Lab
    titleTemplate(titleChunk) {
      return titleChunk ? titleChunk : 'UW Solar | Urban Infrastructure Lab';
    },
    // Default meta tag behavior.
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    // Specifies favicon (tab image).
    link: [
      { rel: 'icon', type: 'image/png', href: '~/static/icon.png' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/functions.js' }  // Global use functions.
  ],
  /*
  ** Nuxt.js dev-modules
  */
  // Default linting.
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  // Nuxt modules we use on the site.
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/feed',
  ],

  // Specifies how to create the RSS feed. Should not need to be updated
  // regularly, dynamically determines how to create the feed.
  feed: [
    {
      path: 'feed.xml',  // Where we keep the feed.
      async create(feed) {  // Initial feed creator method.
        feed.options = {
          title: 'UW Solar News Feed',
          link: 'https://uw-solar.github.io/Website/News',
          description: 'All UW Solar news and events!'
        };

        // Declare the nuxt content module, need for next call.
        const { $content } = require('@nuxt/content');

        // Get the news articles from the .md files in content/news.
        var posts = await $content('news').fetch();

        // Maps text months to number.
        const mapMonth = {
          "January": 1,
          "February": 2,
          "March": 3,
          "April": 4,
          "May": 5,
          "June": 6,
          "July": 7,
          "August": 8,
          "September": 9,
          "October": 10,
          "November": 11,
          "December": 12
        };

        const today = new Date();
        // Create "order" attribute based on when article was written to sort
        // articles from most to least recent.
        posts.forEach(article => {
          const splitDate = article.date.split(" ");
          // Create date object for date of news article.
          const date = new Date(`${mapMonth[splitDate[0]]}/${splitDate[1]}/${splitDate[2]}`);
          article.order = today.getTime() - date.getTime();
        });
        // Sort Posts based on their publish date.
        posts = posts.sort((a, b) => {
          return a.order - b.order;
        });

        let index = 0;
        const root = "https://uw-solar.github.io/Website/";
        // Create an entry for each post in the RSS feed.
        posts.forEach(post => {
          feed.addItem({
            title: post.title,
            date: new Date(post.date),
            author: [{  // Needs all three of the following fields to work.
              name: post.author,
              email: 'solaruw@uw.edu',
              link: root
            }],
            link: `${root}/news/#news-${index}`,
            content: post.content,
            image: `${root}/static/${post.image}`,
          })
          index++;
        });
        feed.addCategory('Solar power.');
        feed.addCategory('University of Washington');
      },
      cacheTime: 1000 * 60 * 15,  // How long rss readers should keep the feed.
      type: 'rss2',  // Type of feed. DO NOT MODIFY.
    },
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
