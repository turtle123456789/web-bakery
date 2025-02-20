import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/format';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../redux/slices/cart';
import { addCart } from '../../services/cartService';
const CartProductComponent = ({ id, img, nameProduct, price,setToasts }) => {
    const dispatch = useDispatch()
    const useId = useSelector(state => state.user.id)
    const addToCart = async() => {
        try {
            const cart = JSON.parse(localStorage.getItem("cartPaul")) || [];
            const existingProduct = cart.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id, img, nameProduct, price, quantity: 1 });
            }
            if(useId){
                await addCart(useId,id,1)
            }
            localStorage.setItem("cartPaul", JSON.stringify(cart));
            const newQuantity = cart.reduce((total,item)=> total+item.quantity,0) 
            dispatch(updateQuantity(newQuantity))
            const newToast = { id: Date.now(), content: "Add product success", typeToast: "success" };

            setToasts((prevToasts) => [...prevToasts, newToast]);
        } catch (error) {
            const newToast = { id: Date.now(), content: "Add product error", typeToast: "error" };
            setToasts((prevToasts) => [...prevToasts, newToast]);
        }
    };
    return (
        <div className='px-[9px] pb-[40px] min-h-[400px] group'>
            <div className='relative'>
                <div>
                    <Link to={`/productDetail/${id}`}>
                        <img loading='lazy' src={`/assest/cake/${img}`} alt={nameProduct} className='w-full' onError={(e) => { 
                            console.error(`Lỗi tải ảnh: ${e.target.src}`);
                        }} />
                    </Link>
                </div>
                <div className='absolute bg-[#ffffffd2] -bottom-[98px] left-0 right-0'>
                    <div className='py-4'>
                        <h2 className='h-[43px]'>
                            <div className='mb-4 hover:underline cursor-pointer'>
                                <Link to="/">{nameProduct}</Link>
                            </div>
                        </h2>
                        <span className='font-bold mb-4'>{formatPrice(price)}</span>
                    </div>
                    <div className='border-2 border-black transition-all duration-300 group-hover:h-[53px] group-hover:opacity-100 h-0 opacity-0'>
                        <button
                            className='bg-black border-2 border-white w-full h-full text-white text-xs font-bold'
                            onClick={()=>addToCart()}
                        >
                            THÊM VÀO GIỎ HÀNG
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductComponent;
