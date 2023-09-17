<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  modelValue: String | Number,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute('autofocus')) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
  <input
      ref="input"
      class="bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-1.5 border border-gray-300 focus:border-primary-300 rounded-3xl shadow-sm"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  >
</template>