import Swal from "sweetalert2"

export function useImageGalery() {
  useHead({
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
      },
    ],
  });
  function showImageGalery({ galeries = [], activeImageIndex = 0 }) {
    Swal.fire({
      showConfirmButton: false,
      didRender: () => {
        const swalHtml = Swal.getHtmlContainer();
        const galeriesHtml = galeries.map((galery, index) => {
          const isDescEmpty = galery?.description.trim().length <= 0
          const altImage = isDescEmpty ? `gambar ke-${index}` : `gambar ${galery.description}`
          return `
            <swiper-slide>
              <div class="m-auto h-full w-full flex items-center justify-center relative">
                <img src="${galery.image}" alt="${altImage}" class="m-auto portrait:w-full landscape:h-full object-contain"/>
                <div class="absolute bottom-0 flex m-auto text-white description portrait:w-full landscape:h-full">
                  <div class="w-full mt-auto bg-[#00000080] py-2 ${isDescEmpty ? 'hidden' : ''}">
                    ${galery?.description}
                  </div>  
                </div>
              </div>
            </swiper-slide>
          `;
        });
        const galeriesThumb = galeries.map((galery, index) => {
          return `
            <swiper-slide>
              <img src="${galery.image}"/>
            </swiper-slide>
          `;
        })
        swalHtml.innerHTML = `
          <div class="h-full w-full pt-[40px]">
            <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper" thumbs-swiper=".mySwiper2" space-between="10" navigation="false">
              ${galeriesHtml.join("")}
            </swiper-container>
              <swiper-container class="mySwiper2" space-between="10" slides-per-view="4" centered-slides="true" free-mode="true" watch-slides-progress="true">
              ${galeriesThumb.join("")}
            </swiper-container>
          </div>
          <style>
          div:where(.swal2-container){
            padding: 0;
            display: flex;
          }
          div:where(.swal2-container).swal2-center>.swal2-popup{
            place-self: normal;
          }
          swiper-container {
            width: 100%;
            height: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          swiper-slide {
            background-size: cover;
            background-position: center;
          }
          .mySwiper {
            height: 80%;
            width: 100%;
          }
          .mySwiper2 {
            height: 20%;
            box-sizing: border-box;
            padding: 10px 0;
          }
          .mySwiper2 swiper-slide {
            width: fit-content !important;
            height: 100%;
            opacity: 0.4;
          }
          .mySwiper2 .swiper-slide-thumb-active {
            opacity: 1;
          }
          swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          </style>
         `;
      },
      didOpen: () => {
        const swalHtmlContainer = Swal.getHtmlContainer();
        const swiper = swalHtmlContainer.querySelector("swiper-container.mySwiper");
        const swiperSlides = swiper.querySelectorAll(
          "swiper-slide"
        );
        const slide0 = swiperSlides[0];
        const image0 = slide0.querySelector("img");
        const imageWidth0 = image0.width;
        const imageHeight0 = image0.height;
        const description0 = slide0.querySelector(".description");
        description0.style.aspectRatio = `${imageWidth0}/${imageHeight0}`;
        swiper.swiper.slideTo(activeImageIndex)
        swiper.swiper.on("slideChange", (e) => {
          const activeIndex = e.activeIndex;
          const currentSlide = swiperSlides[activeIndex];
          const currentImage = currentSlide.querySelector("img");
          const imageWidth = currentImage.width;
          const imageHeight = currentImage.height;
          const description = currentSlide.querySelector(".description");
          description.style.aspectRatio = `${imageWidth}/${imageHeight}`;
        });
      },
      showCloseButton: true,
      width: "100vw",
      heightAuto: true,
      backdrop: true,
      background: "black"
      // background: "#2c3c34a1"
    });
  }
  return { showImageGalery }
}