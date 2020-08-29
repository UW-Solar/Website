
export default {
  target: 'static',
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  router: {
    base: '/Solar2.0/'
  },
  generate: {
    fallback: true
  },
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // title: 'UW Solar | Urban Infrastructure Lab',
    titleTemplate(titleChunk) {
      return titleChunk ? titleChunk : 'UW Solar | Urban Infrastructure Lab';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
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
    { src: '~/plugins/functions.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/feed',
  ],

  feed: [
    {
      path: 'feed.xml',
      async create(feed) {
        feed.options = {
          title: 'UW Solar News Feed',
          link: 'https://markusschiffer.github.io/Solar2.0/feed.xml',
          description: 'All news and events...!,'
        };

        const { $content } = require('@nuxt/content');

        var posts = await $content('news').fetch();

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
        // Create "order" attribute based on when article was written to sort articles from most to least recent
        posts.forEach(article => {
          const splitDate = article.date.split(" ");
          const date = new Date(`${mapMonth[splitDate[0]]}/${splitDate[1]}/${splitDate[2]}`);
          article.order = today.getTime() - date.getTime();
        });
        // Sort Posts based on their publish date
        posts = posts.sort((a, b) => {
          return a.order - b.order;
        });

        // If we want to get rid of the archive parameter, this function is now easily re-writeable.

        let index = 0;
        const root = "http://localhost:3000";
        posts.forEach(post => {
          feed.addItem({
            title: post.title,
            date: new Date(post.date),
            author: [{
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
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
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
