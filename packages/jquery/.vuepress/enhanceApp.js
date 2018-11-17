// Unable to import jquery at the beginning because the content in enhanceApp will run on the server side
// See: https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions

export default ({ isServer }) => {
  if (!isServer) {
    window.$ = window.jQuery = require('jquery')
    require('owl.carousel')
    require('owl.carousel/dist/assets/owl.carousel.min.css')
    require('owl.carousel/dist/assets/owl.theme.default.min.css')
  }
}
