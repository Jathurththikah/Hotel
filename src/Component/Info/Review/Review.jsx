import React from 'react'
import Reviewgrid from './Reviewgrid'

const Review = () => {
  return (
    <div className="pt-3 pb-5 blur-s bg-[url('https://media.easy-peasy.ai/dc8b793d-8c35-46de-8abc-15981bd1467c/64ea83a2-7703-4725-898a-552302aaa572.png')]  bg-center">

      <div className='mt-10 ml-28 pb-1 pt-20'>
        <p className='font-sans text-white font-bold text-5xl'>WHAT DOES OUR USER SAYS..</p>
      </div>

      < div className="flex flex-wrap gap-[30px]  p-4 justify-center pt-15" >
        <Reviewgrid
          src='https://media.vanityfair.com/photos/686e7c6a401ae79f342dcefe/4:3/w_4216,h_3162,c_limit/GettyImages-1693596089.jpg'
          name='Emma'
          position='Designer'
          about='The room was felt outdated compared to the photos Test-English.The walls were thin
                 and the staff seemed overwhelmed during busy hours Test-English.' />
        <Reviewgrid
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/960px-Tom_Holland_by_Gage_Skidmore.jpg'
          name='Tom'
          position='Secretary'
          about='Fantastic stay! Will definitely return. Test-English Great value for money in the heart of the city.Hidden gem,5-star service all around.' />
        <Reviewgrid
          src='https://hips.hearstapps.com/hmg-prod/images/lizzie-2051-644ad1d1e6f60.jpg?crop=1.00xw:0.667xh;0,0.0783xh&resize=640:*'
          name='Olzen'
          position='AO'
          about='Disappointed that the pool/spa was closed for maintenance during our visit.
                 The breakfast option was limited, and the food was cold Test-English.' />
      </div >
    </div>
  )
}

export default Review
