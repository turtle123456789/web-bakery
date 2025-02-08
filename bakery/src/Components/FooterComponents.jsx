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
            <li><h2 className='text-md text-white'>Explore PAUL</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>In-Store Menu </Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Find a PAUL</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Loyalty App</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Allergens</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Cakes</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Birthday</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Personalised</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Celebration</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Traditional French</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Company</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Our Story</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Sustainability</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Careers</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Franchise</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Modern Slavery Statement</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Gender Pay Gap report</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Customer</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Contact Information</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>My Account</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>FAQ</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Terms & Conditions</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Privacy Policy</Link></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h2 className='text-md text-white'>Join Our Newsletter</h2></li>
            <li><Link to="/" className='text-xs text-[#BCBCBC] mb-2'>Be the first to know about what's new at PAUL</Link></li>
            <li>
              {/* <FloatingLabel variant="filled" label="Enter your address here" className='rounded-none bg-black border-white border-1 text-[#BCBCBC] px-5 py-0 focus:border-white focus:text-[#BCBCBC] peer-focus:text-[#BCBCBC] w-[220px] h-[53px] peer-placeholder-shown:w-[200px] peer-placeholder-shown:h-5 peer-placeholder-shown:pr-0 focus:peer-placeholder-shown:h-5'/>
               */}
               <input type="text" placeholder='Enter your address here' className='rounded-none bg-black border-white border-1 w-[220px] h-[53px] mb-4 text-[#BCBCBC] px-5 py-0 focus:border-white focus:text-[#BCBCBC]'/>
            </li>
            <li>
              <div className='w-[220px] h-[53px]  border-2 border-[#ffe8cb]'>
                <button className='bg-[#ffe8cb] w-full h-full text-xs border-2 border-black'>SUBSCRIBE</button>
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