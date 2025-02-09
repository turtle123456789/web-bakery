import React, { useState } from 'react'
import ButtonComponent from '../../Components/ButtonComponent'
import { useLocation, useNavigate } from 'react-router'
import { paymentWithMomo, paymentWithVnPay } from '../../services/paymentService'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../../redux/slices/cart'
import { deleteCartById } from '../../services/cartService'
const CheckoutPage = () => {
  const [choiceMethod, setChoiceMethod] = useState("")
  const [choiceMethod1, setChoiceMethod1] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const useId = useSelector(state => state.user.id)
  const payment = async(e)=>{
    e.preventDefault()
    if(choiceMethod==="momo"){
      try {
        const result = await paymentWithMomo(location.state.prices,"payWithATM",useId);

        if (result.status === "success") {
          window.location.href = result.link;
        } else {
          console.log(result.message);
        }
      } catch (e) {
        console.error("Lỗi thanh toán:", e);
      }
    }else if(choiceMethod==="zalopay"){

    }else if(choiceMethod==="vnpay"){
      try{
        const order = {
          user: "xzxcxzczxcxzcxc",
          total: location.state.prices,
          address: "sdasd",
          userId:useId,
          status: 1,
        };
        const response = await paymentWithVnPay(order)
        if(response.status==="success"){
          window.location.href = response.link;
        }else{
          console.log(response.message)
        }
      }catch(e){
        console.log('error', e)
      }
    }else if(choiceMethod==="qrCode"){
      if(choiceMethod1!=="qrMomo" & choiceMethod1!=="qrVnpay" & choiceMethod1!=="qrPayment"){
        alert("Vui lòng chọn loại qr muốn thanh toán")
        return 0
      }
      if(choiceMethod1==="qrMomo"){
        try {
          const result = await paymentWithMomo(location.state.prices,"captureWallet",useId);
  
          if (result.status === "success") {
            window.location.href = result.link;
          } else {
            console.log(result.message);
          }
        } catch (e) {
          console.error("Lỗi thanh toán:", e);
        }

      }else if(choiceMethod1==="qrPayment"){
        
      }
    }else if(choiceMethod==="cod"){
      alert("Đặt hàng thành công")
      async function dele() {
        await deleteCartById(useId)
      }
      dele()
      localStorage.removeItem("cartPaul")
      dispatch(updateQuantity(0))
      navigate("/")
    }



  }
  return (
    <div className='grid grid-cols-3 gap-x-6 mt-5'>
        <div className='col-span-2 pr-8'>
          <h1 className='text-[20px] px-2 mb-5'>Shipping Information</h1>
          <div className='flex flex-wrap gap-y-4'> 
            
            <div className='w-1/2 px-2'>
              <input type="text" placeholder='Enter FullName' className='w-full h-[50px]'  />
            </div>
            <div className='w-1/2 px-2'>
              <input type="text" placeholder='Enter Phone number' className='w-full h-[50px]' />
            </div>
            <div className='w-full px-2'>
              <input type="text" placeholder='Enter Email' className='w-full h-[50px]' />
            </div>
            <div className='w-full px-2'>
              <input type="text" placeholder='Enter Address' className='w-full h-[50px]'  />
            </div>
            <div className='w-1/3 px-2'>
              <select name="" id="" className='w-full text-gray-500 h-[50px]' >
                <option value="" >Province/City</option>
                <option value="">TP. Ho Chi Minh</option>
                <option value="">Ha Noi</option>
                <option value="">Binh Dinh</option>
                <option value="">Quang Ngai</option>
              </select>
            </div>
            <div className='w-1/3 px-2 '>
              <select name="" id="" className='w-full text-gray-500 h-[50px]' >
                <option value="">District</option>
                <option value="">Quan 1</option>
                <option value="">Quan 2</option>
                <option value="">Quan 12</option>
              </select>
            </div>
            <div className='w-1/3 px-2'>
              <select name="" id="" className='w-full text-gray-500 h-[50px]' >
                <option value="">Ward/Commune</option>
                <option value="">Linh Trung</option>
                <option value="">Linh Chieu</option>
                <option value="">Linh Xuan</option>
              </select>
            </div>
            <div className='w-full px-2'>
              <input type="text" placeholder='Notes' className='w-full h-[50px]' />
            </div>
          </div>
            
        </div>
        <div className='col-span-1'>
        <h1 className='text-[20px] px-2 mb-5'>Payment Method</h1>
          <div onClick={() => setChoiceMethod("cod")} className={`flex items-center border border-black h-[60px] rounded-md p-3 mb-2 gap-x-5 hover:border-blue-500 hover:border-2 cursor-pointer transition-all duration-300 ${choiceMethod==="cod"?"border-blue-500 border-2":"border-black"}`}>
            <div>
              <input type="radio" name="payment" checked={choiceMethod === "cod"} onChange={(e)=>{setChoiceMethod(e.target.value)}} value={"cod"} />
            </div>
            <div className='w-[40px]'>
              <img src="/assest/icon-payment/COD.svg" alt="COD" />
            </div>
            <div className='text-[12px]'>
              <p>Cash on Delivery (COD)</p>
              <p>Pay upon delivery</p>
            </div>
          </div>
          <div onClick={() => setChoiceMethod("vnpay")} className={`flex items-center border border-black h-[60px] rounded-md p-3 mb-2 gap-x-5 hover:border-blue-500 hover:border-2 cursor-pointer transition-all duration-300 ${choiceMethod==="vnpay"?"border-blue-500 border-2":"border-black"}`}>
            <div>
              <input type="radio" name="payment" checked={choiceMethod === "vnpay"} onChange={(e)=>{setChoiceMethod(e.target.value)}} value={"vnpay"} />
            </div>
            <div className='w-[40px]'>
              <img src="/assest/icon-payment/VNPay-payment.jpg" alt="VNPay" />
            </div>
            <div className='text-[12px]'>
              <p>VNPay E-Wallet/VNPAY QR</p>
            </div>
          </div>
          <div onClick={() => setChoiceMethod("momo")} className={`flex items-center border border-black h-[60px] rounded-md p-3 mb-2 gap-x-5 hover:border-blue-500 hover:border-2 cursor-pointer transition-all duration-300 ${choiceMethod==="momo"?"border-blue-500 border-2":"border-black"}`}>
            <div>
              <input type="radio" name="payment" checked={choiceMethod === "momo"} onChange={(e)=>{setChoiceMethod(e.target.value)}} value={"momo"} />
            </div>
            <div className='w-[40px]'>
              <img src="/assest/icon-payment/Momo-payment.jpg" alt="Momo" />
            </div>
            <div className='text-[12px]'>
              <p>Momo Payment</p>
            </div>
          </div>
          <div onClick={() => setChoiceMethod("zalopay")} className={`flex items-center border border-black h-[60px] rounded-md p-3 mb-2 gap-x-5 hover:border-blue-500 hover:border-2 cursor-pointer transition-all duration-300 ${choiceMethod==="zalopay"?"border-blue-500 border-2":"border-black"}`}>
            <div>
              <input type="radio" name="payment" checked={choiceMethod === "zalopay"} onChange={(e)=>{setChoiceMethod(e.target.value)}} value={"zalopay"} />
            </div>
            <div className='w-[40px]'>
              <img src="/assest/icon-payment/zalopay.svg" alt="ZaloPay" />
            </div>
            <div className='text-[12px]'>
              <p>ZaloPay E-Wallet</p>
              <p>ATM Card/Credit Card</p>
            </div>
          </div>
          <div onClick={() => setChoiceMethod("qrCode")} className={`overflow-hidden ${choiceMethod==="qrCode"?"h-[106px]":"h-[60px] "}  transition-all duration-300` }>
            <div className={`flex items-center gap-x-5 border p-3 h-[60px] ${choiceMethod==="qrCode"?"border-blue-500 border-2":"border-black" } transition-all duration-300 hover:border-blue-500 hover:border-2 cursor-pointer rounded-md `}>
              <div>
                <input type="radio" name="payment" checked={choiceMethod === "qrCode"} onChange={(e)=>{setChoiceMethod(e.target.value)}} value={"qrCode"} />
              </div>
              <div className='w-[40px]'>
                <img src="/assest/icon-payment/QR-code.jpg" alt="QR Code" />
              </div>
              <div className='text-[12px]'>
                <p>Interbank Transfer via QR Code</p>
                <p>Transfer via E-Wallet (Momo/ZaloPay)</p>
              </div>
            </div>
            <div className='flex justify-around mt-1 gap-2 border border-gray-500 '>
              <div className=' p-2 rounded-md'>
                <input type="radio" name='paymentQR' onChange={(e)=>{setChoiceMethod1(e.target.value)}} value={"qrMomo"}/>
                <label htmlFor="" className='text-[10px] px-2'>MoMo</label>
              </div>
              <div className=' p-2 rounded-md'>
                <input type="radio" name='paymentQR' onChange={(e)=>{setChoiceMethod1(e.target.value)}} value={"qrPayment"}  />
                <label htmlFor="" className='text-[10px] px-2'>ZaloPay</label>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-6' onClick={(e)=>{payment(e)}}>
            <ButtonComponent contentButton="Payment"/>
          </div>
        </div>
    </div>
  )
}

export default CheckoutPage