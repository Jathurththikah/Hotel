import React from 'react'

const Faq = () => {
  return (
    <div>
      <div className='float-right'>
        <button className='border border-2 w-50 h-10 mt-5 mb-5 mr-10 rounded-[20px]'><a href="#">Submit a request</a></button>
        <button className='border border-2 w-50 h-10 mt-5 mb-5 mr-10 rounded-[20px]'><a href="#">Sign in</a></button>
      </div><br /><br />

      <div className='bg-taupe-300 text-center mt-10 pb-25 pt-20 shadow-xl/50'>
        <p className='font-sans text-5xl mt-5'>HOW CAN WE HELP ?</p>
        <input type="text" placeholder='Search..' className='border border-2 mt-10 pt-5 pb-5 pl-5 h-8 w-100 rounded-[30px]'/>
      </div>

      <div className='flex-wrap font-sans pt-10'>
        <button className='mb-10 ml-20 border-white border-2 w-100 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>Order Queries</button>
        <button className='mb-10 ml-20 border-white border-2 w-100 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>Product & Stock</button>
        <button className='mb-10 ml-20 border-white border-2 w-100 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>Delivery</button>
        <button className='mb-10 ml-20 border-white border-2 w-100 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>Returns & Refunds</button>
        <button className='mb-10 ml-20 border-white border-2 w-100 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>Personalised Items</button>
        <button className='mb-10 ml-20 border-white border-2 w-100 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>Payment</button>
        <button className='mb-10 ml-20 border-white border-2 w-160 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>My Account</button>
        <button className='mb-10 ml-20 border-white border-2 w-160 h-13 rounded-[10px] bg-taupe-200 shadow-xl/30'>Collaboration & Wholesale Requests</button>
      </div>
    </div>
  )
}

export default Faq
