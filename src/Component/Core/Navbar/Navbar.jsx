import { BankOutlined, EditOutlined, ProductOutlined, TruckOutlined } from '@ant-design/icons'
import React from 'react'


const Navbar = () => {
  return (
    <div>
      <div className='w-full bg-stone-700 text-white h-20 flex items-center justify-between px-8'>

        
        <div className='text-3xl'>
         <h1>  <BankOutlined /> Hotel Management</h1>
        </div>

        
        <ul className='flex gap-10'>
          <li><a href="" className="no-underline hover:underline"> <BankOutlined />Home</a></li>
         <li><a href="#" className="no-underline hover:underline">  <EditOutlined />Booking</a></li>
         <li><a href="#" className="no-underline hover:underline">  <TruckOutlined />Services</a></li>
          <li><a href="#" className="no-underline hover:underline"> <ProductOutlined />Info</a></li>
        </ul>

      </div>
    </div>
    
  )
}

export default Navbar