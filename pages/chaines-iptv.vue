<template>
  <section
    class="relative flex items-center justify-center h-screen overflow-hidden"
  >
    <video
      autoplay
      loop
      muted
      class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source src="/third.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
  <section class="bg-black text-white mx-auto px-4 py-32">
    <div class="flex flex-col gap-5 max-w-2xl text-center mx-auto">
      <h3 class="text-4xl md:text-5xl font-bold">
        Tout votre contenu disponible sur une plateforme unique
      </h3>
      <p class="text-xl">
        Profitez de l'accès complet à la vaste bibliothèque de streaming de
        Hulu, comprenant vos sports en direct préférés, les dernières nouvelles,
        les événements incontournables et les émissions en cours.
      </p>
      <NuxtLink
        class="mt-8 w-fit mx-auto rounded-xl font-bold bg-fuchsia-900 px-12 py-3 text-white shadow hover:bg-fuchsia-950 focus:outline-none focus:ring ring-[#4c35e3] active:bg-fuchsia-950"
        to="/#abonnement"
      >
        JE COMMANDE MAINTENANT!
      </NuxtLink>
    </div>
  </section>
  <img
    class="pl-6 block h-fit w-full"
    src="/image-section--1536x936.png"
    alt=""
  />
  <img class="block h-fit w-full" src="/section-3-smar.png" alt="" />
  <img class="block h-fit w-full" src="/section-4-smart-1536x726.png" alt="" />
</template>

<script setup>
useHead({
  title: "Chaines IPTV",
});
</script>
