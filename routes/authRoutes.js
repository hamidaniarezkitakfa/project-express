const express = require('express')
const router = express.Router();
const Validator = require('../utils/validator');

const validateRegister = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

router.post('/register', validateRegister(Validator), authController)

module.exports = router;