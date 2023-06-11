const express = require('express');

const router = express.Router();

const jwtValidation = require('../middlewares/checkJwt');
const modifySubscription = require('../controllers/modifySubscribeController');

router.put('/', jwtValidation, modifySubscription);

module.exports = router;