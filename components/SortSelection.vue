<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps({
  arr: Array,
});

var result = ref("")
var startTime = ref(0)
var endTime = ref(0)
const show = ref(false)

// Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr,  n)
{
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n-1; i++)
  {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j;

    // Swap the found minimum element with the first element
    swap(arr,min_idx, i);
  }
}

function printArray(arr,  size)
{
  var i;
  for (i = 0; i < size; i++) {
    result.value += arr[i] + " ";
  }
}

onMounted(() => {
  startTime = (new Date()).getTime()
  selectionSort(props.arr, props.arr.length);
  printArray(props.arr, props.arr.length)
  endTime = (new Date()).getTime()
  show.value = true
})

// This code is contributed by akshitsaxenaa09.
</script>

<template>
  <div class="text-left" v-if="show">
<!--    <button @click="run" class="inline-flex items-center rounded-3xl bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">-->
<!--      <Icon icon="fluent:play-20-regular" class="mr-1" />-->
<!--      Run-->
<!--    </button>-->

    <h3 class="ml-5 mb-2 text-gray-900 dark:text-white">Selection Sort:</h3>
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
