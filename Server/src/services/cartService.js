const Cart = require("../models/Cart");
const Product = require("../models/Product");
const addCartService = async (req) => {
    const { userId, productId, quantity } = req.body;
    console.log('userId, productId, quantity', userId, productId, quantity)
    const product = await Product.findById(productId);
    if (!product) return { message: "Sản phẩm không tồn tại",status:"error" };
    let cart = await Cart.findOne({ userId });
    if (!cart) {
        cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }
    }
    await cart.save();
    return { message: "Thêm vào giỏ hàng thành công" ,status:"success"};
};
const getCartByIdService = async (req) => {
    const {id} = req.params
    const userId = id
    try {
        const cart = await Cart.findOne({ userId }).populate("items.productId");
        const formattedItems = cart.items.map(item => ({
            id: item.productId._id,
            nameProduct: item.productId.name,
            img:item.productId.image,
            price: item.productId.price,
            quantity: item.quantity
        }));
        return formattedItems;
    } catch (error) {
        throw new Error("Không có sản phẩm");
    }
};
const deleteCartByIdServer = async(req)=>{
    const { id } = req.params;
    const userId=id
    const a = await Cart.findOneAndDelete({ userId });
    return { message: "Cart deleted successfully" }
}
module.exports = {
    addCartService,
    getCartByIdService,
    deleteCartByIdServer
};
