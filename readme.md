# npm init
# npm install
# npm run dev

# Le travail fait 


-Ajout de la route de desabonnement qui se trouve dans routes/unsubscribeRoutes.js
-Utilisation de l'API strip pour le desabonnement se trouve dans controllers/unsubscribeRoutes.js
-Vérification avec JWT ce fais au niveau du middleware le code ce trouve dans middlewares/checkJwt.js

Pour tester la route faut d'abord avoir un abonnement criée dans stripe et sur post man la requette qui nous permet de tester est la suivante : POST http://localhost:4000/ et dans le body on donne subscriptionId que on recupere de l'abbonement criée dans stripe.

-La route de la modification du prix de l'abbonement se trouve dans routes/modifySubscriptionRoutes.js
-le controlleure se trouve dans controlleure/modifySubscriptionController.js
-J'ai rajouter une vérification JWT qui ce fais au niveau du middleware le code ce trouve dans middlewares/checkJwt.js

Pour tester la route faut recuperer id du new prix puis dans post man on donne la requette suivante : PUT http://localhost:4000/modifySubscription/ et dans le body on donne deux proprietes subscriptionId et priceId


