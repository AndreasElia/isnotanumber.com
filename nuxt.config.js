
export default {
  target: 'static',
  router: {
    base: '/'
  },
  mode: 'spa',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'not a number',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Why fit in when you can stand out.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'data:image/x-icon;,' }
    ],
    bodyAttrs: {
      class: 'font-sans antialiased text-white bg-gray-500'
    },
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  components: {
    dirs: [
      '~/components',
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'aos/dist/aos.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/aos.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
