<template>
  <section id="section3" class="bg-[#f5f4ed]">
    <h1
      class="md:text-6xl text-4xl text-[#3c4f4b] font-times relative text-center"
      data-aos="fade-up"
    >
      {{ settings.data.home2_title }}
    </h1>
    <p
      class="px-5 mt-5 text-center text-md md:mt-2 md:px-0"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {{ settings.data.home2_small_title }}
    </p>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10 md:w-[87%] w-full mx-auto md:px-0 px-5"
    >
      <div class="relative group" data-aos="zoom-in">
        <img
          src="/img/cluster-1.jpg"
          alt="Photo 1"
          class="object-cover w-full h-auto"
        />
        <div
          class="absolute inset-0 flex flex-col justify-end text-white transition-all duration-300 bg-black bg-opacity-20 group-hover:bg-white group-hover:bg-opacity-50"
        >
          <h3
            class="text-4xl font-times capitalize ml-5 group-hover:text-[#38544c] transition-all duration-300"
          >
            Garbera Cluster
          </h3>
          <a
            href="#"
            class="mt-1 text-white mb-5 ml-5 group-hover:text-[#38544c] transition-all duration-300 text-[10px] font-bold"
            >VIEW GALLERY</a
          >
        </div>
      </div>
      <div class="relative group" data-aos="zoom-in" data-aos-delay="100">
        <img
          src="/img/cluster-2.jpg"
          alt="Photo 2"
          class="object-cover w-full h-auto"
        />
        <div
          class="absolute inset-0 flex flex-col justify-end text-white transition-all duration-300 bg-black bg-opacity-20 group-hover:bg-white group-hover:bg-opacity-50"
        >
          <h3
            class="text-4xl font-times capitalize ml-5 group-hover:text-[#38544c] transition-all duration-300"
          >
            Wisteria Cluster
          </h3>
          <a
            href="#"
            class="mt-1 text-white mb-5 ml-5 group-hover:text-[#38544c] transition-all duration-300 text-[10px] font-bold"
            >VIEW GALLERY</a
          >
        </div>
      </div>
      <div class="relative group" data-aos="zoom-in" data-aos-delay="200">
        <img
          src="/img/cluster-3.jpg"
          alt="Photo 3"
          class="object-cover w-full h-auto"
        />
        <div
          class="absolute inset-0 flex flex-col justify-end text-white transition-all duration-300 bg-black bg-opacity-20 group-hover:bg-white group-hover:bg-opacity-50"
        >
          <h3
            class="text-4xl font-times capitalize ml-5 group-hover:text-[#38544c] transition-all duration-300"
          >
            Natura Cluster
          </h3>
          <a
            href="#"
            class="mt-1 text-white mb-5 ml-5 group-hover:text-[#38544c] transition-all duration-300 text-[10px] font-bold"
            >VIEW GALLERY</a
          >
        </div>
      </div>
      <div class="relative group" data-aos="zoom-in" data-aos-delay="300">
        <img
          src="/img/cluster-4.jpg"
          alt="Photo 4"
          class="object-cover w-full h-auto"
        />
        <div
          class="absolute inset-0 flex flex-col justify-end text-white transition-all duration-300 bg-black bg-opacity-20 group-hover:bg-white group-hover:bg-opacity-50"
        >
          <h3
            class="text-4xl font-times capitalize ml-5 group-hover:text-[#38544c] transition-all duration-300"
          >
            Armaya Cluster
          </h3>
          <a
            href="#"
            class="mt-1 text-white mb-5 ml-5 group-hover:text-[#38544c] transition-all duration-300 text-[10px] font-bold"
            >VIEW GALLERY</a
          >
        </div>
      </div>
    </div>

    <div class="pb-8 mt-6 text-center md:mt-16 md:pb-0">
      <button
        class="flex items-center pt-5 mx-auto btn-visit-black"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <span class="text-xs tracking-wider text">SCHEDULE A VISIT</span>
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
  </section>
</template>
<script setup>
const settings = useDataSettings();

const { showClusterGalery } = useClusterImageGalery()
const config = useRuntimeConfig()
const { data: clusters, status, error, refresh } = await useFetch(`${config.public.apiUrl}/clusters`, {
    pick: ["data"],
    key: "api-clusters"
});
</script>