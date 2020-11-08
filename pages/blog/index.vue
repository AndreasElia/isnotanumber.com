<template>
  <div class="my-6 container mx-auto sm:my-12">
    <the-header />

    <h2
      class="mt-16 lg:mt-32 text-2xl tracking-loose leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Articles
    </h2>

    <client-only>
      <div class="mt-16 md:mt-32 lg:mt-40 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <NuxtLink
          v-for="(article, index) of articles"
          :key="article.slug"
          data-aos="fade-up"
          :data-aos-delay="(200 * index) + 400"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div
              class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center"
              :style="{ backgroundImage: `url(${article.img})` }"
            ></div>
            <h3 class="mt-1">
              {{ article.title }}
            </h3>
            <p class="text-gray-200 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </client-only>

    <all-the-same />

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
