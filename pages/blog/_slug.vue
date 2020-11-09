<template>
  <div class="container px-5 mx-auto my-6 sm:px-0 sm:my-12">
    <TheHeader />

    <div
      class="relative flex items-center justify-center w-full h-64 mt-16 overflow-hidden bg-gray-400 bg-opacity-25 bg-center bg-cover lg:mt-32"
      data-aos="fade-up"
      data-aos-delay="200"
      v-bind:style="{ backgroundImage: `url(${article.img})` }"
    >
      <div class="absolute z-10 w-full h-full bg-black bg-opacity-50"></div>
      <h2 class="z-20 text-2xl font-bold leading-10 tracking-loose sm:text-5xl sm:leading-none md:text-6xl">
        {{ article.title }}
      </h2>
    </div>

    <article
      class="mt-16 prose text-white md:mt-32 lg:mt-40 lg:prose-xl"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <nuxt-content :document="article" />
    </article>

    <AllTheSame />

    <TheFooter />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>
