<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  arr: Array,
});

var result = ref(null)
var startTime = ref(0)
var endTime = ref(0)
const show = ref(false)

// Function to partition the array and return the partition index
function partition(arr, low, high) {
  // Choosing the pivot
  let pivot = arr[high];

  // Index of smaller element and indicates the right position of pivot found so far
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      // Increment index of smaller element
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
  return i + 1; // Return the partition index
}

// The main function that implements QuickSort
function quickSort(arr, low, high) {
  if (low < high) {
    // pi is the partitioning index, arr[pi] is now at the right place
    let pi = partition(arr, low, high);

    // Separately sort elements before partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

onMounted(() => {
  startTime = (new Date()).getTime()
  quickSort(props.arr, 0, props.arr.length - 1);
  result = props.arr.join(" ")
  endTime = (new Date()).getTime()
  show.value = true
})

// This code is contributed by akshitsaxenaa09.
</script>

<template>
  <div class="text-left" v-if="show">

    <h3 class="ml-5 mb-2 text-gray-900 dark:text-white">Quick Sort:</h3>
      <TextAreaInput
          v-model="result"
          type="text"
          class="mt-1 block w-full resize-y"
          rows="8"
          disabled
      />

    <p class="ml-5 mt-1 text-base leading-7 text-gray-600 dark:text-gray-400">Took {{ endTime - startTime }} ms</p>
  </div>
</template>
