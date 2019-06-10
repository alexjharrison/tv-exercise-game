const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  server: {
    port: 3003,
    host: '0.0.0.0'
  },

  // Create api endpoint
  serverMiddleware: [
    // { path: '/api/show', handler: '~/api/Controllers/showController.js' },
    // { path: '/api/workout', handler: '~/api/Controllers/workoutController.js' }
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  generate: {
    routes: ['/Masterchef AU']
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  env: {
    WS_URL: process.env.WS_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv'
    // '~/io'
    // Socket io
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: 'http://localhost:3003/api/',
    // browserBaseURL: 'http://localhost:3003/api/'
    baseURL: process.env.API_URL,
    proxyHeaders: false,
    credentials: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
