<script setup xmlns="http://www.w3.org/1999/html">
    import { Icon } from '@iconify/vue';
    import { useVueFuse } from 'vue-fuse'
    import Default from "../../layouts/default.vue";

    const input = ref("")
    const viewResult = ref(false)

    const loading = ref(false)

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

    const myList = [
      'Aden Anteng Anugrah',
      'Putra Pribowo',
      'Ega Budiman',
      'Mohamad Zainudin',
      'Yusikania Dwi Putri',
      'Rahmi Permata Hati',
      'Aprily Ayu Anbar',
      'Zuliana Nurfadlillah',
      'Rika Ningtias Azhari',
      'Muhammad Ramadhan',
      'Mara Metro'
    ]

    const { search, results, noResults } = useVueFuse(myList)

</script>

<template>

  <Default
      title="Fuzzy Search"
      subtitle="Lorem ipsum"
      desc="Lorem ipsum"
  >
    <template v-slot:action>
      <button onclick="history.back();return false;">
        <Icon icon="fluent:arrow-circle-left-20-regular" class="text-4xl" />
      </button>
    </template>

    <div class="grid md:grid-cols-5 ">
      <div class="p-5 w-full md:col-span-2">

<!--        <input type="text" v-model="search">-->

        <TextInput
            id="number"
            v-model="search"
            type="text"
            class="mt-1 block resize-y w-full"
            rows="8"
            placeholder="masukkan nama mahasiswa S2 Ilmu Komputer"
            required
            autofocus

        />

        <p v-if="noResults">Sorry, no results for {{search}}</p>
        <div v-for="(r, i) in results" :key="i">
          {{ r }}
        </div>

      </div>
    </div>

  </Default>

</template>
