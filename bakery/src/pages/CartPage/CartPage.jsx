import React, { useEffect, useState } from 'react'
import { IoIosLock } from "react-icons/io";
import QuantityComponent from '../../Components/QuantityComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import CartProductComponent from '../../Components/CartProductComponent/CartProductComponent';
import { useNavigate } from 'react-router';
import { formatPrice } from '../../utils/format';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../redux/slices/cart';
const CartPage = () => {
  const [cart,setCart] = useState([])
  const dispatch = useDispatch()
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()
  const getCart = ()=>{
    const carts = JSON.parse(localStorage.getItem("cartPaul")) || [];
    setCart(carts)
  }
  const hanleRemove= (id)=>{
    const updateCart = cart.filter((data)=>data.id!==id)
    const quantity = updateCart.reduce((total,item)=> total+item.quantity,0) 
    dispatch(updateQuantity(quantity))
    localStorage.setItem("cartPaul", JSON.stringify(updateCart));
    getCart()
  }
  const getTotalPrice = () =>{
    return cart.reduce((total,item)=> total+item.price*item.quantity,0)
  }

  useEffect(()=>{
    getCart()
  },[isLoading])
  return (
    <div>
      <div className='grid grid-cols-3 my-7'>
        <div className='col-span-2 mx-2'>
          <h1 className='text-[22px]'>Giỏ hàng của bạn  ({cart.length} món)</h1>
          <p className='flex items-start text-[12px] my-1'><IoIosLock className='text-[15px]'/> Đơn hàng của bạn sẽ được xử lý trong một môi trường an toàn. </p>
          <div className='mt-7'>
            <div className='text-[8px] grid grid-cols-6 px-1 '>
              <span className='col-span-3'>TÊN SẢN PHẨM </span>
              <span className='col-span-1 text-center'>SỐ LƯỢNG </span>
              <span className='col-span-1 text-center'>ĐƠN GIÁ </span>
              <span className='col-span-1 text-center'>TỔNG CỘNG</span>
            </div>
            <div className='mt-3 border border-gray-300 shadow-md border-b-0 '>
              {cart.length>0 && cart.map((data,index)=>{
                return(
                <div key={`cart-${index}`} className='grid grid-cols-6 text-[10px] py-4 px-1 border-0 border-b-[1px]  border-gray-300'>
                  <div className='col-span-1 px-3'>
                    <img src={`/assest/cake/${data.img}`} alt="" />
                  </div>
                  <div className='col-span-2 px-3'>
                    <h3 className='text-[13px]'>{data.nameProduct}</h3>
                    <p className='text-[9px]'>Cỡ: 4 miếng</p>
                  </div>
                  <div className='col-span-1 justify-items-center px-3'>
                    <QuantityComponent isLoading={isLoading} setIsLoading={setIsLoading} data={data} width={90} height={30}/>
                    <button className='mt-2 underline' onClick={()=>hanleRemove(data.id)}>Xóa sản phẩm </button>
                  </div>
                  <div className='col-span-1 px-3 text-center'>
                    <p>{formatPrice(data.price)}</p>
                  </div>
                  <div className='col-span-1 text-center px-3'>
                    <p>{formatPrice(data.price*data.quantity)}</p>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='col-span-1 mx-2'>
          <div className='flex flex-col justify-center items-center border border-gray-300 shadow-md px-5 py-7 '>
            <h1 className='text-[20px]'>Mã giảm giá hoặc phiếu quà tặng </h1>
            <input type="text" placeholder='Nhập mã giảm giá hoặc phiếu quà tặng' className='w-[271px] p-3 my-3 text-[12px]'  />
            <ButtonComponent contentButton="ÁP DỤNG"/>
          </div>
          <div className='text-center border border-gray-300 shadow-md px-5 py-7 my-3'>
            <h1 className='text-[20px]'>Tóm tắt đơn hàng</h1>
            <div className='text-[13px]'>
              <div className='flex justify-between my-3'>
                <span>Tổng tiền</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <div className='flex justify-between'>
                <span>Phí vận chuyển</span>
                <span>Chưa tính toán</span>
              </div>
              <div className='flex justify-between my-3'>
                <span>Tổng đơn hàng</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <div className='flex justify-center' onClick={()=>{navigate("/checkout",{state:{prices:getTotalPrice()}})}}>
                <ButtonComponent contentButton="THANH TOÁN"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <h1 className='text-[26px] text-center my-10'>Có thể bạn cũng thích</h1>
        <div className='grid grid-cols-4 gap-1'>
          <div>
            <CartProductComponent img="cake1.webp" nameProduct="Bánh Macaron Fraisier Quả Mọng" price={54000} />
          </div>
          <div>
            <CartProductComponent img="cake2.webp" nameProduct="Bánh Charlotte Fraise" price={52000}/>
          </div>
          <div>
            <CartProductComponent img="cake3.webp" nameProduct="Bánh Mousse nho đen" price={42000}/>
          </div>
          <div>
            <CartProductComponent img="cake4.webp" nameProduct="Bánh Pistachio" price={64000}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage