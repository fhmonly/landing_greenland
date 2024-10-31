<template>
  <div>
    <section id="section0"
      class="bg-cover bg-center w-full bg-blend md:h-[300px] h-[200px] md:pt-40 pt-0 flex justify-center items-end md:items-center">
      <div class="text-center">
        <h2 class="text-thin font-nunito text-[14px] text-black">
          {{ settings.data.hero_promo_title_1 }}
        </h2>
        <h1 class="text-size-main font-times text-[#38544c]">
          {{ settings.data.hero_promo_info_1 }}
        </h1>
      </div>
    </section>

    <section id="section1" class="bg-[#F8F4EC] w-full justify-center md:pt-12 pt-8 pb-24">
      <div class="w-full">
        <div class="flex flex-wrap items-center justify-center w-full gap-4 px-2 pb-4">
          <div
            class="bg-white text-[#38544c] w-[350px] px-12 py-8 rounded-lg flex flex-col justify-between hover:bg-[#38544c] hover:text-white"
            data-aos="fade-up" data-aos-duration="300" v-for="promo in promos.data.data" :key="promo">
            <div>
              <p class="text-[10px] font-semibold">PROMO - {{ $dayjs(promo.date_input).locale("id").fromNow() }}</p>
              <h3 class="text-xl font-base leading-[30px] mt-2">
                {{ promo.title }}
              </h3>
            </div>
            <div class="mt-auto">
              <hr class="my-3 border-[#BFCEC9FF]" />
              <NuxtLink :to="`/promo/${promo.id}`" class="mb-4 text-[10px] font-bold">READ MORE</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const settings = useDataSettings()
const config = useRuntimeConfig()
const { data: promos, status, error, refresh } = await useFetch(`${config.public.apiUrl}/promos`, {
  pick: ["data"],
  key: "api-promos"
});
useHead({
  style: [
    {
      innerHTML: `
        .bg-blend {
          background: linear-gradient(
              to top,
              rgb(248, 244, 236),
              rgba(248, 244, 236, 0.9),
              rgba(248, 244, 236, 0.8),
              rgba(248, 244, 236, 0.7),
              rgba(248, 244, 236, 0.6),
              rgba(248, 244, 236, 0.6)
            ),
            url("${config.public.dirUrl}/images/static/${settings.value.data.hero_promo_image_1}");
          background-size: cover;
        }
      `
    }
  ]
});
</script>