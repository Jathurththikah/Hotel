import React from 'react'
import Gallerygrid from './Gallerygrid'

const Gallery = () => {
  return (

    <div className='bg-taupe-100 font-sans'>

      <div class="h-120 blur-s bg-[url('https://media.easy-peasy.ai/dc8b793d-8c35-46de-8abc-15981bd1467c/64ea83a2-7703-4725-898a-552302aaa572.png')] bg-cover bg-center">
        <p className='text-white text-9xl text-center pt-40 text-shadow-2xl font-extrabold'>Gallery</p>
      </div>

      < div className="flex flex-wrap gap-[30px] border border-white p-4 justify-center pt-15" >
        <Gallerygrid src='https://www.torrens.edu.au/-/media/project/laureate/apac/torrens/stories/bmihms/what-do-you-learn-in-hotel-management/hotel-management-lg.png?rev=61e6b98e22aa4c0a90713d194603a0ba'
          title='Milford Public Library in Delaware is starting a $4.9 million renovation in July 2026 to upgrade HVAC and interior spaces, says Bay to Bay News.'
          date='2025 Dec 15' />
        <Gallerygrid src='https://www.siteminder.com/wp-content/uploads/2024/05/GettyImages-1390233984.jpg'
          title='Daniel Boone Regional Library is installing "library-to-go" lockers to enhance access, notes KOMU 8.'
          date='2026 Jan 01' />
        <Gallerygrid src='https://cdn.bluent.com/images/central-point.webp'
          title=' Barnsley Libraries has been selected for the Europe Challenge 2025/26, joining an international network for community-focused projects.'
          date='2026 Mar 03' />
        <Gallerygrid src='https://img.freepik.com/free-photo/exotic-lunch-hotel-outdoor-shot-table-with-fruits-swimming-pool_197531-20911.jpg?semt=ais_hybrid&w=740&q=80'
          title=' 50% of library and information science colleges are now integrating artificial intelligence (AI).'
          date='2026 May 18' />
        <Gallerygrid src='https://www.sanskriti.edu.in/images/hotel-management-college-in-up.jpg'
          title='The inaugural Clarivate Library Innovation Awards have received strong global engagement, reports Library Technology Guides.'
          date='2026 Aug 15' />
        <Gallerygrid src='https://i.pinimg.com/564x/64/8c/6f/648c6fbc2b4da9c936d70d0468d6d880.jpg'
          title='The ALA reports that book censorship has reached its highest level in 20 years, says Books+Publishing'
          date='2026 Oct 22' />
      </div >

    </div>
  )
}

export default Gallery
