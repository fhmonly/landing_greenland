<template>
  <div>
    <section id="section1" class="relative h-screen">
      <NuxtImg sizes="360px sm:576px md:768px lg:992px xl:1024px" class="object-cover object-center w-full h-full"
        :src="`/greenland/images/static/${settings.data.hero_about_image_1}`" format="webp" />
      <div class="flex flex-row bg-black bg-opacity-20 absolute top-0 left-0 right-0 bottom-0">
        <div class="flex items-center justify-start flex-grow">
          <div class="px-8 text-left text-white md:px-16">
            <h1
              class="font-normal leading-tight text-size-main font-times heroTitlePages text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[55px]"
              data-aos="fade-up"
              v-html="transformNewLineToBrTag({ text: settings.data.hero_about_content_1, className: 'hidden mobile:block' })">
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section id="section2" class="bg-[#3c4f4b] pt-10 sm:pt-0 min-h-screen flex flex-col relative">
      <div class="flex items-center justify-center h-full grow mb-[80px] md:mb-0">
        <div class="block px-6 mx-auto mb-16 md:px-16 md:flex">
          <div class="w-2/4 text-white font-nunito text-[14px]" data-aos="fade-down">
            <span class="font-thin">{{ settings.data.about1_small_title }}</span> <br>
            <span class="font-semibold">{{ settings.data.about1_title }}</span>
          </div>
          <div class="w-3/4 mt-5 md:mt-0" data-aos="fade-up">
            <div class="text-white text-size-main font-times opacity-60 no-tailwind textSection2Tops" id="textSection2"
              v-html="transformNewLineToBrTag({ text: settings.data.about1_content, className: 'hidden md:block' })">
            </div>
          </div>
        </div>
      </div>
      <h1
        class="inset-x-0 gradient-text lg:text-[115px] text-[70px] font-times mt-auto absolute bottom-0 leading-[.9] hidden mobile:block"
        data-aos="slide-up">
        Greenland
      </h1>
    </section>

    <section id="section3" class="bg-center bg-cover" data-aos="fade-up"
      :style="`background-image: url('${config.public.dirUrl}/images/static/${settings.data.about1_image_banner}')`">
    </section>
    <section id="section4" class="bg-[#f5f4ed] h-fit">
      <div class="grid items-center justify-center h-full">
        <div class="order-2 block px-6 mx-auto mt-6 mb-8 sm:px-12 md:flex md:mt-16 md:order-1">
          <div class="w-2/4 font-nunito text-main text-md" data-aos="zoom-in">
            <span class="font-thin text-[14px]">{{ settings.data.about2_small_title }}</span>
          </div>
          <div class="mt-5 md:mt-0 md:w-3/4 lg:pr-[6rem]">
            <h1 class="text-size-main text-main font-times" id="textSection2" data-aos="zoom-in"
              v-html="settings.data.about2_title"></h1>
            <div class="text-black md:w-[90%] text-justify font-nunito mt-8 no-tailwind text-[16px] lg:text-[17px]"
              data-aos="fade-up" v-html="settings.data.about2_content">
            </div>
          </div>
        </div>
        <div class="flex justify-end order-1 w-full place-items-end md:order-2">
          <NuxtImg format="webp" :src="`/greenland/images/static/${settings.data.about2_image_banner}`" alt=""
            class="w-full md:pl-[14.9vw] p-5 md:w-3/4 md:p-0" data-aos="fade-down" />
        </div>
      </div>
    </section>
    <section id="section5" class="bg-[#2c3c34] h-fit">
      <div class="flex flex-col px-4 pt-12 mx-auto mb-8 md:flex-row md:px-16 md:pt-24 md:mb-16" data-aos="fade-up"
        data-aos-duration="1000">
        <div class="md:w-2/4 w-full font-nunito text-[#f5f4ed] text-md text-center md:text-left">
          <span class="font-thin text-[14px]">{{
            settings.data.about3_small_title
          }}</span>
          <br />
        </div>
        <div class="w-full mt-3 md:w-3/4 md:mt-0">
          <p class="text-size-main text-center md:text-left text-[#f5f4ed] font-times" id="textSection2"
            data-aos="fade-up" data-aos-delay="200">
            {{ settings.data.about3_title }}
          </p>
        </div>
      </div>
      <AboutGalery />
    </section>
  </div>
</template>
<style scoped>
.gradient-text {
  background: linear-gradient(to top,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

#section3 {
  height: 1000px;
  width: 100%;
}

.text-desc {
  font-size: 12px;
  font-weight: 500;
}

@media (max-width: 768px) {
  #textSection2 br {
    display: none;
  }
}
</style>
<script setup>
const settings = useDataSettings();
const config = useRuntimeConfig();
const { transformNewLineToBrTag } = useApiHelper();

useSeoMeta({
  title: "About",
});
</script>