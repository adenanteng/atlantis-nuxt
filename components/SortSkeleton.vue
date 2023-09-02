<script setup>
const props = defineProps({
  sort: Object,
});
</script>

<template>
  <div class="text-left" >
    <h3 class="ml-5 mb-2">{{ sort.name }}</h3>
      <TextAreaInput
          type="text"
          class="mt-1 block w-full"
          rows="8"
          placeholder="Koshongggg...."
          disabled
      />
  </div>
</template>
