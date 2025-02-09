const Product = require("../models/Product");
const getAllProductService = async () => {
    try {
        const products = await Product.find().lean();
        return products;
    } catch (error) {
        throw new Error("Không thể lấy danh sách sản phẩm");
    }
};
const getProductByIdService = async (req) => {
    const {id} = req.params
    try {
        const products = await Product.findById(id).lean();
        return products;
    } catch (error) {
        throw new Error("Không thể sản phẩm");
    }
};

module.exports = {
    getAllProductService,
    getProductByIdService
};
