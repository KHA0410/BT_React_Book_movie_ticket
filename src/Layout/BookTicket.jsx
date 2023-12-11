import React from 'react'
import LeftLayout from './LeftLayout'
import RightLayout from './RightLayout'
import "./style.css"

export default function BookTicket() {
  return (
    <div className='row bookingMovie backgroundRGBA'>
        <div className='col-8'><LeftLayout/></div>
        <div className='col-4'><RightLayout/></div>
    </div>
  )
}
