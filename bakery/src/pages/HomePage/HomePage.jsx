import React, { useEffect, useState } from 'react'
import ButtonComponent from '../../Components/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../../redux/slices/cart'
import ToastComponent from '../../Components/ToastComponent'
import { deleteCartById } from '../../services/cartService'

const HomePage = () => {
  const [toasts, setToasts] = useState([]);
  const distPatch = useDispatch()
  useEffect(()=>{
    const Urlparam = new URLSearchParams(window.location.search)
    const resultCode = Urlparam.get("resultCode")||Urlparam.get("vnp_ResponseCode")
    const userId = Urlparam.get("vnp_OrderInfo")||Urlparam.get("orderInfo")
    if(resultCode==="0"||resultCode==="00"){
      localStorage.removeItem("cartPaul")
      distPatch(updateQuantity(0))
      try {
        const newToast = { id: Date.now(), content: "Thanh toán thành công", typeToast: "success" };
        async function dele() {
          await deleteCartById(userId)
        }
        setToasts((prevToasts) => [...prevToasts, newToast]);

        dele()
      } catch (error) {
        setToasts((prevToasts) => [...prevToasts, newToast]);
      }
    
     
    }
  },[distPatch])
  return (
    <div>
       <ToastComponent toasts={toasts} setToasts={setToasts}/>
      <div>
        <div className='mt-2'>
          <img src="/assest/banner/VDay_2025_homepage_banner.webp" alt="" />
        </div>
        <div className='text-center '>
          <h1 className='text-[34px] mt-3 pt-3'>Give gifts from the heart this Valentine's Day</h1>
          <div className='flex justify-center mb-3'>
            <hr className='h-[2px] bg-black w-[119px]'/>
          </div>
          <p className='text-[12px]'>
            Browse our collection of Valentine’s Day edible gifts from the heart, for you to share with the people you love.
            <br />
            Our Valentine's Day limited edition Raspberry Macaron Hearts are now available for pre-order for collection and delivery
            <br />
            from 3rd February, and available in stores from 10th February.
          </p>
        </div>
      </div>
      <div className=' grid grid-cols-3 my-5 py-5'>
        <div className='px-[10px]'>
          <img className='max-h-[290px]  w-full object-cover pb-2' src="/assest/banner/Bread_tab_Jan_2025.webp" alt="" />
          <p>Classic Breads</p>
        </div>
        <div className='px-[10px]'>
          <img className='max-h-[290px]  w-full object-cover pb-2' src="/assest/banner/Cake_tab_Jan_2025.webp" alt="" />
          <p>Irresistible Platters</p>
        </div>
        <div className='px-[10px]'>
          <img className='max-h-[290px]  w-full object-cover pb-2' src="/assest/banner/Platter_tab_Jan_2025.webp" alt="" />
          <p>Delightful Cakes</p>
        </div>
      </div>
      <div className='grid grid-cols-5'>
        <div className='col-span-2 mx-[10px] my-11 px-[10px] flex flex-col justify-center'>
          <h3 className='text-[16px] pb-4'>Order showstopping cakes with a personalised touch!</h3>
          <p className='text-[12px]'>
            From ultimate chocolate cakes and sumptuous fruit cakes to perfectly baked cheesecakes, 
            prepare to add the wow factor to any celebration. 
            Nothing says ‘Happy Birthday’ or ‘Congratulations’ quite like a unique message on one of our freshly baked cakes.
            Even better, our personalisation is FREE!
          </p>
          <hr className='h-[2px] bg-black w-[119px] my-3'/>
          <ButtonComponent contentButton="PERSONALISE TODAY"/>
        </div>
        <div className='col-span-3 mx-[10px] px-[10px] my-11'>
          <img src="https://www.paul-uk.com/media/wysiwyg/MicrosoftTeams-image_12__1.png" alt="" />
        </div>
        <div className='col-span-3 mx-[10px] px-[10px] my-11'>
          <img src="	https://www.paul-uk.com/media/wysiwyg/Veganuary_2025.jpg" alt="" />
        </div>
        <div className='col-span-2 mx-[10px] px-[10px] my-11 flex flex-col justify-center'>
          <h3 className='text-[16px] pb-4'>Discover our NEW range of wholesome goodness</h3>
          <p className='text-[12px]'>Enjoy our new Roasted Vegetable & Hummus Sandwich, filled with fresh flavours of red pepper and olives, served in freshly baked sesame bread. 
            For those craving even more greens, our Roasted Vegetable & Lentil Salad serves up a hearty medley of butternut squash, beetroot and aubergine, topped with warming sumac. 
            Try them today!</p>
            <hr className='h-[2px] bg-black w-[119px] my-3'/>
            <ButtonComponent contentButton="EXPLORE OUR RANGE" />
        </div>
        <div className='col-span-2 mx-[10px] px-[10px] my-11 flex flex-col justify-center'>
          <h3 className='text-[16px] pb-4'>Our talented bakers put the art in artisanal</h3>
          <p className='text-[12px]'>Is there anything better than the smell of fresh bread? Order your freshly baked PAUL bread online today or visit us in stores. 
            All our loaves are carefully handcrafted by our artisans in our bakeries daily.</p>
          <hr className='h-[2px] bg-black w-[119px] my-3'/>
            <ButtonComponent contentButton="SHOP NOW"/>
        </div>
        <div className='col-span-3 mx-[10px] px-[10px] my-11'>
          <img src="https://www.paul-uk.com/media/wysiwyg/Focus_area_-_BREAD_MAKING_1.gif" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-4 my-6 py-6'>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150-13.webp" alt="" />
          <h3 className='text-[16px] mt-5'>Quality at Heart</h3>
          <p className='text-[12px]'>Delivering the highest standard in all we do</p>
        </div>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150-10.webp" alt="" />
          <h3 className='text-[16px] mt-5'>Passion for Bread</h3>
          <p className='text-[12px]'>Freshly baked everyday all year round</p>
        </div>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150_websiteillustrations_breadbasket-14.webp" alt="" />
          <h3 className='text-[16px] mt-5'>French Tradition</h3>
          <p className='text-[12px]'>Taste of France at your local bakery</p>
        </div>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150-09_1.webp" alt="" />
          <h3 className='text-[16px] mt-5'>Family-Owned Company</h3>
          <p className='text-[12px]'>Established since 1889, read our story here</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage