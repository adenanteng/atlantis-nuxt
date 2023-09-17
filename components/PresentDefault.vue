<script setup>

const props = defineProps({
  class: {
    type: String,
    default: 'bg-gradient-to-tr from-primary-600 to-primary-300'
  }
})

</script>

<template>

    <div class="flex justify-center items-center min-h-screen " :class="props.class">
      <div class="p-6 max-w-7xl mx-auto flex-col gap-10">
        <div class="flex-shrink flex justify-start items-start">
          <slot name="icon" />
        </div>

        <div class="grow">
          <h3 class="text-2xl md:text-6xl font-bold "><slot name="title" /></h3>
          <div class="text-base md:text-2xl font-medium mt-10 max-w-3xl">
            <slot name="content" />
          </div>
        </div>
      </div>
    </div>

</template>