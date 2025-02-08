import React from 'react'
import { Link } from 'react-router'
import ButtonComponent from '../../Components/ButtonComponent'

const ContactPage = () => {
    const symbol =">"
  return (
    <div>
        <div className='flex justify-center items-center'>
            <Link className='text-[11px] text-[#c4c4c4] mr-2' to ="/home">
                Home
            </Link>
            {symbol}
            <Link className='text-[11px] ml-2'>
                Contact Us
            </Link>
        </div>
        <div className='text-center mb-12'>
            <h1 className='text-[40px] my-5'>
                Contact our team
            </h1>
            <p className='text-sm'>If you would like to leave feedback about our products or services, please fill out the form below to contact our team.</p>
        </div>
        <div className='grid grid-cols-2 mx-28 gap-8'>
            <div className='col-span-1'>
                <img src="https://www.paul-uk.com/media/wysiwyg/Contact_us.png" alt="" />
                <div className='flex mt-3 items-center'>
                    <div>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className='mx-1'>
                        <p className='text-[13px]'>Find a PAUL</p>
                        <p className='text-[10px]'>Find your closest PAUL here.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-y-4'> 
                <div className='w-1/2 px-2'>
                    <input type="text" placeholder='Last Name' className='w-full h-[50px]'  />
                </div>
                <div className='w-1/2 px-2'>
                    <input type="text" placeholder='First Name' className='w-full h-[50px]' />
                </div>
                <div className='w-full px-2'>
                    <select name="" id="" className='w-full text-gray-500 h-[50px]' >
                        <option value="" >Enquiry Reason</option>
                    </select>
                </div>
                <div className='w-full px-2'>
                <input type="text" placeholder='Email' className='w-full h-[50px]' />
                </div>
                <div className='w-full px-2'>
                <input type="text" placeholder='Phone' className='w-full h-[50px]'  />
                </div>
                <div className='w-full px-2'>
                    <textarea name="" id="" className='w-full' rows="4" placeholder='Message'></textarea>
                </div>
                <div className='px-2'>
                    <ButtonComponent contentButton="SUBMIT MESSAGE"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage