import React from 'react'


const Home = () => {
  return (
    <div className="min-h-screen">
 
      <div className=" flex flex-col justify-center items-center text-white text-center px-4 h-screen w-full bg-cover bg-center bg-no-repeat   "
      style={{backgroundImage:"url(https://d3gpg9xwvhoccm.cloudfront.net/2019/01/Cinnamon-Grand-1.jpg)"}} >
        <h1 className="text-8xl font-bold mb-4 text-shadow-9xs">Welcome to Hotel Paradise</h1>
        <p className="text-3xl mb-6">Experience comfort, luxury, and the best service</p>
        <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">
          Book Now
        </button>
      </div>

      
       

      
     

    </div>
  )
}

export default Home