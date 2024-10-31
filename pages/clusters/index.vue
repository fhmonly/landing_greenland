<script setup>
const settings = useDataSettings();
const config = useRuntimeConfig();
const {
  data: clusters,
  status,
  error,
  refresh,
} = await useFetch(`${config.public.apiUrl}/clusters`, {
  pick: ["data"],
  key: "api-clusters",
});
useHead({
  style: [
    {
      innerHTML: `
      .bg-blend {
        background: linear-gradient(to top,
        rgba(248, 244, 236, 0.9),
        rgba(248, 244, 236, 0.6),
        rgba(248, 244, 236, 0.4),
        rgba(248, 244, 236, 0.3),
        rgba(245, 245, 233, 0.2),
        rgba(245, 245, 233, 0.1),
        rgba(245, 245, 233, 0)),
        url("${config.public.dirUrl}/images/static/${settings.value.data.hero_cluster_image_1}");
        background-size: cover;
        }
      `,
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
</script>
<template>
  <div>
    <section id="section0"
      class="bg-cover bg-center w-full bg-blend md:h-[400px] h-[200px] flex justify-center items-end md:pb-[5rem] pb-6">
      <div class="text-center">
        <h2 class="text-thin font-nunito text-[14px] text-black">
          {{ settings.data.hero_cluster_title_1 }}
        </h2>
        <h1 class="text-size-main font-times text-[#38544c]">
          {{ settings.data.hero_cluster_info_1 }}
        </h1>
      </div>
    </section>

    <section id="section1" class="bg-[#F8F4EC] w-full justify-center pt-6 md:pt-0">
      <div class="flex flex-wrap items-center justify-center gap-4 mx-auto">
        <div class="relative group w-full sm:max-w-[48%] lg:max-w-[23%]" data-aos="zoom-in"
          v-for="cluster in clusters.data.data" :key="cluster.id">
          <img :src="`${config.public.dirUrl}/${cluster.image}`" alt="Photo 1" class="object-cover w-full h-auto" />
          <div
            class="absolute inset-0 flex flex-col justify-end p-5 text-white transition-all duration-300 bg-black bg-opacity-20 group-hover:bg-white group-hover:bg-opacity-50">
            <h3 class="text-4xl font-times capitalize group-hover:text-[#38544c] transition-all duration-300 mb-3">
              {{ cluster.name }}
            </h3>
            <div class="flex items-center justify-start">
              <NuxtLink :to="`/clusters/${cluster.id}`"
                class="text-white group-hover:text-[#38544c] transition-all duration-300 text-[10px] font-bold">VIEW
                GALLERY</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 pb-10 text-center">
        <button class="flex items-center pt-5 mx-auto btn-visit-black" data-aos="fade-up" data-aos-delay="300">
          <span class="text-xs tracking-wider text">SCHEDULE A VISIT</span>
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
    </section>
  </div>
</template>
<style scoped>
.btn-visit-black {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
}

.btn-visit-black .text {
  margin-right: 10px;
}

.btn-visit-black .circle {
  display: inline-block;
  border: 2px solid #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  transition: 0.4s ease-in-out;
}

.btn-visit-black .arrow {
  position: absolute;
  top: 50%;
  left: -8px;
  transform: translateY(-50%);
  transition: 0.4s ease-in-out;
}

.btn-visit-black:hover .arrow {
  left: 5px;
}

.btn-visit-black:hover .circle {
  background-color: #000;
}

.btn-visit-black:hover .arrow {
  color: white;
}

.btn-visit-black {
  transition: all 0.3s ease-in-out;
}

.btn-visit-black:hover {
  transform: scale(1.1);
  color: #000;
}
</style>
