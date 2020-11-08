<template>
  <div>
    <VueSlickCarousel ref="carousel" :arrows="false" :dots="false">
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

    <div class="absolute top-0 flex w-full">
        <div class="w-1/2 h-full" @click="showPrev"></div>
        <div class="w-1/2 h-full" @click="showNext"></div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  methods: {
    showPrev() {
      this.$refs.carousel.prev()
    },
    showNext() {
      this.$refs.carousel.next()
    }
  }
}
</script>
