<script setup>
    import { Icon } from '@iconify/vue';

    const input = ref("")
    const viewResult = ref(false)

    const selection = ref(false)
    const bubble = ref(false)
    const insertion = ref(false)
    const quick = ref(false)

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    var arr = [];

    const runForrestRun = () => {
      arr = input.value.split(" ").map(Number);

      viewResult.value=true
    };

    function getRandomInt() {
      return Math.floor(Math.random() * 9999);
    }

    const random = () => {
      var idx
      for (idx = 1; idx < 50; idx++) {
        input.value += getRandomInt() + " "
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
      {
        name: 'Quick Sort:',
      },
      {
        name: 'Insertion Sort:'
      }
    ]

</script>

<template>
<!--  <div>-->
<!--    <h1>Welcome to the homepage</h1>-->
<!--    <AppAlert>-->
<!--      This is an auto-imported component-->
<!--    </AppAlert>-->
<!--  </div>-->

  <main class="min-h-screen max-w-3xl mx-auto bg-white py-32">
    <div class="w-full grid justify-center text-center">

      <p class="text-base font-semibold text-primary-600">Lorem ipsum</p>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Sort Algorithm</h1>
      <p class="text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet.</p>

      <TextAreaInput
          id="number"
          v-model="input"
          type="text"
          class="mt-5 block resize w-full"
          rows="8"
          placeholder="masukkan number semaumu, dipisah dengan spasi ya kk"
          required
          autofocus
          @focusin="viewResult = false"
      />
      <p class="text-base leading-7 text-gray-600">Item count {{ input ? input.toString().split(" ").length : "0" }}</p>

      <div class="mt-5 flex items-center justify-center gap-x-6">
        <button :disabled="viewResult || input === '' " @click="runForrestRun" class="inline-flex items-center rounded-3xl bg-primary-600 hover:bg-primary-500 disabled:bg-primary-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
          <Icon icon="fluent:play-20-regular" class="mr-1" />
          Run
        </button>
        <button v-if="!viewResult" @click="random" class="text-sm font-semibold text-gray-900 disabled:text-gray-300">Random Number <span aria-hidden="true">&rarr;</span></button>
        <button v-else @click="reset" class="text-sm font-semibold text-gray-900 disabled:text-gray-300">Reset <span aria-hidden="true">&rarr;</span></button>
      </div>
    </div>

    <div class="mt-10 w-full grid lg:grid-cols-2 justify-center text-center gap-x-5 gap-y-10">
      <template v-if="viewResult">
        <SortSelection :arr="arr" />
        <SortBubble :arr="arr" />
        <SortQuick :arr="arr" />
        <SortInsertion :arr="arr" />
      </template>

      <template v-for="sort in sorts" v-else>
        <SortSkeleton :sort="sort" />
      </template>
    </div>
  </main>

</template>
