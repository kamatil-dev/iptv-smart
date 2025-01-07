<template>
    <section class="max-w-2xl mx-auto space-y-12 mt-32 mb-20 text-center">
        <h2 class="font-extrabold text-4xl md:text-6xl">Contactez-nous</h2>
        <p class="text-xl text-gray-800">Pour nous contacter rapidement, envoyez-nous un message sur WhatsApp. Nous sommes
            disponibles pour répondre à toutes vos questions et vous fournir l'assistance dont vous avez
            besoin.<br /><br />Téléphone : {{ Settings.whatsapp }}</p>
    </section>
</template>

<script lang="ts" setup>
const Settings = useState<SettingsT>("settings")

useHead({
    title: "Contactez-nous"
})
</script>