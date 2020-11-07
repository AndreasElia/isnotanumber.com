<template>
  <div class="container mx-auto">
    <div class="mt-8 px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
      <h1
        class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
      >
        Articles
      </h1>

      <div class="mt-12">
        <div v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="bg-gray-200 rounded-md px-4 py-2">
              <h2 class="font-semibold">
                {{ article.title }}
              </h2>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
