import React from 'react'

const Reviewgrid = (over) => {
    return (
        
        <div className="flex flex-col rounded-[10px]  bg-stone-600 w-[380px] h-[450px] shadow-xl/30 font-sans h-120">
            <div className='flex'>
                <div>
                    <img src={over.src} className="w-[170px] h-[180px] rounded-[100px] pt-[20px] object-cover mx-auto mt-1 ml-10" />
                </div>
                <div>
                    <p className="text-white left ml-8 mt-4">
                        <h2 className='text-3xl'>{over.name}</h2>
                        <h5 className="text-white left text-1xl mt-2 mb-4">{over.position}</h5></p>
                </div>
            </div>
            <p className="text-white left text-1xl mt-2 mb-4 ml-10 pr-10">{over.about}</p>
            <button className='mb-10 ml-20 border-white border-2 w-50 h-15 rounded-[10px] bg-stone-300 shadow-xl/30'>Read more</button>
            
        </div>
    )
}

export default Reviewgrid
