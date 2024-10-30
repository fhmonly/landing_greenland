<template>
  <section
    id="section5"
    class="md:py-16 py-4 bg-[#f5f4ed] w-full flex justify-center"
  >
    <div class="container max-w-6xl">
      <div class="py-2 text-center md:py-16">
        <h2 class="text-base text-black font-nunito">{{settings.data.home4_small_title}}</h2>
        <h1
          class="md:px-0 px-2 md:text-6xl text-4xl font-base mt-2 font-times text-[#38544c]"
        >
          {{settings.data.home4_title}}
        </h1>
      </div>
      <div class="flex items-center justify-center w-full px-2 pt-12">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div
            class="bg-white text-[#38544c] w-[350px] px-12 py-8 rounded-lg flex flex-col justify-between hover:bg-[#38544c] hover:text-white"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <div>
              <p class="text-[10px] font-semibold">NEWS - 3 SEPTEMBER 2024</p>
              <h3 class="text-xl font-base leading-[30px] mt-2">
                GreenLand antisipasi MPOX dengan POS Kesehatan
              </h3>
            </div>
            <div class="mt-auto">
              <hr class="my-3 border-[#BFCEC9FF]" />
              <a href="#" class="mb-4 text-[10px] font-bold">READ MORE</a>
            </div>
          </div>
          <div
            class="bg-white text-[#38544c] w-[350px] px-12 py-8 rounded-lg flex flex-col justify-between hover:bg-[#38544c] hover:text-white"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
          >
            <div>
              <p class="text-[10px] font-semibold">NEWS - 5 SEPTEMBER 2024</p>
              <h3 class="text-xl font-base leading-[30px] mt-2">
                Pembaharuan aplikasi P3RS penghuni GreenLand sudah bisa di
                download
              </h3>
            </div>
            <div class="mt-auto">
              <hr class="my-3 border-[#BFCEC9FF]" />
              <a href="#" class="mb-4 text-[10px] font-bold">READ MORE</a>
            </div>
          </div>
          <div
            class="bg-white text-[#38544c] w-[350px] px-12 py-8 rounded-lg flex flex-col justify-between hover:text-white hover:bg-[#38544c]"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="200"
          >
            <div>
              <p class="text-[10px] font-semibold">NEWS - 5 SEPTEMBER 2024</p>
              <h3 class="text-xl font-base leading-[30px] mt-2">
                Pembaharuan aplikasi P3RS penghuni GreenLand sudah bisa di
                download
              </h3>
            </div>
            <div class="mt-auto">
              <hr class="my-3 border-[#BFCEC9FF]" />
              <a href="#" class="mb-4 text-[10px] font-bold">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 mb-8 text-center">
        <button
          class="flex items-center pt-5 mx-auto btn-visit-black"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span class="text-xs tracking-wider text">VIEW ALL</span>
          <span class="circle">
            <span class="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 24 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h18.793l-3.146-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L20.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M18 8l2-2v4l-2-2z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const settings = useDataSettings();
</script>