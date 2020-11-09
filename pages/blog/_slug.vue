<template>
  <div class="px-5 my-6 container mx-auto sm:px-0 sm:my-12">
    <TheHeader />

    <div
      class="mt-16 lg:mt-32 w-full flex items-center justify-center h-64 bg-gray-400 rounded-md overflow-hidden relative bg-cover bg-center bg-opacity-25"
      data-aos="fade-up"
      data-aos-delay="200"
      v-bind:style="{ backgroundImage: `url(${article.img})` }"
    >
      <div class="bg-black bg-opacity-50 absolute w-full h-full z-10"></div>
      <h2 class="text-2xl tracking-loose leading-10 font-bold z-20 sm:text-5xl sm:leading-none md:text-6xl">
        {{ article.title }}
      </h2>
    </div>

    <article
      class="mt-16 md:mt-32 lg:mt-40 text-white prose lg:prose-xl"
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
