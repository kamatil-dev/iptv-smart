<template>
    <section class="space-y-12 mt-32 mb-20 px-16">
        <h2 class="font-extrabold text-4xl md:text-6xl">Politique de confidentialité</h2>
        <p>Chez IPTV Smarter Pro, nous attachons une grande importance à la confidentialité de vos informations
            personnelles. Cette politique de confidentialité a pour but de vous informer sur la collecte, l'utilisation, le
            partage et la protection de vos données lorsque vous utilisez notre application IPTV Smarter Pro. Nous vous
            invitons à lire attentivement cette politique pour comprendre comment nous traitons vos informations
            personnelles.</p>
        <ol class="list-decimal space-y-6">
            <li>
                <p class="font-bold">Collecte d'informations personnelles</p>
                <p>Lorsque vous utilisez l'application IPTV Smarter Pro, nous pouvons collecter certaines informations
                    personnelles vous concernant. Cela peut inclure votre nom, votre adresse e-mail, votre adresse IP, votre
                    localisation géographique et d'autres informations nécessaires à la fourniture de nos services IPTV.
                    Nous ne collectons que les informations nécessaires à l'utilisation de l'application.</p>
            </li>
            <li>
                <p class="font-bold">Utilisation des informations collectées

                </p>
                <p>Nous utilisons les informations collectées pour vous permettre d'utiliser notre application IPTV Smarter
                    Pro de manière efficace et sécurisée. Cela comprend la personnalisation de votre expérience utilisateur,
                    la fourniture de services IPTV, la résolution des problèmes techniques, la communication avec vous
                    concernant notre application et l'envoi de mises à jour ou d'informations importantes.
                </p>
            </li>
            <li>
                <p class="font-bold">Partage des informations

                </p>
                <p>Nous ne vendons, ne louons et ne partageons pas vos informations personnelles avec des tiers, sauf dans
                    les cas prévus par la loi ou lorsque cela est nécessaire pour fournir nos services IPTV. Cela peut
                    inclure le partage d'informations avec des fournisseurs de contenu ou des partenaires de confiance
                    impliqués dans la fourniture de nos services.
                </p>
            </li>
            <li>
                <p class="font-bold">Sécurité des informations

                </p>
                <p>Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout
                    accès non autorisé, toute divulgation, toute altération ou toute destruction. Nous utilisons des
                    protocoles de sécurité et des mesures techniques pour protéger vos données, ainsi que des procédures
                    strictes de gestion des informations.
                </p>
            </li>
            <li>
                <p class="font-bold">Cookies et technologies similaires

                </p>
                <p>L'application IPTV Smarter Pro peut utiliser des cookies ou d'autres technologies similaires pour
                    améliorer votre expérience utilisateur et collecter des informations sur la manière dont vous
                    interagissez avec l'application. Ces technologies nous aident à personnaliser votre expérience et à
                    analyser l'utilisation de l'application.
                </p>
            </li>
            <li>
                <p class="font-bold">Modifications de la politique de confidentialité

                </p>
                <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
                    modification sera affichée dans l'application et la date de la dernière mise à jour sera indiquée. Nous
                    vous encourageons à consulter régulièrement la politique de confidentialité pour rester informé des
                    pratiques en vigueur.
                </p>
            </li>
        </ol>
        <div>
            <p class="font-bold">Contactez-nous</p>
            <p>Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de confidentialité
                ou
                l'utilisation de l'application IPTV Smarter Pro, veuillez nous contacter à {{ Settings.email }}.
                Nous
                ferons de notre mieux pour répondre à vos demandes dans les meilleurs délais.
            </p>
        </div>
    </section>
</template>
<script lang="ts" setup>
const Settings = useState<SettingsT>("settings");
useHead({
    title: "Politique de confidentialité"
})
</script>