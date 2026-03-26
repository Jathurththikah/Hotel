import React from 'react'
import ServicesCard from './ServicesCard'

const ServicesGrid = () => {
  return (
    <div className='flex flex-wrap gap-5 bg-stone-800 p-3' >
      <ServicesCard 
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthZJjCf9OJA96H_4xbhFszCyEJV-cKDGBPg&s'
        title="Presidential Studio"
        channel="Toiletries"
        views="Wifi"
        facibility="Air conditioned"
      />

      <ServicesCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_mMhmNCsPfKETXZb775jIjQf-w2wyD54bQ&s"
        title="Excutive Suite Room"
        channel="Toiletries"
        views="Wifi"
        facibility="Air conditioned"
      />

      <ServicesCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2BYKqvXV7CMscqvQYiYV9qkf3plxOx6f0w&s"
        title="Mini Suite Room"
        channel="Toiletries"
        views="Wifi"
        facibility="Air conditioned" 
      /> 

      <ServicesCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdijX-bZJLNnJsZZaLsHT7-vM-f58augHY8w&s"
        title="Economy Double Room"
        channel="Toiletries"
        views="Wifi"
        facibility="Air conditioned"
      />

      <ServicesCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGEwju6Oc_JKxo5Mu0zpAA7FYMTm0K7zdg&s"
        title="Sea View Triple Room"
        channel="Toiletries"
        views="Wifi"
        facibility="Air conditioned"
      />

      <ServicesCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZlI4MBSSrCdkrsVCkhS9XbrN16Hm51UvTA&s"
        title="Elegant Landscape Room"
        channel="Toiletries"
        views="Wifi"
        facibility="Air conditioned"
      />
    
    </div>
  )
}

export default ServicesGrid
