<script setup xmlns="http://www.w3.org/1999/html">
import "vuepython/style.css";
import "highlight.js/styles/stackoverflow-light.css" // or any highlightjs theme
import {Icon} from '@iconify/vue';
import Default from "../../layouts/default.vue";
import { onBeforeMount } from 'vue';
import { usePython } from "usepython";
import { PyStatus, PyCodeBlock } from "vuepython";
import pyodide from "pyodide";


const py = usePython()

const pyodideLibs = [
    'pandas',
    'numpy',
    'matplotlib'
];

const wheel = '/acustomwheel-0.0.1-py3-none-any.whl';


const code = `
import pyodide_js
await pyodide_js.loadPackage('pandas')
# import numpy as np
# import pandas as pd

# Load the dataset
# dataset = pd.read_csv('http://localhost:3000/diabetes.csv')

print('running a python script')
`;

async function init() {
  await py.load()
}

onBeforeMount(() => init())

const loading = ref(false)

onMounted(() => {

})

onUnmounted(() => {

})
</script>

<template>

  <Default
      title="Deteksi Diabetes dengan Logistic Regression"
      subtitle="Lorem ipsum"
      desc="Typo Friendly"
  >
    <template v-slot:action>
      <button onclick="history.back();return false;">
        <Icon icon="fluent:arrow-circle-left-20-regular" class="text-gray-900 dark:text-white text-4xl" />
      </button>
    </template>

    <div class=" mt-8">
      <py-status :py="py"></py-status>

      <py-code-block id="1" :code="code" :py="py"></py-code-block>
    </div>

  </Default>

</template>
