<template>
  <div class="my-6 container mx-auto sm:my-12">
    <div class="flex justify-between items-center">
      <logo />

      <NuxtLink :to="{ name: 'blog' }">
        Blog
      </NuxtLink>
    </div>

    <h2 class="mt-16 lg:mt-32 text-2xl tracking-loose leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl">
      Articles
    </h2>

    <!-- Articles -->
    <div class="mt-16 md:mt-32 lg:mt-40 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      <NuxtLink
        v-for="article of articles"
        :key="article.slug"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      >
        <div
          class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center"
          v-bind:style="{ backgroundImage: `url(${article.img})` }"
        ></div>
        <h3 class="mt-1">
          {{ article.title }}
        </h3>
        <p class="text-gray-200 text-sm">{{ article.description }}</p>
      </NuxtLink>
    </div>

    <!-- All good with you -->
    <all-the-same />

    <!-- Footer -->
    <the-footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
