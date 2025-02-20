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
        const errorToast = { id: Date.now(), content: "Có lỗi xảy ra khi xóa giỏ hàng", typeToast: "error" };
        setToasts((prevToasts) => [...prevToasts, errorToast]);
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
          <h1 className='text-[34px] mt-3 pt-3'>Mang hương vị Pháp về nhà bạn!</h1>
          <div className='flex justify-center mb-3'>
            <hr className='h-[2px] bg-black w-[246px]'/>
          </div>
          <p className='text-[13px]'>
            Thưởng thức những chiếc bánh kem tinh tế và tươi ngon được tạo nên từ bí quyết truyền thống chuẩn Pháp của 
            những thợ làm bánh lành nghề và nguồn nguyên liệu tinh chọn an toàn sức khỏe.
            <br />
            Tất cả bánh mì đều được làm mới mỗi ngày tại tiệm bánh của chúng tôi ở Thành phố Hồ Chí Minh, đảm bảo độ tươi ngon hoàn hảo. 
            <br />
            Hãy nuông chiều vị giác của mình với một chiếc bánh mì tươi nóng hổi cho bữa sáng hoàn hảo!
          </p>
        </div>
      </div>
      <div className=' grid grid-cols-3 my-5 py-5'>
        <div className='px-[10px]'>
          <img className='max-h-[290px]  w-full object-cover pb-2' src="/assest/banner/Bread_tab_Jan_2025.webp" alt="" />
          <p>Bánh mì</p>
        </div>
        <div className='px-[10px]'>
          <img className='max-h-[290px]  w-full object-cover pb-2' src="/assest/banner/Cake_tab_Jan_2025.webp" alt="" />
          <p>Bánh kem</p>
        </div>
        <div className='px-[10px]'>
          <img className='max-h-[290px]  w-full object-cover pb-2' src="/assest/banner/Platter_tab_Jan_2025.webp" alt="" />
          <p>Combo bánh ngọt</p>
        </div>
      </div>
      <div className='grid grid-cols-5'>
        <div className='col-span-2 mx-[10px] my-11 px-[10px] flex flex-col justify-center'>
          <h3 className='text-[16px] pb-4'>Hãy đặt những chiếc bánh tuyệt đẹp với thiết kế riêng theo yêu cầu của bạn!</h3>
          <p className='text-[13px]'>
          Từ những chiếc bánh sô cô la đậm đà, bánh trái cây sang trọng đến bánh phô mai nướng hoàn hảo, mỗi chiếc bánh đều là một tuyệt tác, sẵn sàng làm bừng sáng mọi bữa tiệc. 
          Hãy thêm chút bất ngờ và biến khoảnh khắc của bạn trở nên đáng nhớ hơn bao giờ hết!
          Không gì thể hiện lời chúc "Chúc mừng sinh nhật" hay "Chúc mừng" ý nghĩa hơn một chiếc bánh được trang trí với thông điệp riêng dành tặng người thân yêu. 
          Và điều tuyệt vời nhất? Dịch vụ cá nhân hóa của chúng tôi hoàn toàn MIỄN PHÍ!
          </p>
          <hr className='h-[2px] bg-black w-[119px] my-3'/>
          <ButtonComponent contentButton="CÁ NHÂN HÓA NGAY"/>
        </div>
        <div className='col-span-3 mx-[10px] px-[10px] my-11'>
          <img src="https://www.paul-uk.com/media/wysiwyg/MicrosoftTeams-image_12__1.png" alt="" />
        </div>
        <div className='col-span-3 mx-[10px] px-[10px] my-11'>
          <img src="	https://www.paul-uk.com/media/wysiwyg/Veganuary_2025.jpg" alt="" />
        </div>
        <div className='col-span-2 mx-[10px] px-[10px] my-11 flex flex-col justify-center'>
          <h3 className='text-[16px] pb-4'>Khám phá các loại thực phẩm lành mạnh của chúng tôi</h3>
          <p className='text-[13px]'>
            Hãy thưởng thức món Sandwich Rau củ nướng & Hummus mới của chúng tôi, với hương vị tươi mới của ớt chuông đỏ và ô liu, 
            được phục vụ trong bánh mì mè mới nướng. Đối với những ai thèm nhiều rau xanh hơn, Salad Rau củ nướng & 
            Đậu lăng của chúng tôi phục vụ một hỗn hợp thịnh soạn gồm bí ngòi, củ cải đường và cà tím, phủ sumac ấm áp. 
            Hãy thử chúng ngay hôm nay!</p>
            <hr className='h-[2px] bg-black w-[119px] my-3'/>
            <ButtonComponent contentButton="ĐẶT HÀNG NGAY" />
        </div>
        <div className='col-span-2 mx-[10px] px-[10px] my-11 flex flex-col justify-center'>
          <h3 className='text-[16px] pb-4'>Những người thợ làm bánh tài năng của chúng tôi đã đưa nghệ thuật vào nghề thủ công</h3>
          <p className='text-[13px]'>
            Còn gì tuyệt hơn mùi bánh mì tươi? Hãy đặt mua bánh mì PAUL mới nướng trực tuyến ngay hôm nay.
            Tất cả các ổ bánh mì của chúng tôi đều được các nghệ nhân làm thủ công cẩn thận mỗi ngày.</p>
          <hr className='h-[2px] bg-black w-[119px] my-3'/>
            <ButtonComponent contentButton="ĐẶT HÀNG NGAY"/>
        </div>
        <div className='col-span-3 mx-[10px] px-[10px] my-11'>
          <img src="https://www.paul-uk.com/media/wysiwyg/Focus_area_-_BREAD_MAKING_1.gif" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-4 my-6 py-6'>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150-13.webp" alt="" />
          <h3 className='text-[16px] mt-5'>Chất lượng là trái tim</h3>
          <p className='text-[13px]'>Cam kết mang đến tiêu chuẩn cao nhất trong từng chiếc bánh.</p>
        </div>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150-10.webp" alt="" />
          <h3 className='text-[16px] mt-5'>Đam mê với bánh mì</h3>
          <p className='text-[13px]'>Nướng tươi mỗi ngày, suốt bốn mùa trong năm.</p>
        </div>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150_websiteillustrations_breadbasket-14.webp" alt="" />
          <h3 className='text-[16px] mt-5'>Thế giới bánh ngọt</h3>
          <p className='text-[13px]'>Đa dạng hương vị, thỏa mãn mọi sở thích!</p>
        </div>
        <div className='px-[10px] text-center'>
          <img src="/assest/banner/150x150-09_1.webp" alt="" />
          <h3 className='text-[16px] mt-5'>Tinh hoa nước Pháp</h3>
          <p className='text-[13px]'>Hương vị Pháp đích thực ngay tại tiệm bánh của chúng tôi.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage