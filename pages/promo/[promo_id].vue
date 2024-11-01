<script setup>
const config = useRuntimeConfig()
const route = useRoute();
console.log(route.params, "route.params");

const { data: article, status, error, refresh } =
  await useFetch(`${config.public.apiUrl}/promo?id=${route.params.promo_id}`, {
    pick: ["data"],
  });

const results = article?.value?.data

useSeoMeta({
  title: () => results.title,
});
</script>
<template>
  <div>
    <section id="section0"
      class="bg-cover bg-center w-full bg-blend md:h-[330px] h-[200px] flex justify-center items-end md:items-center">
      <div class="text-center">
        <h2 class="text-thin font-nunito text-[14px] text-black">Promo</h2>
        <h1 class="text-size-main font-times text-[#38544c] max-w-[75%] mx-auto">
          {{ results.title }}
        </h1>
      </div>
    </section>
    <section id="section1" class="bg-[#F8F4EC] w-full flex justify-center pt-12 md:pt-0">
      <div class="w-full max-w-5xl mx-auto">
        <div class="flex items-center justify-center w-full px-2 pb-4">
          <div class="flex flex-col md:flex-row">
            <div class="mx-auto">
              <div class="flex items-center justify-between mb-6 text-sm text-gray-500 font-nunito">
                <span class="italic">
                  Published on: <strong>{{
                    $dayjs(results.date_input).locale("id").format("DD MMM YYYY")
                  }}</strong>
                </span>
              </div>
              <div class="mx-auto mb-8 md:mb-0">
                <NuxtImg format="webp" :src="`/greenland/${results.image}`" alt="Gambar Utama Artikel"
                  class="object-cover w-full h-auto" />
              </div>

              <div class="py-8 mx-auto text-sm leading-relaxed text-justify text-gray-700 font-nunito"
                v-html="results.content">
              </div>
              <div class="py-3"></div>
              <div class="flex justify-center">
                <NuxtLink to="/promo" class="text-[15px] font-bold">
                  <Icon name="material-symbols:arrow-back-ios-new"
                    style="color: black; position: relative; top: 2px;" />
                  Back Promo
                </NuxtLink>
              </div>
              <div class="py-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.bg-blend {
  background: linear-gradient(to top,
      rgb(248, 244, 236),
      rgba(248, 244, 236, 0.9),
      rgba(248, 244, 236, 0.715),
      rgba(248, 244, 236, 0.486),
      rgba(248, 244, 236, 0.486),
      rgba(248, 244, 236, 0.486),
      rgba(248, 244, 236, 0.486),
      rgba(245, 245, 233, 0),
      rgba(245, 245, 233, 0),
      rgba(245, 245, 233, 0)),
    url("/img/bGNews.png");
  background-size: cover;
}
</style>