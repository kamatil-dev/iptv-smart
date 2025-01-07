<template>
  <header class="bg-black/70 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50 px-4 py-2 text-white">
    <div class="flex flex-wrap h-auto md:h-16 items-center justify-between">
      <NuxtLink class="text-fuchsia-900" to="/">
        <img class="w-12" :src="Settings.logo.publicURL" alt="" />
      </NuxtLink>

      <div class="block md:hidden">
        <button @click="isMenuOpen = !isMenuOpen"
          class="rounded border-2 border-[#4c35e3] p-2 transition hover:text-[#4c35e3] text-white">
          <svg v-if="isMenuOpen" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <ul :class="isMenuOpen
        ? 'flex flex-col md:flex-row'
        : 'hidden md:flex-row md:flex'
        " class="md:w-fit w-full items-center gap-4 md:gap-12 py-4">
        <li>
          <NuxtLink class="transition hover:text-fuchsia-900" to="/">
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="transition hover:text-fuchsia-900" to="/chaines-iptv">
            Chaines IPTV
          </NuxtLink>
        </li>

        <li>
          <NuxtLink class="transition hover:text-fuchsia-900" to="/installation">
            Installation
          </NuxtLink>
        </li>

        <li>
          <a class="transition hover:text-fuchsia-900" href="/#abonnement">
            Abonnement IPTV
          </a>
        </li>

        <li>
          <NuxtLink class="transition hover:text-fuchsia-900" to="/contact">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
  <NuxtPage />

  <section class="bg-gradient-to-b from-indigo-900 to-fuchsia-950 text-white mx-auto px-4 pt-16 pb-8">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
        POURQUOI DÉBOURSER PLUS DE 60 € PAR MOIS POUR LES SERVICES DE TÉLÉVISION
        PAR CÂBLE OU SATELLITE?
      </h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img alt="" src="/footer-slidzer-1.webp" class="absolute inset-0 h-full w-full object-cover rounded-3xl" />
      </div>
      <div>
        <ul class="list-disc pl-4 space-y-5">
          <li>Évitez les frais de câble coûteux</li>
          <li>Aucune installation de matériel nécessaire</li>
          <li>Aucune limitation de bande passante</li>
          <li>Accès à plus de 20 000 chaînes</li>
          <li>Disponible en accès illimité 24h/24, 7j/7</li>
          <li>Mises à jour automatiques des chaînes</li>
          <li>Regardez sur tous vos appareils</li>
          <li>Plus de 20 000 chaînes en ligne</li>
          <li>Plus de 30 000 vidéos à la demande</li>
        </ul>

        <NuxtLink
          class="inline-flex items-center gap-2 mt-6 rounded bg-fuchsia-900 px-8 py-3 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring ring-[#4c35e3] active:text-white"
          to="/#abonnement">
          <span class="text-sm font-medium"> JE COMMANDE MAINTENANT! </span>
          <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
  <footer class="bg-fuchsia-950 mx-auto px-4 pb-16 text-white pt-8">
    <img class="mx-auto w-16" :src="Settings.logo.publicURL" alt="" />
    <div class="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
      <span class="inline-flex gap-2 items-center">
        <svg class="block w-6 h-6 text-[#4c35e3]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2" />
        </svg>
        {{ Settings.email }}
      </span>
      <span class="inline-flex gap-2 items-center" v-if="Settings.whatsapp">
        <svg class="block w-6 h-6 text-[#4c35e3]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
        </svg>
        {{ Settings.whatsapp }}
      </span>
    </div>

    <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <NuxtLink class="transition hover:text-gray-300" to="/politique-de-confidentialite">
          Politique de confidentialité
        </NuxtLink>
      </li>

      <li>
        <NuxtLink class="transition hover:text-gray-300" to="/conditions-generales-dutilisation">
          Conditions générales d'utilisation
        </NuxtLink>
      </li>

      <li>
        <NuxtLink class="transition hover:text-gray-300" to="/politique-de-remboursement">
          Politique de remboursement
        </NuxtLink>
      </li>
    </ul>
  </footer>
  <a v-if="Settings.whatsapp" :href="`https://wa.me/` + Settings.whatsapp"
    class="fixed bottom-4 right-4 bg-[#25d366] text-white flex gap-4 px-4 py-2 items-center justify-center rounded-full">
    <svg class="block w-5 h-5" fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve">
      <g id="XMLID_468_">
        <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z" />
        <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z" />
      </g>
    </svg>
    <span class="font-bold">WhatsApp</span>
  </a>
</template>

<script lang="ts" setup>
const Settings = useState<SettingsT>("settings");
const isMenuOpen = ref(false);

useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk
			? `${titleChunk} | ${Settings.value.title}`
			: Settings.value.title;
	},
	meta: [
		{
			name: "description",
			content: Settings.value.description,
		},
	],
});
</script>
