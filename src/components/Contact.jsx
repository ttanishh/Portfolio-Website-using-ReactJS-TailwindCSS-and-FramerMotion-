import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 mt-56'>
        <h2 className='my-20 text-center text-4xl'>Get in Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='#'>{CONTACT.email}</a>
          
        </div>
      
    </div>  
  )
}

export default Contact
