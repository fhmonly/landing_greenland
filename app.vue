<template>
  <div class="flex flex-col justify-between w-full min-h-screen">
    <AppNav />
    <NuxtLoadingIndicator :throttle="0" />
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
const settings = useDataSettings();
const config = useRuntimeConfig();
onServerPrefetch(async () => {
  const serverSettings = useDataSettings();
  const { data } = await useFetch(`${config.public.apiUrl}/settings`, {
    key: "api-settings",
    pick: ["data"],
  });
  serverSettings.value = data.value;
});
useServerSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Greenland Elegant Homes and Investment`
      : "Greenland Elegant Homes and Investment";
  },
  description: () => settings.value?.data.default_meta_description,
  keywords: () => settings.value?.data.default_meta_keywords,
  title: () => settings.value?.data.default_meta_title,
});
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "/css/button-visit.css",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap",
      rel: "stylesheet",
    },
    {
      href: "/img/logo.png",
      rel: "icon",
      type: "image/png",
    },
    {
      href: "/img/logo.png",
      rel: "shortcut icon",
      type: "image/png",
    },
    {
      href: "/img/logo.png",
      rel: "apple-touch-icon",
      type: "image/png",
    },
  ],
});

const { showImageGalery } = useImageGalery()
const router = useRouter();
onMounted(() => {
  window.swal = () => showImageGalery({
    galeries: [
      "https://wallpapercave.com/wp/wp11312064.jpg",
      "https://picfiles.alphacoders.com/586/586929.jpg",
      "https://wallpapercave.com/wp/wp11312295.jpg",
      "https://wallpapercave.com/wp/wp11312192.jpg"
    ].map(image => {
      return {
        image,
        description: "rynare"
      }
    })
  })
  router.beforeEach(async (to, from, next) => {
    if (!settings.value?.data) {
      try {
        const { data } = await useFetch(`${config.public.apiUrl}/settings`, {
          key: "api-settings",
          pick: ["data"],
        });

        settings.value = data.value;
      } catch (error) {
        console.error("Gagal mengambil data settings:", error);
        return next(false);
      }
    }
    next();
  });

});
</script>