const express = require('express');
const { getAllProductController, addProductController, updateProductController, deleteProductController } = require('../controllers/productsController');
const router = express.Router();

router.get('', getAllProductController);
router.post('', addProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

module.exports = router;
