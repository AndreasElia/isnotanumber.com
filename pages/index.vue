<template>
  <div class="my-6 container mx-auto sm:my-12">
    <TheHeader />

    <h2
      class="mt-16 lg:mt-32 text-2xl tracking-loose leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Why fit in when you
      <br class="hidden md:block">
      <div class="lg:mt-5">
        can <span class="bg-gray-400 bg-opacity-25 rounded-md px-2 lg:px-4">stand out.</span>
      </div>
    </h2>

    <div class="mt-16 md:mt-32 lg:mt-40 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      <NuxtLink to="/balansaplus" data-aos="fade-up" data-aos-delay="400">
        <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div
            class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center"
            style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
          ></div>
          <h3 class="mt-1">
            balansa+
          </h3>
        </div>
      </NuxtLink>
      <NuxtLink to="/mygohire" data-aos="fade-up" data-aos-delay="600">
        <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div
            class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center"
            style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
          ></div>
          <h3 class="mt-1">
            My Go Hire
          </h3>
        </div>
      </NuxtLink>
      <NuxtLink to="/gradsmart" data-aos="fade-up" data-aos-delay="800">
        <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div
            class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center"
            style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
          ></div>
          <h3 class="mt-1">
            GradSmart
          </h3>
        </div>
      </NuxtLink>
      <NuxtLink to="/craftr" data-aos="fade-up" data-aos-delay="400">
        <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div
            class="w-full h-64 bg-gray-400 rounded-md bg-cover bg-center"
            style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
          ></div>
          <h3 class="mt-1">
            Craftr
          </h3>
        </div>
      </NuxtLink>
    </div>

    <AllTheSame />

    <TheFooter />
  </div>
</template>
