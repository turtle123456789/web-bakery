import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../redux/slices/cart';

const QuantityComponent = ({data,width = 132, height = 42,setIsLoading,isLoading,setQuantity}) => {
  const  [quantityProduct,setQuantityProduct] = useState(data?.quantity||1)
  const dispatch = useDispatch()
  const getCart = () => JSON.parse(localStorage.getItem("cartPaul")) || [];
  const updateCart = (updatedCart) => {
    localStorage.setItem("cartPaul", JSON.stringify(updatedCart));
  };

  const handleQuantityCart = (type) => {
    if(setQuantity){
      if (type === "increase") {
        setQuantityProduct(quantityProduct+1)
        setQuantity(quantityProduct+1)
      }
      if (type === "decrease" && quantityProduct > 1) {
        setQuantityProduct(quantityProduct-1)
        setQuantity(quantityProduct-1)
      }
    }else{
      let newQuantity = quantityProduct;
      setIsLoading(!isLoading)
      if (type === "increase") {
        newQuantity = quantityProduct + 1;
        dispatch(increase())
      }
      if (type === "decrease" && quantityProduct > 1) {
        newQuantity = quantityProduct - 1;
        dispatch(decrease())
      }
  
      setQuantityProduct(newQuantity);
  
      const updatedCart = getCart().map((item) =>
        item.id === data.id ? { ...item, quantity: newQuantity } : item
      );
  
      updateCart(updatedCart);

    }
  };
  return (
    <div className='border rounded-lg border-black flex overflow-hidden' style={{ width: `${width}px`, height: `${height}px` }}>
        <span onClick={()=>handleQuantityCart("decrease")} className='w-full flex items-center bg-[#feeed6] cursor-pointer justify-center text-md font-bold '>
            -
        </span>
        <span className='w-full flex border-x border-x-black items-center justify-center text-xs '>
            {quantityProduct}
        </span>
        <span onClick={()=>handleQuantityCart("increase")} className='w-full flex items-center bg-[#feeed6] cursor-pointer justify-center text-md font-bold '>
            +
        </span>
    </div>
  )
}

export default QuantityComponent