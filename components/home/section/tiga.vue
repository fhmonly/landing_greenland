<template>
  <section id="section4" class="py-4 bg-blend md:py-16">
    <div class="py-12 text-center">
      <h1
        class="md:text-6xl text-4xl text-[#3c4f4b] font-times mb-2 md:px-0 px-12"
        data-aos="fade-down"
      >
        A Glimpse of GreenLand
      </h1>
    </div>
    <div class="flex justify-center">
      <div class="relative w-full mx-3 md:w-3/4 md:mx-0">
        <iframe
          id="youtubeIframe"
          class="md:h-[470px] h-[250px] w-full rounded-md"
          data-src="https://www.youtube.com/embed/KMWT5JxiP10?controls=0&modestbranding=1&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div
          id="videoOverlay"
          class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        >
          <button
            id="playButton"
            class="p-6 bg-white border-2 border-[#38544c] rounded-full hover:bg-[#38544c] animation-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-linejoin="round"
              class="w-8 h-8 text-[#38544c] btn-yt hover:text-white"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="py-12 mb-0 text-center md:mb-24">
      <h2 class="md:text-3xl text-[#38544c] text-2xl font-times font-normal">
        More GreenLand Visual Tour
      </h2>
      <p
        class="text-black mt-4 md:w-[48%] w-full text-center md:px-0 px-5 mx-auto md:text-[10px] text-xs tracking-wider"
      >
        Subscribe ke Youtube channel GreenLand dan dapatkan perkembangan serta
        promo terkini. Anda dapat melihat dengan lebih detil aneka fitur dan
        visual arsitektur hunian di GreenLand residence Surabaya Barat
      </p>
      <div
        class="grid justify-center gap-6 mt-10 md:flex place-items-stretch md:mt-16 md:gap-24"
      >
        <button
          class="flex mx-auto btn-visit-black"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span class="text-xs tracking-wider text">MORE VIDEOS</span>
          <span class="circle">
            <span class="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 24 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h18.793l-3.146-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L20.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M18 8l2-2v4l-2-2z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </button>
        <button
          class="flex mx-auto btn-visit-black"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span class="text-xs tracking-wider text">YOUTUBE CHANNEL</span>
          <span class="circle">
            <span class="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 24 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h18.793l-3.146-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L20.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M18 8l2-2v4l-2-2z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
onMounted(() => {
  document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const videoOverlay = document.getElementById("videoOverlay");
    const youtubeIframe = document.getElementById("youtubeIframe");

    playButton.addEventListener("click", function () {
      const src = youtubeIframe.getAttribute("data-src");
      youtubeIframe.setAttribute("src", src + "&autoplay=1");
      videoOverlay.classList.add("hidden");
    });
  });
});
</script>
<style scoped>
.bg-blend {
  background: linear-gradient(
      to bottom,
      rgba(245, 244, 237, 1),
      rgba(248, 244, 236, 0.9),
      rgba(248, 244, 236, 0.7),
      rgba(248, 244, 236, 0.5),
      rgba(248, 244, 236, 0.3),
      rgba(248, 244, 236, 0)
    ),
    url("./img/bGVideo.jpg");
  background-size: cover;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

#videoOverlay {
  background-image: url("./img/video-bg.jpg");
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease;
}

#videoOverlay.hidden {
  opacity: 0;
  pointer-events: none;
}

#playButton {
  cursor: pointer;
  animation: pulse 1.5s infinite;
}

#playButton {
  box-shadow: 0 0 20px rgb(255, 255, 255);
  transition: all 0.3s ease;
}

#playButton:hover {
  box-shadow: 0 0 40px rgb(255, 255, 255);
  transform: scale(1.1);
  background-color: #38544c;
}

.btn-yt {
  transition: all 0.3s ease;
  color: #38544c;
  fill: #38544c;
}

.btn-yt:hover {
  color: #fff;
  fill: #fff;
}
</style>