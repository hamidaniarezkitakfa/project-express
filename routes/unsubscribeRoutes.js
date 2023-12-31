const express = require('express');

const router = express.Router();

const jwtValidation = require('../middlewares/checkJwt');

const stripeController = require('../controllers/unsubscribeController');



router.post('/', jwtValidation, stripeController);



module.exports = router;