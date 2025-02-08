const { 
    getAllProductService, 
    addProductService, 
    updateProductService, 
    deleteProductService 
} = require("../services/productService");

const getAllProductController = async (req, res) => {
    try {   
        const products = await getAllProductService();
        res.status(200).json({ status: "success", data: products });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
const addProductController = async (req, res) => {
    try {   
        const result = await addProductService(req);
        res.status(201).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};
const updateProductController = async (req, res) => {
    try {   
        const result = await updateProductService(req);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};
const deleteProductController = async (req, res) => {
    try {   
        const result = await deleteProductService(req);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

module.exports = { 
    getAllProductController,
    addProductController,
    updateProductController,
    deleteProductController
};
