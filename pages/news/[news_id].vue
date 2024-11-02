<script setup>
const route = useRoute();
const config = useRuntimeConfig()

const { data: article, status, error, refresh } =
  await useFetch(`${config.public.apiUrl}/blog?id=${route.params.news_id}`, {
    pick: ["data"],
  });

const results = article?.value?.data

useSeoMeta({
  titleTemplate: "",
  title: () => results.title,
});
</script>
<template>
  <div>
    <section id="section0"
      class="bg-cover bg-center w-full bg-blend md:h-[330px] h-[200px] flex justify-center items-end md:items-center">
      <div class="text-center">
        <h2 class="text-thin font-nunito text-[14px] text-black">Articles</h2>
        <h1 class="text-size-main font-times text-[#38544c] max-w-[75%] mx-auto">
          {{ results.title }}
        </h1>
      </div>
    </section>
    <section id="section1" class="bg-[#F8F4EC] w-full flex justify-center pt-12 md:pt-0">
      <div class="w-full max-w-5xl mx-auto">
        <div class="flex items-center justify-center w-full px-5 pb-4">
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

              <div class="pt-8 pb-10 text-center">
                <NuxtLink to="/news" class="flex-block items-center pt-5 mx-auto btn-visit-black" data-aos="fade-up"
                  data-aos-delay="300">
                  <span class="text-xs tracking-wider text">BACK TO NEWS</span>
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
                </NuxtLink>
              </div>
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