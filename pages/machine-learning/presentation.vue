<script setup xmlns="http://www.w3.org/1999/html">
import {Icon} from '@iconify/vue';

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "present",
});

const loading = ref(false)

</script>

<template>
  <NuxtLayout >
    <button onclick="history.back();return false;" class="absolute top-0 z-50 mt-5 ml-5">
      <Icon icon="fluent:arrow-circle-left-20-regular" class="text-4xl text-white" />
    </button>

<!--    :autoplay="{-->
<!--    delay: 8000,-->
<!--    disableOnInteraction: true-->
<!--    }"-->

    <Swiper
        :modules="[
            SwiperAutoplay,
            SwiperEffectCreative,
            SwiperKeyboard,
            SwiperMousewheel,
            SwiperNavigation,
            SwiperParallax,
            SwiperScrollbar,
            SwiperThumbs
          ]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :keyboard="{
          enabled: true,
        }"
        :creative-effect="{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
      }"
    >
      <SwiperSlide class="min-h-screen">
        <div class="flex justify-center items-center min-h-screen bg-gradient-to-tr from-primary-600 to-primary-300">
          <div class="p-6">
            <div class="">
              <h5 class="text-3xl font-medium">Potential of</h5>
              <h3 class="text-6xl md:text-8xl font-bold">Machine Learning</h3>
              <p class="text-lg font-medium">Lorem ipsum dolor sit amet</p>
            </div>

<!--            <div class="mt-10 font-medium text-3xl">-->
<!--              <p class="">Aden Anteng</p>-->
<!--              <p class="">Zuliana Nurfadlillah</p>-->
<!--            </div>-->

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide class="min-h-screen">
        <PresentDefault
            class="bg-gradient-to-tr from-amber-600 to-amber-300"
        >
          <template v-slot:icon>
            <Icon
                icon="solar:washing-machine-bold-duotone"
                class="text-6xl md:text-9xl"
            />
          </template>

          <template v-slot:title>
            Apa itu Machine Learning?
          </template>

          <template v-slot:content>
            Machine Learning can be math-heavy. The nature of neural networks is highly technical, and the jargon
            that goes along with it tends to scare people away.
            Machine learning is a type of artificial intelligence that allows computers to learn and improve
            on their own without being explicitly programmed. It's like teaching a child to learn from experience
            and make better decisions in the future.
          </template>

        </PresentDefault>
      </SwiperSlide>

      <SwiperSlide class="min-h-screen">
        <PresentDefault
          class="bg-gradient-to-tr from-blue-600 to-blue-300"
        >
          <template v-slot:icon>
            <Icon
                icon="solar:question-square-bold-duotone"
                class="text-6xl md:text-9xl"
            />
          </template>

          <template v-slot:title>
            How Does Machine Learning Work?
          </template>

          <template v-slot:content>
            Machine learning works by analyzing large amounts of data and identifying patterns.
            With these patterns, the computer can make predictions and decisions based on new information.
            It's like having a crystal ball that can predict the future!
          </template>

        </PresentDefault>
      </SwiperSlide>

      <SwiperSlide class="min-h-screen">
        <PresentDefault
            class="bg-gradient-to-tr from-cyan-600 to-cyan-300"
        >
          <template v-slot:icon>
            <Icon
                icon="solar:health-bold-duotone"
                class="text-6xl md:text-9xl"
            />
          </template>

          <template v-slot:title>
            Machine Learning in Healthcare
          </template>

          <template v-slot:content>
            Machine learning is revolutionizing the healthcare industry! It can help doctors diagnose
            diseases more accurately, identify potential health risks, and even create personalized
            treatment plans for patients.
          </template>

        </PresentDefault>
      </SwiperSlide>

      <SwiperSlide class="min-h-screen">
        <PresentDefault
          class="bg-gradient-to-tr from-cyan-600 to-cyan-300"
        >
<!--          <template v-slot:icon>-->
<!--            <Icon-->
<!--                icon="solar:health-bold-duotone"-->
<!--                class="text-9xl"-->
<!--            />-->
<!--          </template>-->

          <template v-slot:title>
            Demo!
          </template>

          <template v-slot:content>
            <a
                href="https://holobooth.flutter.dev/"
                target="_blank"
                class="flex justify-center items-center rounded-3xl px-4 py-2.5 border border-white"
            >
              Play!
            </a>
          </template>

        </PresentDefault>
      </SwiperSlide>

      <SwiperSlide class="min-h-screen">
        <PresentDefault
          class="bg-gradient-to-tr from-gray-600 to-gray-300"
        >
          <template v-slot:icon>
            <Icon
                icon="solar:rocket-2-bold-duotone"
                class="text-6xl md:text-9xl"
            />
          </template>

          <template v-slot:title>
            The Future of Machine Learning
          </template>

          <template v-slot:content>
            The future of machine learning is incredibly exciting! We can expect to see even more advancements
            in the near future, such as self-driving cars, robots that can perform complex tasks,
            and even machines that can create art and music.
          </template>

        </PresentDefault>
      </SwiperSlide>

      <SwiperSlide class="min-h-screen">
        <div class="flex justify-center items-center min-h-screen bg-black">
          <div class="p-6">
            <div class="">
              <h5 class="text-3xl font-medium">Lorem ipsum</h5>
              <h3 class="text-6xl md:text-8xl font-bold">Terima Kasih</h3>
              <p class="text-lg font-medium">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  </NuxtLayout>
</template>

<!--<style>-->
<!--.swiper-slide {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  font-size: 18px;-->
<!--  height: 20vh;-->
<!--  font-size: 4rem;-->
<!--  font-weight: bold;-->
<!--  font-family: 'Roboto', sans-serif;-->
<!--}-->
<!--.swiper-wrapper {-->
<!--  min-width: 100vh;-->
<!--  width: 100vh;-->
<!--}-->
<!--.swiper-cards {-->
<!--  width: 240px;-->
<!--  height: 240px;-->
<!--}-->
<!--.swiper-cards .swiper-slide {-->
<!--  border-radius: 6px;-->
<!--  border: 1px solid black;-->
<!--}-->
<!--</style>-->