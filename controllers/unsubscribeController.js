require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_PC);


const cancelSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.body;

    // Mettre à jour l'abonnement pour l'annuler à la fin de la période en cours
    const subscriptionCanceled = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
    console.log(subscriptionCanceled);
    return res.status(200).json({
      error: false,
      message: ["vous avez désabonner avec succès."]
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      message: ["Erreur dans le désabonnement."]
    })
  }

};

module.exports = cancelSubscription




