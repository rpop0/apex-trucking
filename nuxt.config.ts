// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.scss',
        '@/assets/css/components.scss',
        '@/assets/css/animations.scss',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],

    plugins: [
        '@/plugins/fontawesome.js',
    ],

    build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-brands-svg-icons'
        ]
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

})
