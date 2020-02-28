import bodyParser from 'body-parser';
import session from 'express-session';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kakaotalkweb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean' }
    ],
    script: [
      { src: "http://code.jquery.com/jquery-latest.min.js" },
      { src: "https://unpkg.com/axios/dist/axios.min.js" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    bodyParser.urlencoded(),
    // session middleware
    session({
      secret: 'kakao-web-secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api/apiKakao',
    '~/api/apiLocal'
  ]
}

