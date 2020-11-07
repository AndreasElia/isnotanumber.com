<template>
  <div class="my-6 container mx-auto sm:my-12">
    <div class="flex justify-between items-center">
      <logo />

      <NuxtLink :to="{ name: 'blog' }">
        Blog
      </NuxtLink>
    </div>

    <div
      class="mt-16 lg:mt-32 w-full flex items-center justify-center h-64 bg-gray-400 rounded-md overflow-hidden relative bg-cover bg-center bg-opacity-25"
      v-bind:style="{ backgroundImage: `url(${article.img})` }"
    >
      <div class="bg-black bg-opacity-50 absolute w-full h-full z-10"></div>
      <h2 class="text-2xl tracking-loose leading-10 font-bold z-20 sm:text-5xl sm:leading-none md:text-6xl">
        {{ article.title }}
      </h2>
    </div>

    <!-- Article -->
    <article class="mt-16 md:mt-32 lg:mt-40 text-white prose lg:prose-xl">
      <nuxt-content :document="article" />
    </article>

    <!-- All good with you -->
    <all-the-same />

    <!-- Footer -->
    <the-footer />
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
