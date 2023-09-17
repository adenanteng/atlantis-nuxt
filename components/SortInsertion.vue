<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  arr: Array,
});

var result = ref("")
var startTime = ref(0)
var endTime = ref(0)
const show = ref(false)

// Javascript program for insertion sort

// Function to sort an array using insertion sort
function insertionSort(arr, n)
{
  let i, key, j;
  for (i = 1; i < n; i++)
  {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are
    greater than key, to one position ahead
    of their current position */
    while (j >= 0 && arr[j] > key)
    {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

function printArray( arr,  size)
{
  var i;
  var x;
  for (i = 0; i < size; i++) {
    result.value += arr[i] + " ";
  }
}

onMounted(() => {
  startTime = (new Date()).getTime()
  insertionSort(props.arr, props.arr.length);
  printArray(props.arr, props.arr.length)
  endTime = (new Date()).getTime()
  show.value = true
})

// This code is contributed by Mayank Tyagi
</script>

<template>
  <div class="text-left" v-if="show">

    <h3 class="ml-5 mb-2 text-gray-900 dark:text-white">Insertion Sort:</h3>
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
