<template>
    <div class="flex flex-col gap-6 px-4 pb-12 mt-6 md:flex-row md:px-16 md:mt-12 md:pb-24" data-aos="fade-up"
        data-aos-duration="1000">
        <div class="w-full text-white md:w-1/2" data-aos="zoom-in" data-aos-delay="300"
            v-for="(gallery, index) in dataGalleries?.data?.data.slice(0, 2)" :key="gallery.gallery_id">
            <LazyNuxtImg format="webp" :src="`/greenland/${gallery.image}`" :alt="`gambar ${gallery.title}`"
                class="w-full mx-auto md:w-auto" />
            <p class="mt-3 text-2xl text-left font-times">
                {{ gallery.title }}
            </p>
            <button class="font-nunito text-[10px] mt-1 text-left" @click="
                showImageGalery({
                    galeries: dataGalleries.data.data.map(g => {
                        return {
                            image: `${config.public.dirUrl}/${g.image}`,
                            description: g.title
                        }
                    }), activeImageIndex: index
                })
                ">VIEW GALLERY</button>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const { data: dataGalleries } = await useFetch(`${config.public.apiUrl}/gallerys`, {
    pick: ['data'],
    key: "api-gallerys"
});
const { showImageGalery } = useImageGalery();
</script>