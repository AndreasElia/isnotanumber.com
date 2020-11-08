<template>
  <div class="flex justify-between items-center" data-aos="fade-up">
    <a href="/">
      <h1 class="font-bold text-white sm:leading-none md:text-lg">
        not a
        <br class="hidden md:block">
        number.
      </h1>
    </a>

    <NuxtLink :to="{ name: 'blog' }">Blog</NuxtLink>
  </div>
</template>
