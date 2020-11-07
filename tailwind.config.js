/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          'h2, h3, h4': {
            color: '#fff',
          },
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [
        'h1',
        'h2',
        'h3',
        'p',
        'blockquote',
        'strong',
        'font-sans',
        'antialiased',
        'text-white',
        'bg-gray-500',
      ]
    }
  }
}
