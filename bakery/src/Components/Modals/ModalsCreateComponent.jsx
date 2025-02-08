import React from 'react'
import { Checkbox, Label, Modal } from "flowbite-react";
import { useState } from "react";
import ButtonComponent from '../ButtonComponent';
import { Link } from 'react-router';
const ModalsCreateComponent = ({openModal, setOpenModal}) => {
    const [email, setEmail] = useState('');
    const [firstname,setFirstName] = useState ('');
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
      setFirstName('')
    }
  return (
    <>
    
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="my-4">
            <h3 className="text-[24px]">New Customers</h3>
            <h4 className='text-[12px] '>Sign up to create your account today.</h4>
            <div className='my-2 mt-8'>
              <div className="mb-1 block">
                <Label htmlFor="firstname" value="FirstName" />
              </div>
              <input className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500'
                id="firstname"
                value={firstname}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="lastname" value="LastName" />
              </div>
              <input className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500'/>
            </div>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <input className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500'
                id="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <input className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500' id="password" type="password" required />
            </div>
            <div className='my-2'>
              <div className="mb-1 block">
                <Label htmlFor="password" value="Confirm Password" />
              </div>
              <input className='w-full p-2 border border-gray-300 focus:ring-gray-500 focus: focus:border-gray-500' id="password" type="password" required />
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className='border border-gray-300'/>
                <Label htmlFor="remember">Sign up for our latest news and offers here</Label>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <ButtonComponent contentButton="CREATE AN ACCOUNT"/>
            </div>
            <div className="flex justify-center text-sm my-3 ">
                Do you have an account?&nbsp;
              <Link to="" className=" hover:underline ">
                Sign in account
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalsCreateComponent