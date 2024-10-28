<template>
  <div>
    <HomeSectionHero class="w-full h-screen" />
    <HomeSectionSatu />
    <section id="section2" class="bg-blend-img"></section>
    <HomeSectionDua />
    <HomeSectionTiga />
    <HomeSectionEmpat />
    <HomeSectionLima />
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "/css/button-visit.css",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
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