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
      desc="Lorem ipsum"
  >
    <template v-slot:action>
      <button onclick="history.back();return false;">
        <Icon icon="fluent:arrow-circle-left-20-regular" class="text-4xl"/>
      </button>
    </template>

    <div class="grid md:grid-cols-5 mt-8">
      <div class="p-5 w-full md:col-span-2">
        <NuxtLink to="/machine-learning/presentation" class="font-medium">
          <Icon icon="solar:presentation-graph-bold-duotone" class="text-5xl text-primary-600 mb-1" />
          <span >Presentation</span>
        </NuxtLink>
      </div>

      <div class="p-5 w-full md:col-span-3">

      </div>
    </div>

  </Default>

</template>
