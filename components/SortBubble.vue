<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  arr: Array,
});

var result = ref("")
var startTime = ref(0)
var endTime = ref(0)
const show = ref(false)

// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort
function bubbleSort(arr, n)
{
  var i, j, temp;
  var swapped;
  for (i = 0; i < n - 1; i++)
  {
    swapped = false;
    for (j = 0; j < n - i - 1; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        // Swap arr[j] and arr[j+1]
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were
    // swapped by inner loop, then break
    if (swapped == false)
      break;
  }
}

function printArray( arr,  size)
{
  var i;
  for (i = 0; i < size; i++) {
    result.value += arr[i] + " ";
  }
}

onMounted(() => {
  startTime = (new Date()).getTime()
  bubbleSort(props.arr, props.arr.length);
  printArray(props.arr, props.arr.length)
  endTime = (new Date()).getTime()
  show.value = true
})

// This code is contributed shivanisinghss2110
</script>

<template>
  <div class="text-left" v-if="show">

    <h3 class="ml-5 mb-2 text-gray-900 dark:text-white">Bubble Sort:</h3>
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
