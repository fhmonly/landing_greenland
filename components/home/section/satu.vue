<template>
  <section id="section1" class="relative overflow-visible overflow-x-clip wrapper bg-blend-main" data-aos="fade-in">
    <div class="mx-auto md:w-[87%] w-[100%] md:pt-24 pt-5">
      <div class="relative grid justify-between md:flex">
        <div class="order-2 w-full p-5 pb-0 mb-5 text-left text-white md:order-1 left-content md:w-1/2 md:mb-12 md:p-0"
          data-aos="fade-right">
          <h1 class="md:text-6xl text-2xl mb-5 text-[#3c4f4b] font-times md:leading-[75px] leading-[30px]">
            {{ settings.data.home1_title }}
          </h1>
          <div class="text-black font-nunito text-[15px] md:text-start text-justify no-tailwind"
            v-html="settings.data.home1_content"></div>
        </div>

        <div class="md:order-2 order-1 right-image md:w-[45%] w-[70%] md:pt-0 pt-5 pl-20 relative" data-aos="fade-left">
          <img :src="`${settings?.data?.home1_image || '/img/content-1.jpg'}`" alt="Image description"
            class="object-cover w-[260px] md:w-auto" />
          <h3 class="absolute left-0 text-3xl font-bold text-right text-white font-times bottom-[20%]">
            {{ settings.data.home1_small_title }}
          </h3>
        </div>
      </div>
      <button class="flex items-center pt-0 pl-5 btn-visit-green md:pt-5 md:pl-0" data-aos="fade-up"
        data-aos-delay="300">
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
  height: 100vh;
}
</style>
<script setup>
const settings = useDataSettings();
const { showClusterGalery } = useClusterImageGalery()
onMounted(() => {
  window.swal = () => showClusterGalery({
    images: [
      "https://wallpapercave.com/wp/wp11312064.jpg",
      "https://picfiles.alphacoders.com/586/586929.jpg",
      "https://wallpapercave.com/wp/wp11312295.jpg",
      "https://wallpapercave.com/wp/wp11312192.jpg"
    ]
  })
});
</script>