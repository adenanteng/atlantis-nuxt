<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  title: String,
  subtitle: String,
  desc: String,
})


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
