<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  title: String,
  subtitle: String,
  desc: String,
})

useHead({
  title: 'Atlantis Made With Nuxt',
  meta: [
    { name: 'description', content: 'Atlantis' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: 'Atlantis Made With Nuxt',
  ogTitle: 'Atlantis Made With Nuxt',
  description: 'Semua kepusingan ada disini.',
  ogDescription: 'Semua kepusingan ada disini.',
  ogImage: 'https://waykapay.com/img/minion.jpg',
  twitterCard: 'summary_large_image',
})

const colorMode = useColorMode()

// console.log(colorMode.preference)

</script>

<template>
  <main class="min-h-screen bg-white text-white">

    <slot />

  </main>
</template>
