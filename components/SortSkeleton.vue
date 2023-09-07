<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  sort: Object,
  loading: Boolean
});
</script>

<template>
  <div class="text-left relative" >
    <h3 class="ml-5 mb-2">{{ sort.name }}</h3>
    <TextAreaInput
        type="text"
        class="mt-1 block w-full"
        rows="8"
        placeholder="Run forrest runnnn....."
        disabled
    />
    <p class="ml-5 mt-1 text-base leading-7 text-gray-600">Time in ms</p>
    <div v-if="loading" class="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
      <Icon icon="eos-icons:loading" class="h-20 w-20 text-primary-600 " />
    </div>
  </div>
</template>
