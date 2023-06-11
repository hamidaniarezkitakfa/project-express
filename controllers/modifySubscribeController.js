require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_PC);


const modifySubscription = async (req, res) => {
    try {
        const { subscriptionId, priceId } = req.body;
        // Récupérer les informations de l'abonnement actuel
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);

        // Récupérer les informations du nouveau prix
        const newPriceObjct = await stripe.prices.retrieve(priceId);

         // Mettre à jour l'abonnement avec le nouveau prix
        const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
            items: [{
                id: subscription.items.data[0].id,
                price: newPriceObjct.id,
            }],

        });
        console.log(updatedSubscription);
        return res.status(200).json({
            error: false,
            message: ['Abonnement modifié avec succès!']
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: true,
            message: ["Erreur lors de la modification de l'abonnement"]
        })
    }

};

module.exports = modifySubscription
