import React, { useState } from 'react';
import { Checkbox, Label, Modal } from "flowbite-react";
import ButtonComponent from '../ButtonComponent';
import { Link } from 'react-router';
import { login } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/user';

const ModalsLoginComponent = ({ openModal, setOpenModal, swapModal,setToasts }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const dispatch = useDispatch()
  function onCloseModal() {
    setEmail('');
    setPassword('');
    setError({ email: '', password: '' });
    setOpenModal(false);
  }

  async function handleSubmit() {
    let errors = { email: '', password: '' };

    if (!email.trim()) {
      errors.email = 'Email cannot be empty';
    }
    if (!password.trim()) {
      errors.password = 'Password cannot be empty';
    }

    setError(errors);

    if (!errors.email && !errors.password) {
      try {
        const response = await login(email,password)
        if(response.status ==="error"){
          const newToast = { id: Date.now(), content: response.message, typeToast: response.status };
          setToasts((prevToasts) => [...prevToasts, newToast]);
        }
        if(response.status ==="success"){
          const newToast = { id: Date.now(), content: response.message, typeToast: response.status };
          setToasts((prevToasts) => [...prevToasts, newToast]);
          localStorage.setItem("token",JSON.stringify(response.token))
          localStorage.setItem("user",JSON.stringify(response.user))
          dispatch(updateUser({userName: response.user.username,token:response.token}))
          onCloseModal()
          window.location.href="/"
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  return (
    <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="my-4">
          <h3 className="text-[24px]">Login</h3>
          <h4 className='text-[12px]'>
            Please login to receive many incentives.
          </h4>
          <div className='my-2 mt-4'>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <input 
              className={`w-full p-2 border ${error.email ? 'border-red-500' : 'border-gray-300'} focus:ring-gray-500 focus:border-gray-500`}
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>
          <div className='my-2'>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <input
              className={`w-full p-2 border ${error.password ? 'border-red-500' : 'border-gray-300'} focus:ring-gray-500 focus:border-gray-500`}
              placeholder='password'
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>
          <div className="flex justify-between my-2">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link to="" className="text-sm hover:underline">
              Lost Password?
            </Link>
          </div>
          <div className="w-full flex justify-center my-2" onClick={handleSubmit}>
            <ButtonComponent contentButton="SIGN IN"  />
          </div>
          <div className="flex justify-center text-sm my-3">
            Don't you have an account?&nbsp;
            <Link to="" onClick={() => swapModal()} className="hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalsLoginComponent;
