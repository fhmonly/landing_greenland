<template>
  <header
    id="navbar"
    class="fixed top-0 left-0 w-full z-50 green-effect bg-[#2c3c34a1] transition-colors duration-300"
  >
    <nav class="flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center pl-6 md:pl-12">
        <img src="/img/logo.png" alt="Logo" class="h-10 mr-5" />
        <span class="text-white font-light text-lg font-times tracking-[1px]">
          G R E E N L A N D
        </span>
      </NuxtLink>
      <div class="block">
        <label
          for="menu-toggle"
          class="text-white focus:outline-none bg-[#3c4f4b] block p-5 cursor-pointer"
        >
          <IconBiList width="24" height="24" />
        </label>
      </div>
    </nav>
    <input type="checkbox" id="menu-toggle" hidden />
    <div
      id="side-menu"
      class="fixed top-0 right-0 h-full w-64 bg-[#3c4f4b] transform transition-transform duration-300 ease-in-out"
    >
      <div
        class="flex items-center justify-between px-6 py-4 text-sm text-white font-times"
      >
        <p class="flex items-center">
          <img src="/img/logo.png" alt="Logo" class="h-8 pe-3" /> G R E E N L A
          N D
        </p>
        <label
          for="menu-toggle"
          class="block text-2xl text-white cursor-pointer focus:outline-none aspect-square"
        >
          <IconBiX width="24" height="24" />
        </label>
      </div>
      <ul class="px-6 text-white">
        <li class="ps-4 py-2 hover:bg-[#FFFFFF45] font-nunito text-lg my-3">
          <NuxtLink href="/" class="scroll-link">Home</NuxtLink>
        </li>
        <li class="ps-4 py-2 hover:bg-[#FFFFFF45] font-nunito text-lg mb-3">
          <NuxtLink href="/about" class="scroll-link">About</NuxtLink>
        </li>
        <li class="ps-4 py-2 hover:bg-[#FFFFFF45] font-nunito text-lg mb-3">
          <NuxtLink href="/clusters" class="scroll-link">Cluster</NuxtLink>
        </li>
        <li class="ps-4 py-2 hover:bg-[#FFFFFF45] font-nunito text-lg mb-3">
          <NuxtLink href="/news" class="scroll-link">News</NuxtLink>
        </li>
        <li class="ps-4 py-2 hover:bg-[#FFFFFF45] font-nunito text-lg mb-3">
          <NuxtLink href="/promo" class="scroll-link">Promo</NuxtLink>
        </li>
        <li class="ps-4 py-2 hover:bg-[#FFFFFF45] font-nunito text-lg mb-3">
          <NuxtLink href="#footer" class="scroll-link">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
#menu-toggle + #side-menu {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#menu-toggle:checked + #side-menu {
  --tw-translate-x: 0%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>