<template>
  <div>
    <div>
      <div class="container">
        <logo />

        <div class="space-y-2" aria-label="Menu Close">
          <span class="bg-white h-1 w-10"></span>
          <span class="bg-white h-1 w-10"></span>
          <span class="bg-white h-1 w-10"></span>
        </div>
      </div>
    </div>

    <div>
      <ul>
        <li style="animation-delay: 0.15s">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li style="animation-delay: 0.33s">
          <NuxtLink to="/balansaplus">balansa+</NuxtLink>
        </li>
        <li style="animation-delay: 0.44s">
          <NuxtLink to="/mygohire">My Go Hire</NuxtLink>
        </li>
        <li style="animation-delay: 0.55s">
          <NuxtLink to="/gradsmart">GradSmart</NuxtLink>
        </li>
        <li style="animation-delay: 0.66s">
          <NuxtLink to="/craftr">Craftr</NuxtLink>
        </li>
        <li style="animation-delay: 0.22s">
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
