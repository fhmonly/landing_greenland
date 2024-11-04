<template>
  <main>
    <section id="section0"
      class="bg-cover bg-center w-full bg-blend md:h-[330px] h-[200px] flex justify-center items-end md:items-center">
      <div class="text-center">
        <h2 class="text-thin font-nunito text-[14px] text-black">
          {{ settings.data.hero_news_title_1 }}
        </h2>
        <h1 class="text-[1.7rem] sm:text-[50px] lg:text-[55px] font-times text-[#38544c]">
          {{ settings.data.hero_news_info_1 }}
        </h1>
      </div>
    </section>

    <section id="section1" class="bg-[#F8F4EC] w-full justify-center pt-12 md:pt-0 px-6 md:px-12">
      <div
        class="grid w-full grid-cols-1 gap-4 pb-4 mx-auto place-self-center tablet:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div
          class="bg-white text-[#38544c] w-full px-12 py-8 rounded-lg flex flex-col justify-between hover:bg-[#38544c] hover:text-white"
          data-aos="fade-up" data-aos-duration="300" v-for="item in news?.data?.data" :key="item.blog_id">
          <div>
            <p class="text-[10px] font-semibold">NEWS - {{ $dayjs(item.date_input).locale("id").fromNow() }}</p>
            <h3 class="text-xl font-base leading-[1.3] mt-2 line-clamp-3">
              {{ item.title }}
            </h3>
          </div>
          <div class="mt-auto">
            <hr class="my-3 border-[#BFCEC9FF]" />
            <NuxtLink :to="`/news/${item.blog_id}-${createSlug(item?.title)}`" class="mb-4 text-[10px] font-bold">READ
              MORE</NuxtLink>
          </div>
        </div>
      </div>
      <div class="py-4"></div>
    </section>
  </main>
</template>
<script setup>
const settings = useDataSettings()
const config = useRuntimeConfig()
const { data: news, status, error, refresh } = await useFetch(`${config.public.apiUrl}/blogs`, {
  pick: ["data"],
  key: "api-news-blogs"
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
              rgba(248, 244, 236, 0.715),
              rgba(248, 244, 236, 0.486),
              rgba(248, 244, 236, 0.486),
              rgba(248, 244, 236, 0.486),
              rgba(248, 244, 236, 0.486),
              rgba(245, 245, 233, 0),
              rgba(245, 245, 233, 0),
              rgba(245, 245, 233, 0)
            ),
            url("${config.public.dirUrl}/images/static/${settings.value.data.hero_news_image_1}");
          background-size: cover;
        }
      `
    }
  ],
});
useSeoMeta({
  title: "News",
});
const { createSlug } = useApiHelper();
</script>