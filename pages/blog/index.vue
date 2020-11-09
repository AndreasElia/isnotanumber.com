<template>
  <div class="container px-5 mx-auto my-6 sm:px-0 sm:my-12">
    <TheHeader />

    <h2
      class="mt-16 text-2xl font-bold leading-10 lg:mt-32 tracking-loose sm:text-5xl sm:leading-none md:text-6xl"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Articles
    </h2>

    <div class="grid grid-cols-1 mt-16 md:mt-32 lg:mt-40 md:grid-cols-2 gap-x-8 gap-y-12">
      <NuxtLink
        v-for="(article, index) of articles"
        :key="article.slug"
        data-aos="fade-up"
        :data-aos-delay="(200 * index) + 400"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      >
        <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div
            class="w-full h-64 bg-gray-400 bg-center bg-cover"
            :style="{ backgroundImage: `url(${article.img})` }"
          ></div>
          <h3 class="mt-1">
            {{ article.title }}
          </h3>
          <p class="text-sm text-gray-200">
            {{ article.description }}
          </p>
        </div>
      </NuxtLink>
    </div>

    <AllTheSame />

    <TheFooter />
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
