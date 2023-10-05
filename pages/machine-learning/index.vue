<script setup xmlns="http://www.w3.org/1999/html">
import {Icon} from '@iconify/vue';
import {useVueFuse} from 'vue-fuse'
import Default from "../../layouts/default.vue";

const loading = ref(false)

</script>

<template>

  <Default
      title="Machine Learning"
      subtitle="Lorem ipsum"
      desc="A crystal ball that can predict the future"
  >
    <template v-slot:action>
      <button onclick="history.back();return false;">
        <Icon icon="fluent:arrow-circle-left-20-regular" class="text-gray-900 dark:text-white text-4xl" />
      </button>
    </template>

    <div class="grid grid-cols-2 md:grid-cols-5 p-5 mt-8 gap-5">

      <NuxtLink to="/machine-learning/diabetes" class="font-medium backdrop-blur rounded-3xl py-2.5 px-4 border border-gray-300 dark:border-gray-600">
        <Icon icon="solar:virus-bold-duotone" class="text-5xl text-primary-600 dark:text-primary-400 mb-1" />
        <span class="text-gray-900 dark:text-white">Logistic Regression</span>
      </NuxtLink>



      <div class="p-5 w-full md:col-span-3">

      </div>
    </div>

  </Default>

</template>
