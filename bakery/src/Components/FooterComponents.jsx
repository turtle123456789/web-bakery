import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import React from 'react'
import { Link } from 'react-router'
import { RiVisaLine } from "react-icons/ri";
const FooterComponents = () => {
  return (
    <div className='bg-black pt-10 px-[9px] mt-[60px]'>
      <div className='container flex justify-between '>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Khám phá tiệm bánh</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Thực đơn </Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Định vị</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Ứng dụng</Link></li>
            {/* <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Allergens</Link></li> */}
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Bánh kem</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Sinh nhật</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Cá nhân hóa</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Tiệc tùng</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Truyền thống Pháp </Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Doanh nghiệp </h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Câu chuyện của chúng tôi </Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Sự bền vững </Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Sự nghiệp </Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Nhượng quyền thương mại</Link></li>
            {/* <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Modern Slavery Statement</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Gender Pay Gap report</Link></li> */}
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Khách hàng</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Thông tin liên hệ</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Tài khoản</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>FAQ</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Điều khoản</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Chính sách bảo mật </Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Chính sách Cookie</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Tham gia bản tin </h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Khám phá điều mới mẻ tại Paul Bakery</Link></li>
            <li>
              {/* <FloatingLabel variant="filled" label="Enter your address here" className='rounded-none bg-black border-white border-1 text-[#BCBCBC] px-5 py-0 focus:border-white focus:text-[#BCBCBC] peer-focus:text-[#BCBCBC] w-[220px] h-[53px] peer-placeholder-shown:w-[200px] peer-placeholder-shown:h-5 peer-placeholder-shown:pr-0 focus:peer-placeholder-shown:h-5'/>
               */}
               <input type="text" placeholder='Nhập địa chỉ email của bạn' className='text-[13px] rounded-none bg-black border-white border-1 w-[220px] h-[53px] mb-4 text-[#BCBCBC] px-5 py-0 focus:border-white focus:text-[#BCBCBC]'/>
            </li>
            <li>
              <div className='w-[220px] h-[53px]  border-2 border-[#ffe8cb]'>
                <button className='bg-[#ffe8cb] w-full h-full text-xs border-2 border-black'>GỬI</button>
              </div>
              <img src="/assest/img_footer/images-Photoroom.jpg" className="mt-4" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-16 py-8 border-t-2 border-t-[#BCBCBC] flex justify-between container flex-wrap lg:flex-nowrap'>
          <div className='flex gap-6'>
            <div> <RiVisaLine className='text-white text-[40px]' /></div>
            <div>
              <img className='w-20 h-10 bg-black'  src="/assest/img_footer/icon_masterCard.jpg" alt="" />
            </div>
            <div>
              <img src="/assest/img_footer/iconVNPay.jpg" className="w-20 h-10" alt="" />
            </div>
            <div>
                <img className='w-10' src="/assest/img_footer/iconMomo.jpg" alt="" />
            </div>  
          </div>
          <div className='flex gap-8 items-center'>
            <div className='border border-[#ffe8cb] rounded-full'>
              <div className='bg-[#ffe8cb] rounded-full w-[26.4px] h-[26.4px] flex items-center justify-center border border-black'>
                <FaFacebookF className='text-[16px] text-black' />
              </div>
            </div>
            <div className='border border-[#ffe8cb] rounded-full'>
              <div className='bg-[#ffe8cb] rounded-full w-[26.4px] h-[26.4px] flex items-center justify-center border border-black'>
                <FaInstagram className='text-[16px] text-black' />
              </div>
            </div>
            <div className='border border-[#ffe8cb] rounded-full'>
              <div className='bg-[#ffe8cb] rounded-full w-[26.4px] h-[26.4px] flex items-center justify-center border border-black'>
                <TfiYoutube className='text-[16px] text-black' />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FooterComponents