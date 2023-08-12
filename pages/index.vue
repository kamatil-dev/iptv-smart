<template>
  <div
    v-if="Message"
    :class="
      Message.type === 'error'
        ? 'text-red-400 border-red-800'
        : 'text-green-400 border-green-800'
    "
    class="fixed z-50 bottom-4 rounded-2xl gap-4 w-fit mx-4 md:mx-auto left-0 right-0 flex items-center p-4 mb-4 border-t-4 bg-gray-800"
    role="alert"
  >
    <svg
      class="flex-shrink-0 w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>
    <div class="ml-3 text-sm font-medium">
      {{ Message.content }}
    </div>
    <button
      type="button"
      :class="
        Message.type === 'error'
          ? 'text-red-400 focus:ring-red-400'
          : 'text-green-400 focus:ring-green-400'
      "
      class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 bg-gray-800 hover:bg-gray-700"
      data-dismiss-target="#alert-border-2"
      aria-label="Close"
    >
      <span class="sr-only">Dismiss</span>
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </div>
  <section
    :class="{
      hidden:
        (!Order.prix && Order.prix !== 0) ||
        LoadingButton[`${Order.mois}-${Order.prix}`],
    }"
    class="fixed z-50 top-0 left-0 right-0 bottom-0 bg-black/70 backdrop-blur flex justify-center items-center"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative rounded-lg shadow bg-black overflow-hidden">
        <div
          v-if="Loading"
          role="status"
          class="absolute z-[999999] -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 animate-spin text-gray-600 fill-fuchsia-900"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <div
          v-if="Loading"
          class="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[99999]"
        ></div>
        <button
          type="button"
          @click="
            (LoadingButton[`${Order.mois}-${Order.prix}`] = false), (Order = {})
          "
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {{
              Order.mois === 0 ? "24 Heures" : `Abonnement ${Order.mois} mois`
            }}
          </h3>
          <form
            ref="FormCommander"
            @submit="Commander"
            class="space-y-6"
            action="#"
          >
            <div>
              <label
                for="nom_complet"
                class="block mb-2 text-sm font-medium text-white"
                >Nom complet</label
              >
              <input
                v-model="Order.nom_complet"
                type="nom_complet"
                name="nom_complet"
                id="nom_complet"
                class="border text-sm rounded-lg block w-full p-2.5 outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                placeholder="Nom complet"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
                >Email</label
              >
              <input
                v-model="Order.email"
                type="email"
                name="email"
                id="email"
                class="border text-sm rounded-lg block w-full p-2.5 outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                placeholder="nom@exemple.com"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Numéro de téléphone</label
              >
              <div
                :class="{ hidden: !showCountrySelector }"
                class="fixed z-9 top-0 left-0 w-full h-full"
                @click="showCountrySelector = false"
              ></div>
              <div class="flex relative">
                <button
                  v-if="selectedCountry"
                  @click="() => (showCountrySelector = !showCountrySelector)"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border rounded-l-lg focus:outline-none bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600"
                  type="button"
                >
                  {{ selectedCountry.isoCode }}
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <button
                  v-else
                  @click="() => (showCountrySelector = !showCountrySelector)"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border rounded-l-lg focus:outline-none bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600"
                  type="button"
                >
                  --
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  :class="{ hidden: !showCountrySelector }"
                  class="z-[999] h-32 absolute overflow-y-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="states-button"
                  >
                    <li v-for="country in countries">
                      <button
                        type="button"
                        @click="
                          () => (
                            (selectedCountry = country),
                            (showCountrySelector = false)
                          )
                        "
                        class="flex gap-4 px-4 py-2 w-full text-sm text-gray-400 hover:bg-gray-600 hover:text-white"
                      >
                        <img
                          :src="`https://cdn.kcak11.com/CountryFlags/countries/${country.isoCode.toLowerCase()}.svg`"
                          class="h-3.5 w-3.5 rounded-full mr-2"
                        />
                        {{ country.name }}
                      </button>
                    </li>
                  </ul>
                </div>
                <input
                  :disabled="!selectedCountry"
                  class="border-l-0 border text-sm rounded-r-lg block w-full p-2.5 outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  v-model="Order.phone"
                  ref="phone"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+33......."
                  required
                />
              </div>
            </div>
            <div v-if="Order.prix !== 0" id="paypal-button"></div>
            <button
              v-else
              type="submit"
              class="w-full text-white bg-fuchsia-900 hover:bg-fuchsia-950 focus:ring-4 focus:outline-none focus:ring-fuchsia-500 rounded-lg text-sm px-5 py-2.5 text-center font-bold"
            >
              Commander
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section
    class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
  >
    <video
      autoplay
      loop
      muted
      class="absolute w-auto min-w-full min-h-full max-w-none"
    >
      <source src="/first.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
  <section
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-4xl md:text-5xl">
        La meilleure souscription
        <strong class="font-extrabold text-fuchsia-900 sm:block">
          IPTV numéro 1 en Europe.
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
        IPTV Smarters, l'abonnement PREMIUM n°1 en France et en Europe, avec
        plus de 50 000 chaînes en qualité 4K/Full HD/HD, ainsi que des films et
        séries en illimité. Profitez de Netflix, Amazon Prime, Disney+ et de
        toutes vos émissions préférées dans un seul abonnement 4K, avec une
        diffusion multi-écrans sans interruptions ni soucis.
      </p>

      <NuxtLink
        class="mt-8 block w-fit mx-auto rounded-xl font-bold bg-fuchsia-900 px-12 py-3 text-white shadow hover:bg-fuchsia-950 focus:outline-none focus:ring ring-[#4c35e3] active:bg-fuchsia-950"
        to="/#abonnement"
      >
        Accédez à l'IPTV dès maintenant
      </NuxtLink>
    </div>
  </section>
  <section class="bg-black flex flex-col gap-4 p-4">
    <h3 class="text-white text-xl">Nos dernières sorties | Regardez tout</h3>
    <div class="flex overflow-x-auto space-x-8">
      <img src="/SLDIER-e-SMAERTES.webp" alt="" />
      <img src="/smarters-1.webp" alt="" />
      <img src="/DS.webp" alt="" />
      <img src="/SMAR.webp" alt="" />
      <img src="/SMATE.webp" alt="" />
      <img src="/SMARTT.webp" alt="" />
      <img src="/SMARTYY.webp" alt="" />
    </div>
  </section>

  <section class="bg-gradient-to-b from-indigo-900 to-fuchsia-950 text-white">
    <div class="mx-auto max-w-screen-2xl py-8 items-center">
      <div class="mx-auto max-w-2xl text-center px-4">
        <h4 class="mb-4">
          Chaînes | Émissions de télévision | Films | Séries | Sport | Enfants |
          et bien plus encore
        </h4>
        <h3 class="text-3xl font-extrabold sm:text-4xl md:text-5xl">
          ACCÈS À TOUTES LES CHAÎNES ET FILMS EN UN SEUL ET UNIQUE ABONNEMENT
        </h3>

        <p class="mt-4 sm:text-xl/relaxed">
          Profitez de l'accès complet à la bibliothèque de diffusion en continu
          de Smart IPTV, ainsi qu'à vos sports en direct favoris, aux dernières
          nouvelles, aux événements incontournables et aux émissions en cours.
        </p>
      </div>
    </div>
  </section>

  <section
    class="relative flex items-center justify-center h-screen overflow-hidden"
  >
    <video
      autoplay
      loop
      muted
      class="absolute w-auto min-w-full min-h-full max-w-none"
    >
      <source src="/second.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <section
    class="bg-gradient-to-b from-indigo-900 to-fuchsia-950 text-white p-6 text-center"
  >
    <h3 class="text-3xl">
      Chaînes | Émissions de télévision | Films | Séries | Sport | Enfants | et
      bien plus encore
    </h3>
    <div class="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div class="rounded-lg border p-12 space-y-4">
        <h4 class="text-2xl font-bold">Connexion ultra-rapide</h4>
        <p>
          À la différence des autres fournisseurs d'IPTV, chez Smart IPTV, nous
          utilisons un serveur dédié de haute qualité situé en Europe, offrant
          une connexion ultra-rapide de 10 Gbps. L'accès à nos chaînes de
          télévision se fait en moins de 0,5 seconde, garantissant une
          expérience instantanée et fluide.
        </p>
      </div>
      <div class="rounded-lg border p-12 space-y-4">
        <h4 class="text-2xl font-bold">Installation instantanée</h4>
        <p>
          La configuration et l'installation de votre abonnement IPTV sur votre
          appareil préféré sont simples et rapides. Chez nous, nous fournissons
          des didacticiels complets sur notre site web pour faciliter ce
          processus à tous nos utilisateurs. Vous trouverez toutes les
          informations nécessaires pour configurer votre abonnement en quelques
          étapes seulement.
        </p>
      </div>
      <div class="rounded-lg border p-12 space-y-4">
        <h4 class="text-2xl font-bold">+50 000 Chaînes du monde</h4>
        <p>
          Découvrez une liste complète de toutes les chaînes européennes
          disponibles. Avec notre offre de plus de 50 000 chaînes de télévision,
          nous sommes fiers de vous proposer la liste de chaînes la plus
          complète et avancée du marché. Peu importe vos préférences de
          divertissement, vous trouverez un large éventail de chaînes pour
          satisfaire tous les goûts.
        </p>
      </div>
      <div class="rounded-lg border p-12 space-y-4">
        <h4 class="text-2xl font-bold">
          Assistance rapide par chat en direct 24h/7j
        </h4>
        <p class="text-gray-300">
          Chez nous, nous comprenons l'importance de l'assistance clientèle.
          Même si nous sommes convaincus que vous n'aurez jamais de problèmes,
          nous sommes là pour vous aider à tout moment. Notre équipe
          d'assistance est disponible 24 heures sur 24 et 7 jours sur 7 via
          notre chat en direct. Que ce soit pour une question, une assistance
          lors de l'installation de votre service ou tout autre besoin, il vous
          suffit de nous contacter par chat ou par e-mail et nous serons ravis
          de vous aider rapidement.
        </p>
      </div>
      <div class="rounded-lg border p-12 space-y-4">
        <h4 class="text-2xl font-bold">Plans tarifaires flexibles</h4>
        <p class="text-gray-300">
          Chez nous, nous proposons une gamme variée de plans tarifaires
          flexibles pour répondre à vos besoins spécifiques. Que vous
          recherchiez une solution à court terme ou à long terme, nous avons un
          plan qui vous conviendra parfaitement. Nous comprenons l'importance
          d'économiser de l'argent, c'est pourquoi nous vous encourageons à
          explorer nos options tarifaires avantageuses. Ne tardez pas, commandez
          dès maintenant et faites des économies.
        </p>
      </div>
      <div class="rounded-lg border p-12 space-y-4">
        <h4 class="text-2xl font-bold">Qualité 8K / 4K FHD / HD / SD</h4>
        <p>
          La majorité de nos chaînes sont disponibles en qualité FHD (Full HD),
          et certaines sont même proposées en résolution 4K pour une expérience
          visuelle exceptionnelle. De plus, nous prenons en charge les chaînes
          en 3D, pour une immersion encore plus réaliste. Peu importe votre
          préférence de qualité d'image, nous avons ce qu'il vous faut pour
          profiter de vos contenus préférés avec une netteté et une clarté
          optimales.
        </p>
      </div>
    </div>
  </section>

  <section
    id="abonnement"
    class="bg-black flex flex-col gap-4 py-12 px-4 text-white"
  >
    <h3 class="mx-auto text-4xl md:text-6xl mb-6 text-center font-bold">
      Plans d'abonnement
    </h3>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <div
        v-for="plan in Settings.plans"
        class="border-4 px-12 space-y-6"
        :class="
          plan.mois === 12
            ? 'relative bg-gradient-to-t from-fuchsia-900 to-transparent border-fuchsia-900 pt-6 pb-12'
            : 'border-gray-600 py-12'
        "
      >
        <span
          v-if="plan.mois === 12"
          class="bg-fuchsia-900 px-4 py-2 mx-auto text-center w-fit absolute top-0 right-0 left-0 rounded-b-3xl"
          >lE PLUS VENDU</span
        >
        <h4
          v-if="plan.prix === 0"
          class="text-2xl font-bold mx-auto text-center"
        >
          24 Heures<br />GRATUIT
        </h4>
        <h4 v-else class="text-2xl font-bold mx-auto text-center">
          {{ plan.mois }} Mois<br />€{{ plan.prix }}
        </h4>
        <span
          class="block w-9 border-2 border-gray-600 mx-auto text-center"
        ></span>
        <ul class="pl-4 list-disc marker:text-white text-gray-400">
          <li>+50 000 Chaines</li>
          <li>+20 000 Films et Series VOD</li>
          <li>Netflix</li>
          <li>Amazon Prime Vidéo</li>
          <li>Disney+</li>
          <li>Apple TV</li>
          <li>Pack adultes</li>
          <li>Qualité Ultra HD</li>
          <li>Mises à jour automatiques</li>
          <li>Disponible sur tous les appareils</li>
          <li>Technologies AntiFreeze</li>
          <li>Guide TV EPG</li>
          <li>Support 24/7</li>
          <li>Meilleur service IPTV en {{ new Date().getFullYear() }}.</li>
        </ul>
        <button
          @click="
            (Order = { mois: plan.mois, prix: plan.prix }),
              plan.prix !== 0 ? PaypalButton() : null
          "
          :disabled="LoadingButton[`${plan.mois}-${plan.prix}`]"
          :class="
            LoadingButton[`${plan.mois}-${plan.prix}`]
              ? 'inline-flex items-center bg-transparent opacity-70'
              : 'block'
          "
          class="text-center mx-auto rounded bg-fuchsia-900 px-8 py-3 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring ring-fuchsia-900 active:text-white"
        >
          <svg
            v-if="LoadingButton[`${plan.mois}-${plan.prix}`]"
            aria-hidden="true"
            role="status"
            class="inline mr-2 w-8 h-8 animate-spin text-gray-200"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#000"
            ></path>
          </svg>

          <span class="text-sm font-medium"> JE COMMANDE MAINTENANT! </span>
        </button>
      </div>
    </div>
  </section>

  <section class="flex flex-col gap-4 p-12">
    <h3 class="mx-auto text-4xl md:text-6xl mb-6 text-center font-bold">
      Nos partenaires populaires
    </h3>
    <div class="grid grid-cols-3 gap-6 lg:grid-cols-5">
      <img src="/DDS-1.webp" alt="" />
      <img src="/DS-1.webp" alt="" />
      <img src="/DSD-1.webp" alt="" />
      <img src="/DSDD-1.webp" alt="" />
      <img src="/DSDSD-1.webp" alt="" />
      <img src="/DSDS-1.webp" alt="" />
      <img src="/DSDSD-1.webp" alt="" />
      <img src="/LK-1.webp" alt="" />
      <img src="/SMART-1.webp" alt="" />
      <img src="/SS-1.webp" alt="" />
    </div>
  </section>
</template>

<script setup>
const Settings = useState("settings"),
  Order = ref({}),
  Message = ref(),
  Loading = ref(false),
  LoadingButton = ref({}),
  FormCommander = ref(),
  Commander = async (event) => {
    if (event) event.preventDefault();
    if (!Order.value || (Order.value.prix !== 0 && !Order.value.transaction))
      return;
    Loading.value = true;
    await $fetch("https://api.inicontent.com/iptv_pro/commande", {
      method: "POST",
      body: Order.value,
    });
    Loading.value = false;
    Order.value = {};
    Message.value = {
      type: "success",
      content:
        "Nous vous remercions pour votre commande, on va vous contacter prochainement.",
    };
  },
  PaypalButton = () => {
    document.querySelector("#paypal-button").innerHTML = "";
    if (!document.getElementById("paypalScriptTag")) {
      LoadingButton.value[`${Order.value.mois}-${Order.value.prix}`] = true;
      var scriptTag = document.createElement("script");
      scriptTag.setAttribute("id", "paypalScriptTag");
      scriptTag.setAttribute(
        "src",
        `https://www.paypal.com/sdk/js?client-id=${Settings.value.paypal}&currency=EUR`
      );
      scriptTag.onload = PaypalButton;
      document.body.appendChild(scriptTag);
      return;
    } else
      LoadingButton.value[`${Order.value.mois}-${Order.value.prix}`] = false;
    if (typeof window.paypal !== "undefined")
      window.paypal
        .Buttons({
          style: {
            layout: "horizontal",
          },
          createOrder: function (data, actions) {
            Loading.value = true;
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "EUR",
                    value: Order.value.prix,
                  },
                },
              ],
            });
          },
          onClick: function (data, actions) {
            FormCommander.value.requestSubmit();
            if (!FormCommander.value.reportValidity()) return actions.reject();
          },
          onCancel: function () {
            Loading.value = false;
          },
          onApprove: async function (data, actions) {
            return actions.order.capture().then(async (orderData) => {
              var transaction_id =
                orderData?.purchase_units[0]?.payments.captures[0]?.id;
              if (transaction_id) {
                Order.value.transaction = transaction_id;
                await Commander();
              } else
                Message.value = {
                  type: "error",
                  content: "Échec de paiement, merci de réessayer plus tard.",
                };
            });
          },
        })
        .render("#paypal-button");
    else setTimeout(PaypalButton, 250);
  },
  showCountrySelector = ref(false),
  selectedCountry = ref(),
  phone = ref(),
  countries = [
    {
      name: "Afghanistan",
      dialCode: "+93",
      isoCode: "AF",
    },
    {
      name: "Aland Islands",
      dialCode: "+358",
      isoCode: "AX",
    },
    {
      name: "Albania",
      dialCode: "+355",
      isoCode: "AL",
    },
    {
      name: "Algeria",
      dialCode: "+213",
      isoCode: "DZ",
    },
    {
      name: "American Samoa",
      dialCode: "+1684",
      isoCode: "AS",
    },
    {
      name: "Andorra",
      dialCode: "+376",
      isoCode: "AD",
    },
    {
      name: "Angola",
      dialCode: "+244",
      isoCode: "AO",
    },
    {
      name: "Anguilla",
      dialCode: "+1264",
      isoCode: "AI",
    },
    {
      name: "Antarctica",
      dialCode: "+672",
      isoCode: "AQ",
    },
    {
      name: "Antigua and Barbuda",
      dialCode: "+1268",
      isoCode: "AG",
    },
    {
      name: "Argentina",
      dialCode: "+54",
      isoCode: "AR",
    },
    {
      name: "Armenia",
      dialCode: "+374",
      isoCode: "AM",
    },
    {
      name: "Aruba",
      dialCode: "+297",
      isoCode: "AW",
    },
    {
      name: "Ascension Island",
      dialCode: "+247",
      isoCode: "AC",
    },
    {
      name: "Australia",
      dialCode: "+61",
      isoCode: "AU",
    },
    {
      name: "Austria",
      dialCode: "+43",
      isoCode: "AT",
    },
    {
      name: "Azerbaijan",
      dialCode: "+994",
      isoCode: "AZ",
    },
    {
      name: "Bahamas",
      dialCode: "+1242",
      isoCode: "BS",
    },
    {
      name: "Bahrain",
      dialCode: "+973",
      isoCode: "BH",
    },
    {
      name: "Bangladesh",
      dialCode: "+880",
      isoCode: "BD",
    },
    {
      name: "Barbados",
      dialCode: "+1246",
      isoCode: "BB",
    },
    {
      name: "Belarus",
      dialCode: "+375",
      isoCode: "BY",
    },
    {
      name: "Belgium",
      dialCode: "+32",
      isoCode: "BE",
    },
    {
      name: "Belize",
      dialCode: "+501",
      isoCode: "BZ",
    },
    {
      name: "Benin",
      dialCode: "+229",
      isoCode: "BJ",
    },
    {
      name: "Bermuda",
      dialCode: "+1441",
      isoCode: "BM",
    },
    {
      name: "Bhutan",
      dialCode: "+975",
      isoCode: "BT",
    },
    {
      name: "Bolivia",
      dialCode: "+591",
      isoCode: "BO",
    },
    {
      name: "Bosnia and Herzegovina",
      dialCode: "+387",
      isoCode: "BA",
    },
    {
      name: "Botswana",
      dialCode: "+267",
      isoCode: "BW",
    },
    {
      name: "Brazil",
      dialCode: "+55",
      isoCode: "BR",
    },
    {
      name: "British Indian Ocean Territory",
      dialCode: "+246",
      isoCode: "IO",
    },
    {
      name: "Brunei Darussalam",
      dialCode: "+673",
      isoCode: "BN",
    },
    {
      name: "Bulgaria",
      dialCode: "+359",
      isoCode: "BG",
    },
    {
      name: "Burkina Faso",
      dialCode: "+226",
      isoCode: "BF",
    },
    {
      name: "Burundi",
      dialCode: "+257",
      isoCode: "BI",
    },
    {
      name: "Cambodia",
      dialCode: "+855",
      isoCode: "KH",
    },
    {
      name: "Cameroon",
      dialCode: "+237",
      isoCode: "CM",
    },
    {
      name: "Canada",
      dialCode: "+1",
      isoCode: "CA",
    },
    {
      name: "Cape Verde",
      dialCode: "+238",
      isoCode: "CV",
    },
    {
      name: "Cayman Islands",
      dialCode: "+1345",
      isoCode: "KY",
    },
    {
      name: "Central African Republic",
      dialCode: "+236",
      isoCode: "CF",
    },
    {
      name: "Chad",
      dialCode: "+235",
      isoCode: "TD",
    },
    {
      name: "Chile",
      dialCode: "+56",
      isoCode: "CL",
    },
    {
      name: "China",
      dialCode: "+86",
      isoCode: "CN",
    },
    {
      name: "Christmas Island",
      dialCode: "+61",
      isoCode: "CX",
    },
    {
      name: "Cocos (Keeling) Islands",
      dialCode: "+61",
      isoCode: "CC",
    },
    {
      name: "Colombia",
      dialCode: "+57",
      isoCode: "CO",
    },
    {
      name: "Comoros",
      dialCode: "+269",
      isoCode: "KM",
    },
    {
      name: "Congo",
      dialCode: "+242",
      isoCode: "CG",
    },
    {
      name: "Cook Islands",
      dialCode: "+682",
      isoCode: "CK",
    },
    {
      name: "Costa Rica",
      dialCode: "+506",
      isoCode: "CR",
    },
    {
      name: "Croatia",
      dialCode: "+385",
      isoCode: "HR",
    },
    {
      name: "Cuba",
      dialCode: "+53",
      isoCode: "CU",
    },
    {
      name: "Cyprus",
      dialCode: "+357",
      isoCode: "CY",
    },
    {
      name: "Czech Republic",
      dialCode: "+420",
      isoCode: "CZ",
    },
    {
      name: "Democratic Republic of the Congo",
      dialCode: "+243",
      isoCode: "CD",
    },
    {
      name: "Denmark",
      dialCode: "+45",
      isoCode: "DK",
    },
    {
      name: "Djibouti",
      dialCode: "+253",
      isoCode: "DJ",
    },
    {
      name: "Dominica",
      dialCode: "+1767",
      isoCode: "DM",
    },
    {
      name: "Dominican Republic",
      dialCode: "+1849",
      isoCode: "DO",
    },
    {
      name: "Ecuador",
      dialCode: "+593",
      isoCode: "EC",
    },
    {
      name: "Egypt",
      dialCode: "+20",
      isoCode: "EG",
    },
    {
      name: "El Salvador",
      dialCode: "+503",
      isoCode: "SV",
    },
    {
      name: "Equatorial Guinea",
      dialCode: "+240",
      isoCode: "GQ",
    },
    {
      name: "Eritrea",
      dialCode: "+291",
      isoCode: "ER",
    },
    {
      name: "Estonia",
      dialCode: "+372",
      isoCode: "EE",
    },
    {
      name: "Eswatini",
      dialCode: "+268",
      isoCode: "SZ",
    },
    {
      name: "Ethiopia",
      dialCode: "+251",
      isoCode: "ET",
    },
    {
      name: "Falkland Islands (Malvinas)",
      dialCode: "+500",
      isoCode: "FK",
    },
    {
      name: "Faroe Islands",
      dialCode: "+298",
      isoCode: "FO",
    },
    {
      name: "Fiji",
      dialCode: "+679",
      isoCode: "FJ",
    },
    {
      name: "Finland",
      dialCode: "+358",
      isoCode: "FI",
    },
    {
      name: "France",
      dialCode: "+33",
      isoCode: "FR",
    },
    {
      name: "French Guiana",
      dialCode: "+594",
      isoCode: "GF",
    },
    {
      name: "French Polynesia",
      dialCode: "+689",
      isoCode: "PF",
    },
    {
      name: "Gabon",
      dialCode: "+241",
      isoCode: "GA",
    },
    {
      name: "Gambia",
      dialCode: "+220",
      isoCode: "GM",
    },
    {
      name: "Georgia",
      dialCode: "+995",
      isoCode: "GE",
    },
    {
      name: "Germany",
      dialCode: "+49",
      isoCode: "DE",
    },
    {
      name: "Ghana",
      dialCode: "+233",
      isoCode: "GH",
    },
    {
      name: "Gibraltar",
      dialCode: "+350",
      isoCode: "GI",
    },
    {
      name: "Greece",
      dialCode: "+30",
      isoCode: "GR",
    },
    {
      name: "Greenland",
      dialCode: "+299",
      isoCode: "GL",
    },
    {
      name: "Grenada",
      dialCode: "+1473",
      isoCode: "GD",
    },
    {
      name: "Guadeloupe",
      dialCode: "+590",
      isoCode: "GP",
    },
    {
      name: "Guam",
      dialCode: "+1671",
      isoCode: "GU",
    },
    {
      name: "Guatemala",
      dialCode: "+502",
      isoCode: "GT",
    },
    {
      name: "Guernsey",
      dialCode: "+44-1481",
      isoCode: "GG",
    },
    {
      name: "Guinea",
      dialCode: "+224",
      isoCode: "GN",
    },
    {
      name: "Guinea-Bissau",
      dialCode: "+245",
      isoCode: "GW",
    },
    {
      name: "Guyana",
      dialCode: "+592",
      isoCode: "GY",
    },
    {
      name: "Haiti",
      dialCode: "+509",
      isoCode: "HT",
    },
    {
      name: "Holy See (Vatican City State)",
      dialCode: "+379",
      isoCode: "VA",
    },
    {
      name: "Honduras",
      dialCode: "+504",
      isoCode: "HN",
    },
    {
      name: "Hong Kong",
      dialCode: "+852",
      isoCode: "HK",
    },
    {
      name: "Hungary",
      dialCode: "+36",
      isoCode: "HU",
    },
    {
      name: "Iceland",
      dialCode: "+354",
      isoCode: "IS",
    },
    {
      name: "India",
      dialCode: "+91",
      isoCode: "IN",
    },
    {
      name: "Indonesia",
      dialCode: "+62",
      isoCode: "ID",
    },
    {
      name: "Iran",
      dialCode: "+98",
      isoCode: "IR",
    },
    {
      name: "Iraq",
      dialCode: "+964",
      isoCode: "IQ",
    },
    {
      name: "Ireland",
      dialCode: "+353",
      isoCode: "IE",
    },
    {
      name: "Isle of Man",
      dialCode: "+44-1624",
      isoCode: "IM",
    },
    {
      name: "Israel",
      dialCode: "+972",
      isoCode: "IL",
    },
    {
      name: "Italy",
      dialCode: "+39",
      isoCode: "IT",
    },
    {
      name: "Ivory Coast / Cote d'Ivoire",
      dialCode: "+225",
      isoCode: "CI",
    },
    {
      name: "Jamaica",
      dialCode: "+1876",
      isoCode: "JM",
    },
    {
      name: "Japan",
      dialCode: "+81",
      isoCode: "JP",
    },
    {
      name: "Jersey",
      dialCode: "+44-1534",
      isoCode: "JE",
    },
    {
      name: "Jordan",
      dialCode: "+962",
      isoCode: "JO",
    },
    {
      name: "Kazakhstan",
      dialCode: "+77",
      isoCode: "KZ",
    },
    {
      name: "Kenya",
      dialCode: "+254",
      isoCode: "KE",
    },
    {
      name: "Kiribati",
      dialCode: "+686",
      isoCode: "KI",
    },
    {
      name: "Korea, Democratic People's Republic of Korea",
      dialCode: "+850",
      isoCode: "KP",
    },
    {
      name: "Korea, Republic of South Korea",
      dialCode: "+82",
      isoCode: "KR",
    },
    {
      name: "Kosovo",
      dialCode: "+383",
      isoCode: "XK",
    },
    {
      name: "Kuwait",
      dialCode: "+965",
      isoCode: "KW",
    },
    {
      name: "Kyrgyzstan",
      dialCode: "+996",
      isoCode: "KG",
    },
    {
      name: "Laos",
      dialCode: "+856",
      isoCode: "LA",
    },
    {
      name: "Latvia",
      dialCode: "+371",
      isoCode: "LV",
    },
    {
      name: "Lebanon",
      dialCode: "+961",
      isoCode: "LB",
    },
    {
      name: "Lesotho",
      dialCode: "+266",
      isoCode: "LS",
    },
    {
      name: "Liberia",
      dialCode: "+231",
      isoCode: "LR",
    },
    {
      name: "Libya",
      dialCode: "+218",
      isoCode: "LY",
    },
    {
      name: "Liechtenstein",
      dialCode: "+423",
      isoCode: "LI",
    },
    {
      name: "Lithuania",
      dialCode: "+370",
      isoCode: "LT",
    },
    {
      name: "Luxembourg",
      dialCode: "+352",
      isoCode: "LU",
    },
    {
      name: "Macau",
      dialCode: "+853",
      isoCode: "MO",
    },
    {
      name: "Madagascar",
      dialCode: "+261",
      isoCode: "MG",
    },
    {
      name: "Malawi",
      dialCode: "+265",
      isoCode: "MW",
    },
    {
      name: "Malaysia",
      dialCode: "+60",
      isoCode: "MY",
    },
    {
      name: "Maldives",
      dialCode: "+960",
      isoCode: "MV",
    },
    {
      name: "Mali",
      dialCode: "+223",
      isoCode: "ML",
    },
    {
      name: "Malta",
      dialCode: "+356",
      isoCode: "MT",
    },
    {
      name: "Marshall Islands",
      dialCode: "+692",
      isoCode: "MH",
    },
    {
      name: "Martinique",
      dialCode: "+596",
      isoCode: "MQ",
    },
    {
      name: "Mauritania",
      dialCode: "+222",
      isoCode: "MR",
    },
    {
      name: "Mauritius",
      dialCode: "+230",
      isoCode: "MU",
    },
    {
      name: "Mayotte",
      dialCode: "+262",
      isoCode: "YT",
    },
    {
      name: "Mexico",
      dialCode: "+52",
      isoCode: "MX",
    },
    {
      name: "Micronesia, Federated States of Micronesia",
      dialCode: "+691",
      isoCode: "FM",
    },
    {
      name: "Moldova",
      dialCode: "+373",
      isoCode: "MD",
    },
    {
      name: "Monaco",
      dialCode: "+377",
      isoCode: "MC",
    },
    {
      name: "Mongolia",
      dialCode: "+976",
      isoCode: "MN",
    },
    {
      name: "Montenegro",
      dialCode: "+382",
      isoCode: "ME",
    },
    {
      name: "Montserrat",
      dialCode: "+1664",
      isoCode: "MS",
    },
    {
      name: "Morocco",
      dialCode: "+212",
      isoCode: "MA",
    },
    {
      name: "Mozambique",
      dialCode: "+258",
      isoCode: "MZ",
    },
    {
      name: "Myanmar",
      dialCode: "+95",
      isoCode: "MM",
    },
    {
      name: "Namibia",
      dialCode: "+264",
      isoCode: "NA",
    },
    {
      name: "Nauru",
      dialCode: "+674",
      isoCode: "NR",
    },
    {
      name: "Nepal",
      dialCode: "+977",
      isoCode: "NP",
    },
    {
      name: "Netherlands",
      dialCode: "+31",
      isoCode: "NL",
    },
    {
      name: "Netherlands Antilles",
      dialCode: "+599",
      isoCode: "AN",
    },
    {
      name: "New Caledonia",
      dialCode: "+687",
      isoCode: "NC",
    },
    {
      name: "New Zealand",
      dialCode: "+64",
      isoCode: "NZ",
    },
    {
      name: "Nicaragua",
      dialCode: "+505",
      isoCode: "NI",
    },
    {
      name: "Niger",
      dialCode: "+227",
      isoCode: "NE",
    },
    {
      name: "Nigeria",
      dialCode: "+234",
      isoCode: "NG",
    },
    {
      name: "Niue",
      dialCode: "+683",
      isoCode: "NU",
    },
    {
      name: "Norfolk Island",
      dialCode: "+672",
      isoCode: "NF",
    },
    {
      name: "North Macedonia",
      dialCode: "+389",
      isoCode: "MK",
    },
    {
      name: "Northern Mariana Islands",
      dialCode: "+1670",
      isoCode: "MP",
    },
    {
      name: "Norway",
      dialCode: "+47",
      isoCode: "NO",
    },
    {
      name: "Oman",
      dialCode: "+968",
      isoCode: "OM",
    },
    {
      name: "Pakistan",
      dialCode: "+92",
      isoCode: "PK",
    },
    {
      name: "Palau",
      dialCode: "+680",
      isoCode: "PW",
    },
    {
      name: "Palestine",
      dialCode: "+970",
      isoCode: "PS",
    },
    {
      name: "Panama",
      dialCode: "+507",
      isoCode: "PA",
    },
    {
      name: "Papua New Guinea",
      dialCode: "+675",
      isoCode: "PG",
    },
    {
      name: "Paraguay",
      dialCode: "+595",
      isoCode: "PY",
    },
    {
      name: "Peru",
      dialCode: "+51",
      isoCode: "PE",
    },
    {
      name: "Philippines",
      dialCode: "+63",
      isoCode: "PH",
    },
    {
      name: "Pitcairn",
      dialCode: "+872",
      isoCode: "PN",
    },
    {
      name: "Poland",
      dialCode: "+48",
      isoCode: "PL",
    },
    {
      name: "Portugal",
      dialCode: "+351",
      isoCode: "PT",
    },
    {
      name: "Puerto Rico",
      dialCode: "+1939",
      isoCode: "PR",
    },
    {
      name: "Qatar",
      dialCode: "+974",
      isoCode: "QA",
    },
    {
      name: "Reunion",
      dialCode: "+262",
      isoCode: "RE",
    },
    {
      name: "Romania",
      dialCode: "+40",
      isoCode: "RO",
    },
    {
      name: "Russia",
      dialCode: "+7",
      isoCode: "RU",
    },
    {
      name: "Rwanda",
      dialCode: "+250",
      isoCode: "RW",
    },
    {
      name: "Saint Barthelemy",
      dialCode: "+590",
      isoCode: "BL",
    },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dialCode: "+290",
      isoCode: "SH",
    },
    {
      name: "Saint Kitts and Nevis",
      dialCode: "+1869",
      isoCode: "KN",
    },
    {
      name: "Saint Lucia",
      dialCode: "+1758",
      isoCode: "LC",
    },
    {
      name: "Saint Martin",
      dialCode: "+590",
      isoCode: "MF",
    },
    {
      name: "Saint Pierre and Miquelon",
      dialCode: "+508",
      isoCode: "PM",
    },
    {
      name: "Saint Vincent and the Grenadines",
      dialCode: "+1784",
      isoCode: "VC",
    },
    {
      name: "Samoa",
      dialCode: "+685",
      isoCode: "WS",
    },
    {
      name: "San Marino",
      dialCode: "+378",
      isoCode: "SM",
    },
    {
      name: "Sao Tome and Principe",
      dialCode: "+239",
      isoCode: "ST",
    },
    {
      name: "Saudi Arabia",
      dialCode: "+966",
      isoCode: "SA",
    },
    {
      name: "Senegal",
      dialCode: "+221",
      isoCode: "SN",
    },
    {
      name: "Serbia",
      dialCode: "+381",
      isoCode: "RS",
    },
    {
      name: "Seychelles",
      dialCode: "+248",
      isoCode: "SC",
    },
    {
      name: "Sierra Leone",
      dialCode: "+232",
      isoCode: "SL",
    },
    {
      name: "Singapore",
      dialCode: "+65",
      isoCode: "SG",
    },
    {
      name: "Sint Maarten",
      dialCode: "+1721",
      isoCode: "SX",
    },
    {
      name: "Slovakia",
      dialCode: "+421",
      isoCode: "SK",
    },
    {
      name: "Slovenia",
      dialCode: "+386",
      isoCode: "SI",
    },
    {
      name: "Solomon Islands",
      dialCode: "+677",
      isoCode: "SB",
    },
    {
      name: "Somalia",
      dialCode: "+252",
      isoCode: "SO",
    },
    {
      name: "South Africa",
      dialCode: "+27",
      isoCode: "ZA",
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      dialCode: "+500",
      isoCode: "GS",
    },
    {
      name: "South Sudan",
      dialCode: "+211",
      isoCode: "SS",
    },
    {
      name: "Spain",
      dialCode: "+34",
      isoCode: "ES",
    },
    {
      name: "Sri Lanka",
      dialCode: "+94",
      isoCode: "LK",
    },
    {
      name: "Sudan",
      dialCode: "+249",
      isoCode: "SD",
    },
    {
      name: "Suriname",
      dialCode: "+597",
      isoCode: "SR",
    },
    {
      name: "Svalbard and Jan Mayen",
      dialCode: "+47",
      isoCode: "SJ",
    },
    {
      name: "Sweden",
      dialCode: "+46",
      isoCode: "SE",
    },
    {
      name: "Switzerland",
      dialCode: "+41",
      isoCode: "CH",
    },
    {
      name: "Syrian Arab Republic",
      dialCode: "+963",
      isoCode: "SY",
    },
    {
      name: "Taiwan",
      dialCode: "+886",
      isoCode: "TW",
    },
    {
      name: "Tajikistan",
      dialCode: "+992",
      isoCode: "TJ",
    },
    {
      name: "Tanzania, United Republic of Tanzania",
      dialCode: "+255",
      isoCode: "TZ",
    },
    {
      name: "Thailand",
      dialCode: "+66",
      isoCode: "TH",
    },
    {
      name: "Timor-Leste",
      dialCode: "+670",
      isoCode: "TL",
    },
    {
      name: "Togo",
      dialCode: "+228",
      isoCode: "TG",
    },
    {
      name: "Tokelau",
      dialCode: "+690",
      isoCode: "TK",
    },
    {
      name: "Tonga",
      dialCode: "+676",
      isoCode: "TO",
    },
    {
      name: "Trinidad and Tobago",
      dialCode: "+1868",
      isoCode: "TT",
    },
    {
      name: "Tunisia",
      dialCode: "+216",
      isoCode: "TN",
    },
    {
      name: "Turkey",
      dialCode: "+90",
      isoCode: "TR",
    },
    {
      name: "Turkmenistan",
      dialCode: "+993",
      isoCode: "TM",
    },
    {
      name: "Turks and Caicos Islands",
      dialCode: "+1649",
      isoCode: "TC",
    },
    {
      name: "Tuvalu",
      dialCode: "+688",
      isoCode: "TV",
    },
    {
      name: "Uganda",
      dialCode: "+256",
      isoCode: "UG",
    },
    {
      name: "Ukraine",
      dialCode: "+380",
      isoCode: "UA",
    },
    {
      name: "United Arab Emirates",
      dialCode: "+971",
      isoCode: "AE",
    },
    {
      name: "United Kingdom",
      dialCode: "+44",
      isoCode: "GB",
    },
    {
      name: "United States",
      dialCode: "+1",
      isoCode: "US",
    },
    {
      name: "United States Minor Outlying Islands",
      dialCode: "+246",
      isoCode: "UMI",
    },
    {
      name: "Uruguay",
      dialCode: "+598",
      isoCode: "UY",
    },
    {
      name: "Uzbekistan",
      dialCode: "+998",
      isoCode: "UZ",
    },
    {
      name: "Vanuatu",
      dialCode: "+678",
      isoCode: "VU",
    },
    {
      name: "Venezuela, Bolivarian Republic of Venezuela",
      dialCode: "+58",
      isoCode: "VE",
    },
    {
      name: "Vietnam",
      dialCode: "+84",
      isoCode: "VN",
    },
    {
      name: "Virgin Islands, British",
      dialCode: "+1284",
      isoCode: "VG",
    },
    {
      name: "Virgin Islands, U.S.",
      dialCode: "+1340",
      isoCode: "VI",
    },
    {
      name: "Wallis and Futuna",
      dialCode: "+681",
      isoCode: "WF",
    },
    {
      name: "Yemen",
      dialCode: "+967",
      isoCode: "YE",
    },
    {
      name: "Zambia",
      dialCode: "+260",
      isoCode: "ZM",
    },
    {
      name: "Zimbabwe",
      dialCode: "+263",
      isoCode: "ZW",
    },
  ];
watch(
  selectedCountry,
  (v) => ((Order.value.phone = v.dialCode), phone.value.focus())
);
</script>
