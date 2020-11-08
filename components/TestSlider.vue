<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>
          <div class="one">
              <p>One</p>
          </div>
      </div>
      <div>
          <div class="two">
              <p>Two</p>
          </div>
      </div>
      <div>
          <div class="three">
              <p>Three</p>
          </div>
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
