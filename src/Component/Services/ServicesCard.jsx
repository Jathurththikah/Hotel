 import React from 'react'
 
 const ServicesCard = (props) => {
   return (
     <div className="flex  p-2 bg-stone-400 rounded-xl ">
       <div>
            <div className='flex-2 w-100'>
                <img className='w-100 p-4 ' src={props.image} alt="" />
            </div>

            <div className='pl-35 '>
                <h4 className='pl-auto'> <b>{props.title}</b></h4>
                <p className='pl-7 text-gray-800'>{props.channel}</p>
                <p className='pl-10 text-gray-800'>{props.views}</p>
                <p className='pl-2 text-gray-800'>{props.facibility}</p>
            </div>
        </div>
     </div>
   )
 }
 
 export default ServicesCard
 