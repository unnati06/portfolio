import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className="my-10 text-center text 4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className='my-4'>You can mail me here :</p>
        <p className="my-4">{CONTACT.address}</p>
      </div>
    </div>
  )
}

export default Contact