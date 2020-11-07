<template>
  <div class="container mx-auto">
    <div class="mt-8 px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
      <h1
        class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
      >
        Articles
      </h1>

      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div>
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
