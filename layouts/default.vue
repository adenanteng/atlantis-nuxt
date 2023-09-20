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
  <main class="min-h-screen bg-white dark:bg-gray-900 bg-glass bg-fixed py-10 gap-10 transition duration-1000">
    <div class="max-w-7xl mx-auto">

      <div class="px-5 w-full flex flex-col md:col-span-2">
        <div class="mb-10" >
          <slot name="action" />
        </div>

        <p class="text-base font-semibold text-primary-600 dark:text-primary-400">{{ props.subtitle }}</p>
        <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.title }}</h1>
        <p class="text-sm leading-7 text-gray-600 dark:text-gray-200">{{ props.desc }}</p>

      </div>

      <slot />

<!--      <div class="fixed bottom-5 md:bottom-10 px-5">-->
<!--        <select-->
<!--            class="bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-1.5 border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"-->
<!--            v-model="$colorMode.preference"-->
<!--        >-->
<!--          <option value="system">System</option>-->
<!--          <option value="light">Light</option>-->
<!--          <option value="dark">Dark</option>-->
<!--        </select>-->
<!--      </div>-->
    </div>



  </main>
</template>

<!--<style>-->
<!--.page-enter-active,-->
<!--.page-leave-active {-->
<!--  transition: all 0.4s;-->
<!--}-->
<!--.page-enter-from,-->
<!--.page-leave-to {-->
<!--  opacity: 0;-->
<!--  filter: blur(1rem);-->
<!--}-->
<!--</style>-->
