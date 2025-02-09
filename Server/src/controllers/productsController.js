const { 
    getAllProductService, 
    getProductByIdService
} = require("../services/productService");

const getAllProductController = async (req, res) => {
    try {   
        const products = await getAllProductService();
        res.status(200).json({ status: "success", data: products });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
const getProductByIdController = async (req, res) => {
    try {   
        const products = await getProductByIdService(req);
        res.status(200).json({ status: "success", data: products });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
module.exports = { 
    getAllProductController,
    getProductByIdController
};
