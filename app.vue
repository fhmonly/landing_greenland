<template>
  <Body>
    <NuxtLoadingIndicator color="red" :throttle="100" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
<style>
.no-tailwind * {
  all: revert;
}

.font-nunito {
  font-family: "Nunito Sans", sans-serif;
}

.font-times {
  font-family: "Times New Roman", serif;
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