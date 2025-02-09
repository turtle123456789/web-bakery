const express = require('express');
const { addCartController, getCartByIdController, deleteCartByIdController } = require('../controllers/cartController');
const router = express.Router();

router.post('/add', addCartController);
router.get('/get/:id', getCartByIdController);
router.delete('/delete/:id', deleteCartByIdController);

module.exports = router;
