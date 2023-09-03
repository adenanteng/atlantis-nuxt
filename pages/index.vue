<script setup>
    import { Icon } from '@iconify/vue';

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

  <main class="min-h-screen max-w-7xl mx-auto grid md:grid-cols-5 bg-white py-10 gap-10">
    <div class="px-5 w-full flex flex-col md:col-span-2">
      <p class="text-base font-semibold text-primary-600">Lorem ipsum</p>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Sort Algorithm</h1>
      <p class="text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet.</p>

      <TextAreaInput
          id="number"
          v-model="input"
          type="text"
          class="mt-5 block resize-y w-full"
          rows="8"
          placeholder="masukkan number semaumu, dipisah dengan spasi ya kk"
          required
          autofocus

      />
      <p class="text-base leading-7 text-gray-600">Item count {{ input ? input.toString().split(" ").length : "0" }}</p>

      <div class="mt-2 flex items-center gap-x-6">
        <button :disabled="input === '' " @click="runForrestRun" class="inline-flex items-center rounded-3xl bg-primary-600 hover:bg-primary-500 disabled:bg-primary-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
          <Icon icon="fluent:play-20-regular" class="mr-1" />
          Run
        </button>
        <button @click="random" class="text-sm font-semibold text-gray-900 disabled:text-gray-300">Random Number</button>
        <button v-if="input !== '' " @click="reset" class="text-sm font-semibold text-gray-900 disabled:text-gray-300">Reset</button>
      </div>

<!--      <iframe class="rounded-3xl mt-10"-->
<!--              src="https://open.spotify.com/embed/track/3u6PxWema1snbjLbFEyjkJ?utm_source=generator"-->
<!--              width="100%"-->
<!--              height="152"-->
<!--              frameBorder="0"-->
<!--              allowfullscreen=""-->
<!--              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"-->
<!--              loading="lazy">-->
<!--      </iframe>-->
    </div>

    <div class="px-5 w-full gap-5 md:col-span-3 grid sm:grid-cols-2">
      <template v-if="viewResult">
        <SortSelection :arr="arr" />
        <SortBubble :arr="arr" />
        <SortQuick :arr="arr" />
        <SortInsertion :arr="arr" />
      </template>

      <template v-for="sort in sorts" v-else>
        <SortSkeleton :sort="sort" :loading="loading" />
      </template>
    </div>
  </main>

</template>
