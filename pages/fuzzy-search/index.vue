<script setup xmlns="http://www.w3.org/1999/html">
import {Icon} from '@iconify/vue';
import {useVueFuse} from 'vue-fuse'
import Default from "../../layouts/default.vue";

const loading = ref(false)

const persons = [
  {
    name: 'Putra Pribowo',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Ega Budiman',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Mohamad Zainudin',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Yusikania Dwi Putri',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Rahmi Permata Hati',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Aprily Ayu Anbar',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Zuliana Nurfadlillah',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Rika Ningtias Azhari',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Muhammad Ramadhan',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Aden Anteng Anugrah',
    desc: 'Lorem ipsum'
  },
  {
    name: 'Ismara Adi Saputra',
    desc: 'Lorem ipsum'
  },
]

const {search, results, noResults} = useVueFuse(persons, {
  keys: [
    {name: 'name', weight: 2},
    {name: 'desc', weight: 1},
  ],
})

</script>

<template>

  <Default
      title="Fuzzy Search"
      subtitle="Lorem ipsum"
      desc="Typo Friendly"
  >
    <template v-slot:action>
      <button onclick="history.back();return false;">
        <Icon icon="fluent:arrow-circle-left-20-regular" class="text-gray-900 dark:text-white text-4xl" />
      </button>
    </template>

    <div class="grid md:grid-cols-5 mt-8">
      <div class="p-5 w-full md:col-span-2">
        <TextInput
            id="number"
            v-model="search"
            type="text"
            class="mt-1 block w-full"
            placeholder="masukkan nama mahasiswa S2 Ilmu Komputer"
            required
            autofocus

        />
      </div>

      <div class="p-5 w-full md:col-span-3">
        <div v-if="noResults" class="rounded-3xl backdrop-blur border border-gray-300 text-gray-900 dark:text-white shadow-lg py-2.5 px-4">
          Sorry, no results for {{ search }}
        </div>

        <div class="rounded-3xl backdrop-blur border border-gray-300 dark:border-gray-600 shadow-lg divide-y divide-gray-3000 dark:divide-gray-600">
          <div
              v-for="(person, i) in results"
              :key="i"
              class="py-2.5 px-4"
          >
            <div class="font-medium text-gray-900 dark:text-white">
              {{ person.name }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-300">
              {{ person.desc }}
            </div>
          </div>
        </div>

      </div>
    </div>

  </Default>

</template>
