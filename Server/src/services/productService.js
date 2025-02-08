const Product = require("../models/Product");
const getAllProductService = async () => {
    try {
        const products = await Product.find().lean();
        return products;
    } catch (error) {
        throw new Error("Không thể lấy danh sách sản phẩm");
    }
};
const addProductService = async (req) => {
    try {
        const { name, price, description, stock, image } = req.body;

        if (!name || !price) {
            throw new Error("Tên và giá sản phẩm là bắt buộc");
        }

        const newProduct = new Product({ name, price, description, stock, image });
        await newProduct.save();

        return { message: "Thêm sản phẩm thành công" };
    } catch (error) {
        throw new Error("Không thể thêm sản phẩm: " + error.message);
    }
};
const updateProductService = async (req) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedProduct) {
            throw new Error("Không tìm thấy sản phẩm để cập nhật");
        }

        return { message: "Cập nhật sản phẩm thành công" };
    } catch (error) {
        throw new Error("Không thể cập nhật sản phẩm: " + error.message);
    }
};
const deleteProductService = async (req) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            throw new Error("Không tìm thấy sản phẩm để xóa");
        }

        return { message: "Xóa sản phẩm thành công"};
    } catch (error) {
        throw new Error("Không thể xóa sản phẩm: " + error.message);
    }
};

module.exports = {
    getAllProductService,
    addProductService,
    updateProductService,
    deleteProductService,
};
