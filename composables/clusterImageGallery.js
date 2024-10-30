import Swal from "sweetalert2"

export function useClusterImageGalery() {
    const config = useRuntimeConfig()
    function showClusterGalery({ images = [], description = "" }) {
        Swal.fire({
            showConfirmButton: false,
            didRender: () => {
                const swalHtml = Swal.getHtmlContainer();
                const imagesHtml = images.map((image, index) => {
                    return `
                        <swiper-slide>
                          <div class="max-h-[85vh] max-w-[90%] object-cover m-auto h-full w-full landscape:aspect-[4/3] portrait:aspect-[9/16] flex items-center justify-center relative">
                            <img src="${config.public.dirUrl}/${image}" alt="gambar ke-${index}" class="m-auto portrait:w-full landscape:h-full"/>
                            <div class="absolute bottom-0 flex m-auto text-white description portrait:w-full landscape:h-full">
                              <div class="w-full mt-auto bg-[#00000080] py-2">
                                ${description}
                              </div>  
                            </div>
                          </div>
                        </swiper-slide>
                        `;
                });
                swalHtml.innerHTML = `
                    <swiper-container navigation="true" space-between="10">
                      ${imagesHtml.join("")}
                    </swiper-container>
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
            width: "90vw",
            heightAuto: true,
            background: "#2c3c34a1"
        });
    }
    return { showClusterGalery }
}