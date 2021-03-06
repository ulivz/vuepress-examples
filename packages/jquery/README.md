---
sidebar: auto
---

# Using jQuery in VuePress

## From Dependency

1. Install jQuery:

```bash
yarn add jquery -D
```

2. Create a [.vuepress/enhanceApp.js](https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements):

```js
export default ({ isServer }) => {
  if (!isServer) {
    // Register jQuery
    window.$ = window.jQuery = require('jquery')
    // Register your jQuery plugin
    require('owl.carousel')
    require('owl.carousel/dist/assets/owl.carousel.min.css')
    require('owl.carousel/dist/assets/owl.theme.default.min.css')
  }
}
```

::: warning Note
You cannot to import `jquery` at the top directly because the `enhanceApp.js` will run both server and client side.
See: [Browser API Access Restrictions](https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions)
:::

3. Create a Vue component ( e.g. `.vuepress/components/Carousel.vue`):

```vue
<template>
  <div id="demos">
    <div class="owl-carousel owl-theme">
      <div class="item"><h4>1</h4></div>
      <div class="item"><h4>2</h4></div>
      <div class="item"><h4>3</h4></div>
      <div class="item"><h4>4</h4></div>
      <div class="item"><h4>5</h4></div>
      <div class="item"><h4>6</h4></div>
      <div class="item"><h4>7</h4></div>
      <div class="item"><h4>8</h4></div>
      <div class="item"><h4>9</h4></div>
      <div class="item"><h4>10</h4></div>
      <div class="item"><h4>11</h4></div>
      <div class="item"><h4>12</h4></div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })
    }
  }
</script>

<style>
  #demos .owl-carousel .item {
    height: 10rem;
    background: #4DC7A0;
    padding: 1rem;
    font-size: 30px;
    text-align: center;
    color: white;
  }
</style>
```

4. [Using this Vue component](https://vuepress.vuejs.org/guide/using-vue.html) at your markdown file:

```md
<Carousel/>
```

5. Then you will get:

<Carousel/>

## From CDN

If you want to use a juqery from CDN, You need to add jQuery via [head](https://vuepress.vuejs.org/config/#head):

```js
// .vuepress/config.js
module.exports = { 
  head: [
    ['script', { src: 'https://code.jquery.com/jquery-3.3.1.min.js' }]
  ]
}
```

The remaining steps are the same as not using CDN.

## From Local File

If you don’t want to use the CDN, it’s easy enough to switch to jQuery files hosted on your own domain.

First, put the script file (e.g. `jquery.min.js`) under `.vuepress/public/`, then update your site config:

```js
// .vuepress/config.js
module.exports = { 
  head: [
    ['script', { src: '/jquery.min.js' }]
  ]
}
```
