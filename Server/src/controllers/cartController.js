const { addCartService, getCartByIdService, deleteCartByIdServer } = require("../services/cartService");
const { 

} = require("../services/productService");

const addCartController = async (req, res) => {
    try {   
        const response = await addCartService(req);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
const getCartByIdController = async (req, res) => {
    try {   
        const cart = await getCartByIdService(req);
        res.status(200).json({ status: "success", data: cart });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
const deleteCartByIdController = async (req, res) => {
    try {   
        const data = await deleteCartByIdServer(req);
        res.status(200).json({ status: "success", data });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = { 
    addCartController,
    getCartByIdController,
    deleteCartByIdController
};
