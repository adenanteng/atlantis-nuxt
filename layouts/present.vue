<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  title: String,
  subtitle: String,
  desc: String,
})

useHead({
  title: 'Atlantis',
  meta: [
    { name: 'description', content: 'Atlantis' }
  ],
  bodyAttrs: {
    class: 'Lorem ipsum dolor sit amet'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: 'Atlantis',
  ogTitle: 'Atlantis',
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
