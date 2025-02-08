const express = require('express');
const router = express.Router();
const { paymentControllerMoMo, paymentControllerVNPay } = require('../controllers/paymentController');

router.post('/Momo', paymentControllerMoMo);
router.post('/VNPay', paymentControllerVNPay);

module.exports = router;
