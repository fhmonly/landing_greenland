<template>
  <main>
    <HomeSectionHero class="w-full h-screen" />
    <HomeSectionSatu class="px-6 sm:px-12" />
    <section id="section2" class="px-6 bg-blend-img sm:px-12"></section>
    <HomeSectionDua class="px-6 sm:px-12" />
    <HomeSectionTiga class="px-6 sm:px-12" />
    <HomeSectionEmpat class="px-6 sm:px-12" />
    <HomeSectionLima />
  </main>
</template>
<script setup>
const settings = useDataSettings()
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
useSeoMeta({
  title: () => settings.value?.data.default_meta_title,
});
</script>
<style scoped>
.bg-blend-img {
  background: url("/img/bGBlend.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 120vh;
}
</style>