<template>
  <div class="my-6 container mx-auto sm:my-12">
    <div class="flex justify-between items-center">
      <logo />

      <NuxtLink :to="{ name: 'blog' }">
        Blog
      </NuxtLink>
    </div>

    <h2 class="mt-16 lg:mt-32 text-2xl tracking-loose leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl">
      Why fit in when you
      <br class="hidden md:block">
      <div class="lg:mt-5">
        can <span class="bg-gray-400 bg-opacity-25 rounded-md px-2 lg:px-4">stand out.</span>
      </div>
    </h2>

    <!-- Work -->
    <div class="mt-16 md:mt-32 lg:mt-40 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" data-aos="fade-up">
      <div>
        <div class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"></div>
        <h3 class="mt-1">
          balansa+
        </h3>
      </div>
      <div>
        <div class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"></div>
        <h3 class="mt-1">
          My Go Hire
        </h3>
      </div>
      <div>
        <div class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"></div>
        <h3 class="mt-1">
          GradSmart
        </h3>
      </div>
      <div>
        <div class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"></div>
        <h3 class="mt-1">
          Craftr
        </h3>
      </div>
    </div>

    <!-- All good with you -->
    <all-the-same />

    <!-- Footer -->
    <the-footer />
  </div>
</template>
