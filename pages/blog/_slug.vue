<template>
  <div class="container mx-auto">
    <div class="mt-8 px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
      <article class="prose prose-xl">
        <h1
          class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >
          {{ article.title }}
        </h1>

        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
};
</script>
