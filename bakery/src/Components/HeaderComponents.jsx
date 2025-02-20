import React, { useEffect, useState } from 'react'
import {  Dropdown, Navbar } from "flowbite-react";
import { Link } from 'react-router';
import ModalsLoginComponent from './Modals/ModalsLoginComponent';
import ModalsCreateComponent from './Modals/ModalsCreateComponent';
import { useSelector } from 'react-redux'
import ToastComponent from './ToastComponent';


const HeaderComponents = () => {
  const [isCroll,setIsCroll] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)
  const [isCreate, setIsCreate] = useState(false)
  const [toasts, setToasts] = useState([]);
  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector(state => state.user.userName)
  const swapModal = () =>{
    setIsCreate(isSignIn)
    setIsSignIn(isCreate)
  }
  const checkScroll = () => {
    if(window.scrollY >= 40){
      setIsCroll(true)
    }else{
      setIsCroll(false)
    }
  }
  const handleLogout = ()=>{
    localStorage.removeItem("cartPaul")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href="/"
  }
  useEffect(()=>{
    requestAnimationFrame(() => {
      window.scrollTo(0,0)
    }) 
    window.addEventListener("scroll", checkScroll)
    return () => {
      window.removeEventListener("scroll",checkScroll)
    }
  }, [])
  return (
    <div>
      <ToastComponent toasts={toasts} setToasts={setToasts}/>
      <ModalsLoginComponent openModal={isSignIn} setOpenModal={setIsSignIn} swapModal={swapModal} toasts={toasts} setToasts={setToasts}/>
      <ModalsCreateComponent openModal={isCreate} setOpenModal={setIsCreate} swapModal={swapModal} toasts={toasts} setToasts={setToasts}/>
      <div className='bg-black'>
        <div className='container flex justify-between py-3'>
          <div className='flex items-center gap-8'>
            <Link className='text-white flex items-center gap-2 text-xs'>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
              </svg>
              Đội ngũ Paul Bakery
            </Link>
            <Link className='text-white flex items-center gap-2 text-xs'>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
              Tiệm bánh Paul Bakery 
            </Link>
            <Link className='text-white flex items-center gap-2 text-xs'>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Định vị 
            </Link>
          </div>
          <div className='flex items-center gap-8'>
            <Link to="/contact" className='text-white flex items-center gap-2 text-xs'>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Liên hệ chúng tôi 
            </Link>
            <Link className='text-white flex items-center gap-2 text-xs'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <Dropdown inline renderTrigger={() => <span>{user?user:"Tài khoản"}</span>} className='mt-1 -ml-8 rounded-none'>
              {user ? (
                <>
                  <Dropdown.Item onClick={()=>{setIsSignIn(true)}}>Thông tin</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{handleLogout()}}>Đăng xuất </Dropdown.Item>
                </>
              ):
              <>
                <Dropdown.Item onClick={()=>{setIsSignIn(true)}}>Đăng nhập </Dropdown.Item>
                <Dropdown.Item onClick={()=>{setIsCreate(true)}}>Tạo tài khoản</Dropdown.Item>
              </>}
              </Dropdown>
            </Link>

          </div>
        </div>
      </div>
      <div className={` ${isCroll?"fixed  left-0 right-0 z-10 shadow-lg top-0 ":"top-[40px]"} ` }>
        <Navbar fluid className=' container py-[21px] px-[9px]'>
          <Navbar.Brand  as={Link} to="/">
            {/* <img width={133} height={48} loading='lazy' src="https://www.paul-uk.com/media/logo/stores/1/logo.png" alt="Flowbite React Logo" /> */}
            <img width={200}  loading='lazy' src="/assest/logo_bakery.png" alt="Flowbite React Logo" />
          </Navbar.Brand>
          <div className="flex md:order-2">
            <div className='relative w-[170px]'>
              <span className='absolute top-2 left-3'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </span>
              <input  placeholder='Tìm kiếm sản phẩm' className="w-full text-xs h-[40px] rounded-full border-black	 border-2 pl-10 outline-none focus:outline-none focus:ring-0  focus:border-black" type="text" />
            </div>
            <Link to="/cart" className='relative ml-2' >
              <div className='flex items-center justify-center w-full h-full'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <span className='text-[9px] absolute top-[20px] left-[8px] w-[15px] h-[15px] text-center'>{quantity}</span>
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link as={Link} to="/product/Cakes" className='font-bold text-xs text-[14px]' >
              Bánh kem
            </Navbar.Link>
            <Navbar.Link as={Link} to="/product/Platters" className='font-bold text-xs text-[14px]' >Combo</Navbar.Link>
            <Navbar.Link as={Link} to="/product/Pâtisserie" className='font-bold text-xs text-[14px]' >Bánh ngọt</Navbar.Link>
            <Navbar.Link as={Link} to="/product/Tarts" className='font-bold text-xs text-[14px]' >Bánh Tarts</Navbar.Link>
            <Navbar.Link as={Link} to="/product/Bread" className='font-bold text-xs text-[14px]' >Bánh mì</Navbar.Link>
            <Navbar.Link as={Link} to="/product/Macarons" className='font-bold text-xs text-[14px]' >Bánh Macarons</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default HeaderComponents