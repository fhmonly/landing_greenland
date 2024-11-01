<template>
  <section id="section1" class="relative py-8 overflow-visible overflow-x-clip bg-blend-main" data-aos="fade-in">
    <div class="lg:mx-9">
      <div class="relative flex flex-col items-start justify-between lg:flex-row mt-9">
        <div class="order-2 w-full text-left text-white lg:order-1 left-content lg:w-1/2" data-aos="fade-right">
          <h1
            class="text-[50px] lg:text-[55px] xl:text-[60px] 2xl:text-[65px]  text-[#3c4f4b] font-times leading-tight pt-16 pb-5" v-html="transformNewLineToBrTag(settings.data.home1_title)">
          </h1>
          <div class="text-black font-nunito text-[15px] md:text-start text-justify no-tailwind leading-normal"
            v-html="settings.data.home1_content"></div>
        </div>

        <div class="order-1 p-5 lg:order-2 max-w-[520px] lg:max-w-[55%] flex mb-10 lg:mb-0 lg:ps-10">
          <div class="relative w-full pl-20 m-auto flex items-center" data-aos="fade-left">
            <img :src="`${config.public.dirUrl}/images/static/${settings?.data?.home1_image}`" alt="Image description"
              class="object-cover w-full aspect-[1.5/1] lg:aspect-square lg:h-full" />
            <h3 class="absolute left-0 text-3xl font-bold text-white font-times max-w-[230px] text-right">
              {{ settings.data.home1_small_title }}
            </h3>
          </div>
        </div>
      </div>
      <button class="flex items-center pt-0 btn-visit-green md:pt-5" data-aos="fade-up" data-aos-delay="300">
        <span class="text-xs tracking-wider text">MORE ABOUT US</span>
        <span class="circle">
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-arrow-right"
              viewBox="0 0 24 16">
              <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h18.793l-3.146-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L20.293 8.5H1.5A.5.5 0 0 1 1 8z"
                stroke="currentColor" stroke-width="2" />
              <path d="M18 8l2-2v4l-2-2z" fill="currentColor" />
            </svg>
          </span>
        </span>
      </button>
    </div>
  </section>
</template>
<style scoped>
.bg-blend-main {
  background: linear-gradient(to top,
      rgb(180, 199, 216) 0.5%,
      rgba(154, 158, 160, 0.557));
  background-size: cover;
}
</style>
<script setup>
const settings = useDataSettings();
const config = useRuntimeConfig()
const { transformNewLineToBrTag} = useApiHelper()
</script>