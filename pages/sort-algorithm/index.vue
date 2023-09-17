<script setup>
    import { Icon } from '@iconify/vue';
    import Default from "../../layouts/default.vue";

    const input = ref("")
    const viewResult = ref(false)

    const selection = ref(false)
    const bubble = ref(false)
    const quick = ref(false)
    const insertion = ref(false)

    const loading = ref(false)

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    var arr = [];

    const runForrestRun = () => {
      viewResult.value=false
      loading.value=true

      arr = input.value.split(" ").map(Number);

      sleep(2000).then(() => {
        viewResult.value=true
        loading.value=false
      })

    };

    // function getRandomInt() {
    //   return Math.floor(Math.random() * 9999);
    // }

    const random = () => {
      var idx
      for (idx = 1; idx < 50; idx++) {
        input.value += Math.floor(Math.random() * 9999) + " "
      }
    }

    const reset = () => {
      input.value = ""
      viewResult.value = false
    }

    const sorts = [
      {
        name: 'Selection Sort:',
      },
      {
        name: 'Bubble Sort:',
      },
      // {
      //   name: 'Quick Sort:',
      // },
      {
        name: 'Insertion Sort:'
      }
    ]

</script>

<template>

  <Default
      title="Sort Algorithm"
      subtitle="Lorem ipsum"
      desc="Lorem ipsum"
  >
    <template v-slot:action>
      <button onclick="history.back();return false;">
        <Icon icon="fluent:arrow-circle-left-20-regular" class="text-gray-900 dark:text-white text-4xl" />
      </button>
    </template>

    <div class="grid md:grid-cols-5 mt-8">
      <div class="p-5 w-full md:col-span-2">
        <h3 class="ml-5 mb-2 text-gray-900 dark:text-white">Input:</h3>
        <TextAreaInput
            id="number"
            v-model="input"
            type="text"
            class="mt-1 block resize-y w-full"
            rows="8"
            placeholder="masukkan number semaumu, dipisah dengan spasi ya kk"
            required
            autofocus

        />
        <p class="ml-5 mt-1 text-base leading-7 text-gray-600 dark:text-gray-400">Item count {{ input ? input.toString().split(" ").length : "0" }}</p>
        <div class="mt-2 flex items-center gap-x-6">
          <button :disabled="input === '' " @click="runForrestRun" class="inline-flex items-center rounded-3xl bg-primary-600 hover:bg-primary-500 disabled:bg-primary-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
            <Icon icon="fluent:play-20-regular" class="mr-1" />
            Run
          </button>
          <button @click="random" class="text-sm font-semibold text-gray-900 dark:text-white disabled:text-gray-300">Random Number</button>
          <button v-if="input !== '' " @click="reset" class="text-sm font-semibold text-gray-900 dark:text-white disabled:text-gray-300">Reset</button>
        </div>
      </div>

      <div class="p-5 w-full md:col-span-3 ">
        <div class="grid sm:grid-cols-2 gap-5">
          <template v-if="viewResult">
            <SortSelection :arr="arr" />
            <SortBubble :arr="arr" />
            <!--            <SortQuick :arr="arr" />-->
            <SortInsertion :arr="arr" />
          </template>

          <template v-for="sort in sorts" v-else>
            <SortSkeleton :sort="sort" :loading="loading" />
          </template>
        </div>
      </div>
    </div>

  </Default>

</template>
