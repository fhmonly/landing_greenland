<template>
  <footer id="footer" class="flex flex-col items-center justify-center pt-10 pb-12 bg-[#3c4f4b] text-white">
    <div class="text-center w-[90%]">
      <NuxtImg alt="Greenland logo" class="mx-auto mb-10" src="/img/footer-logo.png" data-aos="zoom-in"
        data-aos-delay="200" width="145" format="webp" />
      <p class="text-[10px] font-bold" data-aos="fade-up" data-aos-delay="300">
        CONTACT YOUR PERSONAL AGENT:
      </p>
      <p class="text-[15px] font-bold mb-8" data-aos="fade-up" data-aos-delay="400">
        <a target="_blank" :href="`https://wa.me/${staticData?.data?.contact_wa}`" style="text-decoration: none">
          {{ settings.data.contact_wa_label }}: {{ settings.data.contact_wa }}
        </a>
      </p>
      <p class="max-w-lg text-[10px] mx-auto mb-8 tracking-wider font-light" data-aos="fade-up" data-aos-delay="500">
        GreenLand di Surabaya Barat menghadirkan atmosfer hunian yang natural
        dan
        <br />
        bersinergi dengan desain arsitektur kontemporer ramah lingkungan untuk
        <br />
        menciptakan lifestyle yang harmonis dengan alam.
      </p>
      <hr class="border-gray-400 mb-6 border-t-[1px]" />
      <div class="md:flex block justify-between">
        <p class="text-[10px]">
          &copy; GREENLAND RESIDENCE 2024 - A PROJECT BY PT BANGUN PERSADA BERJAYA.
        </p>
        <p class="text-[10px] md:mt-0 mt-4">
          WEBSITE DESIGN &amp; DEVELOPMENT BY MARK DESIGN INDONESIA.
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const settings = useDataSettings();
</script>