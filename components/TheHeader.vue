<template>
  <div class="flex justify-between items-center" data-aos="fade-up">
    <a href="/">
      <h1 class="font-bold text-white sm:leading-none md:text-lg">
        not a
        <br class="hidden md:block">
        number.
      </h1>
    </a>

    <button
      @click="open = !open"
      class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-opacity-75 focus:outline-none focus:text-opacity-75 transition duration-150 ease-in-out"
    >
      <svg :class="{ 'hidden': open, 'block': !open }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>

      <svg :class="{ 'hidden': !open, 'block': open }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
    }
  }
}
</script>
