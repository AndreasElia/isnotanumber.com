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
    extend: {
      colors: {
        gray: {
          50: '#F4F4F4',
          100: '#EAEAEA',
          200: '#CACACA',
          300: '#AAAAAA',
          400: '#6B6B6B',
          500: '#2B2B2B',
          600: '#272727',
          700: '#1A1A1A',
          800: '#131313',
          900: '#0D0D0D',
        },
        blue: {
          50: '#F5F5FF',
          100: '#EAEBFF',
          200: '#CBCDFF',
          300: '#ACAFFF',
          400: '#6D72FF',
          500: '#2F36FF',
          600: '#2A31E6',
          700: '#1C2099',
          800: '#151873',
          900: '#0E104D',
        },
      },
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
