<template>
  <div>
    <section id="section1" class="bg-center bg-cover"
      :style="`background-image: url('${config.public.dirUrl}/images/static/${settings.data.hero_about_image_1}')`">
      <div class="flex flex-row h-screen bg-black bg-opacity-20">
        <div class="flex items-center justify-start flex-grow">
          <div class="px-8 text-left text-white md:px-16">
            <h1
              class="font-normal leading-tight text-size-main font-times heroTitlePages text-[50px] lg:text-[55px] xl:text-[60px] 2xl:text-[65px]"
              data-aos="fade-up" v-html="settings.data.hero_about_content_1"></h1>
          </div>
        </div>
      </div>
    </section>
    <section id="section2" class="bg-[#3c4f4b] pt-10 sm:pt-0 min-h-screen flex flex-col">
      <div class="flex items-center justify-center h-full grow">
        <div class="block px-16 mx-auto mb-16 md:flex">
          <div class="w-2/4 text-white font-nunito text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]"
            data-aos="fade-down">
            <span class="font-thin">{{ settings.data.about1_small_title }}</span> <br>
            <span class="font-semibold">{{ settings.data.about1_title }}</span>
          </div>
          <div class="w-3/4 mt-5 md:mt-0" data-aos="fade-up">
            <div class="text-white text-size-main font-times opacity-60 no-tailwind textSection2Tops" id="textSection2"
              v-html="settings.data.about1_content"></div>
          </div>
        </div>
      </div>
      <h1 class="inset-x-0 pl-2 mt-auto gradient-text font-times" data-aos="slide-up">
        Greenland
      </h1>
    </section>

    <section id="section3" class="bg-center bg-cover" data-aos="fade-up"
      :style="`background-image: url('${config.public.dirUrl}/images/static/${settings.data.about1_image_banner}')`">
    </section>
    <section id="section4" class="bg-[#f5f4ed] h-fit">
      <div class="grid items-center justify-center h-full">
        <div class="order-2 block px-6 sm:px-12 mx-auto mt-6 mb-8 md:flex md:mt-16 md:order-1">
          <div class="w-2/4 font-nunito text-main text-md" data-aos="zoom-in">
            <span class="font-thin text-[14px]">{{ settings.data.about2_small_title }}</span>
          </div>
          <div class="mt-5 md:mt-0 md:w-3/4 lg:pr-[6rem]">
            <h1 class="text-size-main text-main font-times" id="textSection2" data-aos="zoom-in"
              v-html="settings.data.about2_title"></h1>
            <div
              class="text-black md:w-[90%] text-justify font-nunito mt-8 no-tailwind text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]"
              data-aos="fade-up" v-html="settings.data.about2_content">
            </div>
          </div>
        </div>
        <div class="flex order-1 w-full place-items-end md:order-2 justify-end">
          <img :src="`${config.public.dirUrl}/images/static/${settings.data.about2_image_banner}`" alt=""
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

      <div class="flex flex-col gap-6 px-4 pb-12 mt-6 md:flex-row md:px-16 md:mt-12 md:pb-24" data-aos="fade-up"
        data-aos-duration="1000">
        <div class="w-full text-white md:w-1/2" data-aos="zoom-in" data-aos-delay="300">
          <img src="/img/about2.png" alt="" class="w-full mx-auto md:w-auto" />
          <p class="mt-3 text-2xl text-left font-times">
            Healing <span class="italic">Paradise</span>
          </p>
          <p class="font-nunito text-[10px] mt-1 text-left">VIEW GALLERY</p>
        </div>
        <div class="w-full text-white md:w-1/2" data-aos="zoom-in" data-aos-delay="500">
          <img src="/img/about1.png" alt="" class="w-full mx-auto md:w-auto" />
          <p class="mt-3 text-2xl text-left font-times">
            Everyday <span class="italic">Activities</span>
          </p>
          <p class="font-nunito text-[10px] mt-1 text-left">VIEW GALLERY</p>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.gradient-text {
  font-size: 115px;
  background: linear-gradient(to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0),
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
  .gradient-text {
    font-size: 90px;
  }

  #textSection2 br {
    display: none;
  }
}
</style>
<script setup>
const settings = useDataSettings();
const config = useRuntimeConfig();
const { showImageGalery } = useImageGalery()
onMounted(() => {
  const heroTitlePages = document.querySelector('.heroTitlePages');
  heroTitlePages.innerHTML = heroTitlePages.innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br>');

  const topTitlePage2 = document.querySelector('.textSection2Tops');
  topTitlePage2.innerHTML = topTitlePage2.innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br>');
});
</script>