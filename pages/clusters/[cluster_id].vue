<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { showImageGalery } = useImageGalery()
const {
  data: cluster,
  status,
  error,
  refresh,
} = await useFetch(
  `${config.public.apiUrl}/cluster?id=${route.params.cluster_id}`,
  {
    pick: ["data"],
  }
);
useHead({
  style: [
    {
      innerHTML: `
        .bg-blend {
          background: linear-gradient(
              to top,
              rgba(248, 244, 236, 0.9),
              rgba(248, 244, 236, 0.9),
              rgba(248, 244, 236, 0.8),
              rgba(248, 244, 236, 0.7),
              rgba(248, 244, 236, 0.6),
              rgba(248, 244, 236, 0.6)
            ),
            url("${config.public.dirUrl}/${cluster.value.data.image2}");
          background-size: cover;
        }
      `,
    },
  ],
});
useSeoMeta({
  title: () => cluster.value?.data.name
});
</script>
<template>
  <div>
    <section id="section0" class="items-end justify-center block w-full bg-center bg-cover bg-blend h-fit">
      <div class="pt-48 text-center" data-aos="slide-up">
        <h2 class="text-thin font-nunito text-[14px] text-black">
          GREENLAND CLUSTERS
        </h2>
        <h1 class="text-size-main font-times text-[#38544c]">
          {{ cluster.data.name }}
        </h1>
      </div>

      <div class="flex flex-wrap gap-8 px-6 sm:px-16 pt-12">
        <div class="md:w-[48%] w-full bg-[#38544c] bg-center bg-no-repeat bg-fixed h-[400px] flex flex-col"
          data-aos="fade-down" v-for="(facade, index) in cluster.data.facade" :key="facade.id"
          :style="`background-image:url('${config.public.dirUrl}/${facade.image}')`">
          <div class="flex items-center justify-between px-4 mt-auto pb-3 text-white md:pt-64">
            <span class="text-lg font-times">{{ facade.name }}</span>
            <button type="button" class="text-[15px] lg:text-[16px] font-nunito" @click="showImageGalery({
              galeries: cluster?.data?.facade.map(f => {
                return {
                  image: `${config.public.dirUrl}/${f.image}`,
                  description: f.name
                }
              }),
              activeImageIndex: index
            })">VIEW GALLERY</button>
          </div>
        </div>
      </div>
    </section>
    <section id="section1" class="bg-[#F8F4EC]">
      <div class="flex-row justify-between block px-16 pt-10 md:flex text-[16px] lg:text-[17px]">
        <div class="w-full md:w-3/4">
          <p class="font-bold text-[#38544c] md:pb-6 pb-0 text-[17px] lg:text-[20px]" data-aos="fade-up">
            <span>{{ cluster.data.name }}</span><span class="font-thin"> CONCEPT</span>
          </p>
          <div class="md:w-[80%] w-full font-[490] no-tailwind" data-aos="fade-up" v-html="cluster.data.contents"></div>
        </div>
        <div class="w-full mt-8 md:w-1/4 md:mt-0">
          <p class="font-thin text-[#38544c] md:pb-6 pb-8 text-[17px] lg:text-[20px]" data-aos="fade-down">
            FLOOR PLAN & CLUSTER LAYOUT
          </p>
          <ul class="font-bold text-[#38544c]" data-aos="fade-down">
            <li class="flex mb-2">
              <a :href="`${config.public.dirUrl}/${cluster.data.plan_map}`" target="_blank"
                class="flex items-center justify-center gap-2">
                <IconBiFiletypePdf width="18" height="18" />
                {{cluster.data.name}} Plan Map
              </a>
            </li>
            <li class="flex">
              <a :href="`${config.public.dirUrl}/${cluster.data.floor_map}`" target="_blank"
                class="flex items-center justify-center gap-2">
                <IconBiFiletypePdf width="18" height="18" />
                {{cluster.data.name}} Floor Map
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-end px-16 py-28">
        <div class="text-center">
          <NuxtLink href="/clusters" class="flex items-center gap-2 pt-5 mx-auto btn-visit-black" data-aos="fade-up"
            data-aos-delay="300">
            <span class="text-xs tracking-wider text">BACK TO CLUSTERS</span>
            <span class="circle">
              <span class="arrow">
                <IconBiArrowRight width="20" height="20" />
              </span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>