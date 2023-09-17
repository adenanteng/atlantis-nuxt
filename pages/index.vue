<script setup>
    import { Icon } from '@iconify/vue';
    import Default from "../layouts/default.vue";

</script>

<template>
  <Default
    title="Atlantis"
    subtitle="Welcome to"
    desc="Semua kepusingan ada disini"
  >
    <template v-slot:action>
      <button class="text-gray-900 dark:text-white">
        <Icon icon="fluent:weather-sunny-20-filled" class="text-gray-900 dark:text-white text-4xl" />
<!--        <Icon icon="fluent:weather-moon-20-filled" class="text-4xl" />-->
      </button>
    </template>

    <div class="grid grid-cols-2 md:grid-cols-5 p-5 mt-8 gap-10">
      <NuxtLink to="/sort-algorithm" class="font-medium">
        <Icon icon="solar:sort-from-bottom-to-top-bold-duotone" class="text-5xl text-primary-600 mb-1" />
        <span class="text-gray-900 dark:text-white">Sort Algorithm</span>
      </NuxtLink>

      <NuxtLink to="/fuzzy-search" class="font-medium">
        <Icon icon="solar:emoji-funny-circle-bold-duotone" class="text-5xl text-primary-600 mb-1" />
        <span class="text-gray-900 dark:text-white">Fuzzy Search</span>
      </NuxtLink>

      <NuxtLink to="/machine-learning" class="font-medium">
        <Icon icon="solar:washing-machine-bold-duotone" class="text-5xl text-primary-600 mb-1" />
        <span class="text-gray-900 dark:text-white">Machine Learning</span>
      </NuxtLink>
    </div>
  </Default>

</template>
