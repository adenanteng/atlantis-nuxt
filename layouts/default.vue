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
  <main class="max-w-7xl mx-auto bg-white py-10 gap-10">

    <div class="px-5 w-full flex flex-col md:col-span-2">
      <div class="mb-10" >
<!--        <button v-if="props.prev" onclick="history.back();return false;">-->
<!--          <Icon icon="fluent:arrow-circle-left-20-regular" class="text-4xl" />-->
<!--        </button>-->

<!--        <button v-else >-->
<!--          <Icon icon="fluent:circle-20-regular" class="text-4xl" />-->
<!--        </button>-->

        <slot name="action" />
      </div>

      <p class="text-base font-semibold text-primary-600">{{ props.subtitle }}</p>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ props.title }}</h1>
      <p class="text-base leading-7 text-gray-600">{{ props.desc }}</p>

    </div>

    <slot />

  </main>
</template>
