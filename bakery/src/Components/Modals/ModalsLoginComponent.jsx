import React from 'react'
import { Checkbox, Label, Modal } from "flowbite-react";
import { useState } from "react";
import ButtonComponent from '../ButtonComponent';
import { Link } from 'react-router';
const ModalsLoginComponent = ({openModal, setOpenModal}) => {
    const [email, setEmail] = useState('');
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }
  return (
    <>
    
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="my-4">
            <h3 className="text-[24px]">Registered Customers</h3>
            <h4 className='text-[12px] '>Please register your interest by creating a new account. Our corporate service is coming soon.</h4>
            <div className='my-2 mt-8'>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <input className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 focus-visible:border-gray-500 focus-visible:ring-gray-500 '
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className='my-2'>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <input className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-500' placeholder='password' id="password" type="password" required />
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Link to="" className="text-sm  hover:underline ">
                Lost Password?
              </Link>
            </div>
            <div className="w-full flex justify-center my-2">
              <ButtonComponent contentButton="SIGN IN"/>
            </div>
            <div className="flex justify-center text-sm my-3 ">
                Don't you have an account?&nbsp;
              <Link to="" className=" hover:underline ">
                Create account
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalsLoginComponent