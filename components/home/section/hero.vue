<template>
  <swiper-container id="section0" effect="fade" autoplay-delay="4000" v-if="status === 'success'">
    <swiper-slide class="flex flex-col justify-center text-start" v-for="slider in sliders.data" v-bind:key="slider.id">
      <div class="relative w-full h-full">
        <NuxtImg sizes="360px sm:576px md:768px lg:992px xl:1024px" class="object-cover object-center w-full h-full"
          :src="`/greenland/${slider.image}`" format="webp" />
        <div class="pt-[64px] md:pl-20 pl-6 absolute top-0 left-0 bottom-0 right-0 flex justify-center flex-col ">
          <h1
            class="text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[55px] font-medium leading-[1.1] text-white font-times mobile:max-w-[80%]"
            data-aos="fade-up"
            v-html="transformNewLineToBrTag({ text: slider.contents, className: 'hidden md:block' })">
          </h1>
          <div class="mt-8 text-base tracking-wide text-white no-tailwind" data-aos="fade-up" data-aos-delay="100"
            v-html="transformNewLineToBrTag({ text: slider.bottom_content, className: 'hidden md:block' })"></div>
          <button class="flex items-center pt-5 btn-visit" data-aos="fade-up" data-aos-delay="300">
            <span class="text-xs tracking-wider text">Schedule a Visit</span>
            <span class="circle">
              <span class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor"
                  class="bi bi-arrow-right" viewBox="0 0 24 16">
                  <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h18.793l-3.146-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L20.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    stroke="currentColor" stroke-width="2" />
                  <path d="M18 8l2-2v4l-2-2z" fill="currentColor" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>
<script setup>
const config = useRuntimeConfig();
const { data: sliders, status } = await useFetch(`${config.public.apiUrl}/slider`, {
  pick: ["data"],
  key: "api-slider"
});
const { transformNewLineToBrTag } = useApiHelper();
</script>