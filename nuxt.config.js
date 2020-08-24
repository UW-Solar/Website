
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
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
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS', href: 'news.xml'}
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
      path: '/feed.xml',
      async create(feed) {
        feed.options = {
          title: 'UW Solar News Feed',
          link: 'http://localhost:3000/feed.xml',
          description: 'All news and events...!,'
        };

        const { $content } = require('@nuxt/content');

        const posts = await $content('news').where({ archive: false }).sortBy("order", "desc").fetch();

        // If we want to get rid of the archive parameter, this function is now easily re-writeable.

        let index = 0;
        posts.forEach(post => {
          feed.addItem({
            title: post.title,
            date: new Date(post.date),
            author: [{
              name: post.author,
              email: 'Solar_at_uw@uw.edu',
              link: "http://localhost:3000"
            }],
            link: 'http://localhost:3000/news/#news-' + index,
            content: post.content,
            image: 'http:localhost:3000/static/' + post.image,
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
