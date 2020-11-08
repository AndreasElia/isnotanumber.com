<template>
  <div>
    <VueSlickCarousel :arrows="false" :dots="false">
      <div>
        <div class="one"></div>
      </div>
      <div>
        <div class="two"></div>
      </div>
      <div>
        <div class="three"></div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel }
}
</script>
