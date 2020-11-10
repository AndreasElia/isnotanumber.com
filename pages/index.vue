<template>
  <div class="relative">
    <div>
      <OurWork />
    </div>

    <div class="absolute top-0 w-full px-5 py-6 sm:px-0 sm:py-12">
      <div class="container mx-auto">
        <TheHeader />
      </div>
    </div>

    <div class="container mx-auto">
      <div class="px-5 my-6 sm:px-0 sm:my-12">
        <h2
          class="mt-16 text-2xl font-bold leading-10 lg:mt-32 tracking-loose sm:text-5xl sm:leading-none md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Why fit in when you
          <br class="hidden md:block">
          <div class="lg:mt-5">
            can <span class="px-2 bg-gray-400 bg-opacity-25 lg:px-4">stand out.</span>
          </div>
        </h2>

        <div class="grid grid-cols-1 mt-16 md:mt-32 lg:mt-40 md:grid-cols-2 gap-x-8 gap-y-12">
          <div data-aos="fade-up" data-aos-delay="400">
            <div class="transition duration-500 ease-in-out transform hover:-translate-y-1">
              <div
                class="w-full h-64 bg-gray-400 bg-center bg-cover"
                style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
              ></div>
              <h3 class="mt-1">
                balansa+
              </h3>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <div class="transition duration-500 ease-in-out transform hover:-translate-y-1">
              <div
                class="w-full h-64 bg-gray-400 bg-center bg-cover"
                style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
              ></div>
              <h3 class="mt-1">
                My Go Hire
              </h3>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <div class="transition duration-500 ease-in-out transform hover:-translate-y-1">
              <div
                class="w-full h-64 bg-gray-400 bg-center bg-cover"
                style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
              ></div>
              <h3 class="mt-1">
                GradSmart
              </h3>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <div class="transition duration-500 ease-in-out transform hover:-translate-y-1">
              <div
                class="w-full h-64 bg-gray-400 bg-center bg-cover"
                style="background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);"
              ></div>
              <h3 class="mt-1">
                Craftr
              </h3>
            </div>
          </div>
        </div>

        <AllTheSame />

        <TheFooter />
      </div>
    </div>
  </div>
</template>
