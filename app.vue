<template>
  <div class="flex flex-col justify-between w-full min-h-screen">
    <AppNav />
    <NuxtLoadingIndicator throttle="0" />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
<style>
html,
body {
  scroll-behavior: smooth;
}
.no-tailwind * {
  all: revert;
}

.font-nunito {
  font-family: "Nunito Sans", sans-serif;
}

.font-times {
  font-family: "Times New Roman", serif;
}

.text-size-main {
  font-size: 2.7rem;
  line-height: 1.2;
}
@media (max-width: 768px) {
  .text-size-main {
    font-size: 1.7rem;
    line-height: 1;
  }
}
</style>
<script setup>
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Greenland Elegant Homes and Investment`
      : "Greenland Elegant Homes and Investment";
  },
});
useHead({
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>