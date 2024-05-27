import React from 'react'
import { AppImages } from '../assets/constants'

function Logo() {
  return (
    <>
      <div className='logo'>
        <img src={AppImages.appico} alt="appicon" className='logo_img' />
        <p>Audify</p>
      </div>
    </>
  )
}

export default Logo
