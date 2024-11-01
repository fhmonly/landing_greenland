<template>
  <section id="section6" class="flex flex-col bg-white lg:flex-row min-h-[75vh]">
    <div class="px-5 pt-5 grow md:px-0 md:pt-0">
      <img alt="Entrance to Green Land with palm trees and cars on the road" class="object-cover w-full h-full"
        height="200" src="/img/contenTPromo.jpg" width="640" data-aos="fade-up" />
    </div>
    <div
      class="flex flex-col items-start justify-center p-5 md:p-8 lg:p-16 text-size-main shrink-0 w-full lg:max-w-[40%] xl:max-w-[45%]">
      <span class="text-base font-normal text-[#38544c]">
        PROMO &amp; OFFERS
      </span>
      <span class="text-[50px] lg:text-[55px] xl:text-[60px] 2xl:text-[65px] py-6 font-times text-[#38544c]">
        Your green home <br />
        awaits
      </span>
      <NuxtLink to="/promo" class="flex btn-visit-green" data-aos="fade-up">
        <span class="text-xs tracking-wider text">SEE PROMOTION</span>
        <span class="circle">
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-arrow-right"
              viewBox="0 0 24 16">
              <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h18.793l-3.146-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L20.293 8.5H1.5A.5.5 0 0 1 1 8z"
                stroke="currentColor" stroke-width="2" />
              <path d="M18 8l2-2v4l-2-2z" fill="currentColor" />
            </svg>
          </span>
        </span>
      </NuxtLink>
    </div>
  </section>
</template>