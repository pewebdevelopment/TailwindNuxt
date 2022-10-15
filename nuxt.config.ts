


export default defineNuxtConfig({
  srcDir: "./",
  css: [
    '@/assets/css/main.css',
  ],

  buildModules: [
    '@pinia/nuxt',
    
  ],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
