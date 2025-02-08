import React from 'react'

const ButtonComponent = (props) => {
    const {contentButton} = props
  return (
      <div className='w-[271px] border-2 border-black h-[53px]'>
        <button className='bg-black text-white text-xs h-full border-2 border-white w-full'>{contentButton}</button>
      </div>
  )
}

export default ButtonComponent