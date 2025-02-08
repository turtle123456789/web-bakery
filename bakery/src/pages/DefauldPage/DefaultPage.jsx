import React from 'react'
import FooterComponents from '../../Components/FooterComponents'
import HeaderComponents from '../../Components/HeaderComponents'
import { Outlet } from 'react-router'


const DefaultPage = () => {
  return (
    <div>
      <HeaderComponents/>
      <div className='container'>
        <Outlet/>
      </div>
      <FooterComponents/>
    </div>
  )
}

export default DefaultPage