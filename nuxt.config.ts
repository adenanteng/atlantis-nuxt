// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // link: [
  //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap' }
  // ],

  googleFonts: {
    families: {
      // Roboto: true,
      // 'Josefin+Sans': true,
      // Lato: [100, 300],
      Poppins: {
        wght: [400, 500, 700],
      },
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],

  // colorMode: {
  //   classSuffix: ''
  // }

})
