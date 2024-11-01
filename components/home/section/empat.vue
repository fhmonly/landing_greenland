<template>
  <section id="section5" class="md:py-16 py-12 bg-[#f5f4ed] w-full flex justify-center flex-col">
    <div class="py-2 mb-10 text-center md:py-16">
      <h2 class="text-base text-black font-nunito">{{ settings.data.home4_small_title }}</h2>
      <h1
        class="md:px-0 px-2 text-[50px] lg:text-[55px] xl:text-[60px] leading-[1.1] 2xl:text-[65px] mt-2 font-times text-[#38544c]">
        {{ settings.data.home4_title }}
      </h1>
    </div>
    <div class="flex flex-wrap items-stretch justify-center w-full gap-4 px-2 pb-4">
      <div
        class="bg-white text-[#38544c] w-full max-w-[350px] px-12 py-8 rounded-lg flex flex-col justify-between hover:bg-[#38544c] hover:text-white"
        data-aos="fade-up" data-aos-duration="300" v-for="item in news?.data?.data.slice(0, 3)" :key="item.blog_id">
        <div>
          <p class="text-[10px] font-semibold">NEWSi - {{ $dayjs(item.date_input).locale("id").fromNow() }}</p>
          <h3 class="text-xl font-base leading-[1.1] mt-2 line-clamp-3">
            {{ item.title }}
          </h3>
        </div>
        <div class="mt-auto">
          <hr class="my-3 border-[#BFCEC9FF]" />
          <NuxtLink :to="`/news/${item.blog_id}`" class="mb-4 text-[10px] font-bold">READ MORE</NuxtLink>
        </div>
      </div>
    </div>
    <div class="mt-8 mb-8 text-center">
      <button class="flex items-center pt-5 mx-auto btn-visit-black" data-aos="fade-up" data-aos-delay="300">
        <span class="text-xs tracking-wider text">VIEW ALL</span>
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

<script setup>
const settings = useDataSettings();
const config = useRuntimeConfig()
const { data: news, status, error, refresh } = await useFetch(`${config.public.apiUrl}/blogs`, {
  pick: ["data"],
  key: "api-news-blogs"
});
</script>