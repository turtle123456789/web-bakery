import React from 'react'
import { Checkbox, Label, Modal } from "flowbite-react";
import { useState } from "react";
import ButtonComponent from '../ButtonComponent';
import { Link } from 'react-router';
import {  register } from '../../services/userService';
const ModalsCreateComponent = ({openModal, setOpenModal,swapModal, setToasts}) => {
    const [userName,setUserName] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({userName:'', email: '', password: '',confirmPassword:'',checkpass:'' });
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
      setUserName('')
      setPassword('')
      setConfirmPassword('')
      setError({userName:'', email: '', password: '',confirmPassword:'',checkpass:'' })
    }
    async function handleSubmit () {
      let errors = {userName:'', email: '', password: '',confirmPassword:'',checkpass:'' };
  
      if (!email.trim()) {
        errors.email = 'Email không được để trống';
      }
      if (!password.trim()) {
        errors.password = 'Mật khẩu không được để trống';
      }
      if (!userName.trim()) {
        errors.userName = 'Tên đăng nhập không được để trống';
      }
      if (!confirmPassword.trim()) {
        errors.confirmPassword = 'Mật khẩu xác nhận không được để trống';
      }
      if (confirmPassword.trim() !== password.trim()) {
        errors.checkpass = 'Mật khẩu không trùng khớp ';
      }
      setError(errors);
  
      if (!errors.email && !errors.password  && !errors.confirmPassword && !errors.userName ) {
        try {
          const response = await register(userName, email,password)
          if(response.status ==="error"){
            const newToast = { id: Date.now(), content: response.message, typeToast: response.status };
            setToasts((prevToasts) => [...prevToasts, newToast]);
          }
          if(response.status ==="success"){
            const newToast = { id: Date.now(), content: response.message, typeToast: response.status };
            setToasts((prevToasts) => [...prevToasts, newToast]);
            onCloseModal()
          }
        } catch (error) {
            console.log('error', error)
        }
      }
    }
  return (
    <>
    
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="my-2">
            <h3 className="text-[24px]">Khách hàng mới</h3>
            <h4 className='text-[12px] '>Đăng ký để tạo tài khoản của bạn ngay hôm nay.</h4>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="userName" value="Tên đăng nhập" />
              </div>
              <input value={userName} onChange={(e)=>setUserName(e.target.value)} className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500'/>
              {error.userName && <p className="text-red-500 text-sm mt-1">{error.userName}</p>}
            </div>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <input  className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500'
                id="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
               {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            </div>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="password" value="Mât khẩu" />
              </div>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500' id="password" type="password" required />
              {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
              {error.checkpass && <p className="text-red-500 text-sm mt-1">{error.checkpass}</p>}
            </div>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="password" value="Xác nhận mật khẩu" />
              </div>
              <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500' id="password" type="password" required />
              {error.confirmPassword && <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>}
              {error.checkpass && <p className="text-red-500 text-sm mt-1">{error.checkpass}</p>}
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className='border border-gray-300'/>
                <Label htmlFor="remember">Đăng ký để nhận tin tức và ưu đãi mới nhất của chúng tôi tại đây. </Label>
              </div>
            </div>
            <div className="w-full flex justify-center" onClick={handleSubmit}>
              <ButtonComponent contentButton="TẠO TÀI KHOẢN"/>
            </div>
            <div className="flex justify-center text-sm my-3 ">
                Bạn đã có tài khoản?&nbsp;
              <Link onClick={()=>swapModal()} className=" hover:underline ">
                Đăng nhập
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalsCreateComponent