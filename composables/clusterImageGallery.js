import Swal from "sweetalert2"

export function useClusterImageGalery() {
  const config = useRuntimeConfig()
  function showClusterGalery({ images = [], description = "tes" }) {
    Swal.fire({
      showConfirmButton: false,
      didRender: () => {
        const swalHtml = Swal.getHtmlContainer();
        const imagesHtml = images.map((image, index) => {
          return `
            <swiper-slide>
              <div class="m-auto h-full w-full flex items-center justify-center relative">
                <img src="${image}" alt="gambar ke-${index}" class="m-auto portrait:w-full landscape:h-full object-contain"/>
                <div class="absolute bottom-0 flex m-auto text-white description portrait:w-full landscape:h-full">
                  <div class="w-full mt-auto bg-[#00000080] py-2 ${description.trim().length <= 0 ? 'hidden' : ''}">
                    ${description}
                  </div>  
                </div>
              </div>
            </swiper-slide>
          `;
        });
        const imagesThumb = images.map((image, index) => {
          return `
            <swiper-slide>
              <div class="m-auto h-full w-full flex items-center justify-center">
                <img src="${image}" alt="gambar ke-${index}" class="m-auto portrait:w-full landscape:h-full"/>
              </div>
            </swiper-slide>
          `;
        })
        swalHtml.innerHTML = `
          <div class="h-full w-full pt-[40px]">
            <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper" thumbs-swiper=".mySwiper2" space-between="10" navigation="true">
              ${imagesHtml.join("")}
            </swiper-container>
            <swiper-container class="mySwiper2" slides-per-view="auto" centered-slides="true" space-between="10" free-mode="true" watch-slides-progress="true">
              ${imagesThumb.join("")}
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
          .mySwiper {
            height: 74vh;
          }
          .mySwiper2 {
            height: 14vh;
            box-sizing: border-box;
            padding: 10px 0;
          }

          .mySwiper2 swiper-slide {
            opacity: 0.4;
            height: 100%;
          }

          .mySwiper2 .swiper-slide-thumb-active {
            opacity: 1;
          }
          </style>
         `;
      },
      didOpen: () => {
        const swalHtmlContainer = Swal.getHtmlContainer();
        const swiper = swalHtmlContainer.querySelector("swiper-container");
        const swiperSlides = swalHtmlContainer.querySelectorAll(
          "swiper-container swiper-slide"
        );
        const slide0 = swiperSlides[0];
        const image0 = slide0.querySelector("img");
        const imageWidth0 = image0.width;
        const imageHeight0 = image0.height;
        const description0 = slide0.querySelector(".description");
        description0.style.aspectRatio = `${imageWidth0}/${imageHeight0}`;
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
  return { showClusterGalery }
}