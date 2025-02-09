const express = require('express');
const { getAllProductController, getProductByIdController } = require('../controllers/productsController');
const router = express.Router();

router.get('', getAllProductController);
router.get('/:id', getProductByIdController);

module.exports = router;
