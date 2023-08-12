<template>
    <section class="space-y-12 mt-32 mb-20 px-16">
        <h2 class="font-extrabold text-4xl md:text-6xl">Politique de remboursement</h2>
        <p>Chez IPTV Smarter Pro, nous nous efforçons de fournir des services de qualité à nos utilisateurs. Cependant, nous
            comprenons que des circonstances peuvent survenir où vous pourriez avoir besoin d'annuler votre abonnement et
            demander un remboursement. Cette politique de remboursement détaille les conditions dans lesquelles nous
            acceptons
            les demandes de remboursement.</p>
        <ol class="list-decimal space-y-6">
            <li>
                <p>Demandes de remboursement 1.1 Les demandes de remboursement doivent être soumises dans un délai de 15
                    jours à
                    compter de la date d'achat de l'abonnement. 1.2 Pour demander un remboursement, veuillez nous contacter
                    à
                    <strong>{{ Settings.email }}</strong> et fournir les informations suivantes : nom
                    d'utilisateur, adresse e-mail
                    associée au compte et motif de la demande de remboursement.
                </p>
            </li>
            <li>
                <p>Éligibilité au remboursement 2.1 Les remboursements seront examinés au cas par cas, et leur approbation
                    dépendra de divers facteurs, y compris mais sans s'y limiter : </p>
                <ul class="list-disc ml-5">
                    <li>L'annulation de l'abonnement dans le délai spécifié.</li>
                    <li>Des problèmes techniques non résolus qui empêchent l'utilisation du service malgré nos efforts pour
                        les
                        résoudre.</li>
                    <li>Une insatisfaction majeure liée à la qualité du service fourni.</li>
                </ul>
            </li>
            <li>
                <p>Exceptions au remboursement 3.1 Les frais de transaction et les frais de traitement associés à l'achat de
                    l'abonnement ne sont généralement pas remboursables. 3.2 Les demandes de remboursement basées sur des
                    problèmes mineurs ou des préférences personnelles ne seront pas prises en compte.</p>
            </li>
            <li>
                <p>Processus de remboursement 4.1 Une fois votre demande de remboursement reçue, nous l'examinerons dans les
                    meilleurs délais. 4.2 Si votre demande est approuvée, le remboursement sera effectué via le même mode de
                    paiement que celui utilisé lors de l'achat initial.</p>
            </li>
            <li>
                <p>Modification de la politique de remboursement 5.1 IPTV Smarter Pro se réserve le droit de modifier cette
                    politique de remboursement à tout moment. Toute modification sera affichée sur notre site web, et la
                    date de
                    la dernière mise à jour sera indiquée.</p>
            </li>
            <li>
                <p>Contactez-nous 6.1 Si vous avez des questions, des préoccupations ou des demandes concernant notre
                    politique
                    de remboursement, veuillez nous contacter à <strong>{{ Settings.email }}</strong> Nous ferons
                    de notre mieux
                    pour
                    répondre à vos demandes dans les meilleurs délais.</p>
            </li>
        </ol>
        <p>Veuillez noter que cette politique de remboursement est sujette à nos conditions générales d'utilisation. Nous
            vous
            encourageons à les lire attentivement pour une compréhension complète de vos droits et obligations en tant
            qu'utilisateur de notre service IPTV Smarter Pro.</p>
    </section>
</template>
<script setup>
const Settings = useState("settings")

useHead({
    title: "Politique de remboursement"
})
</script>