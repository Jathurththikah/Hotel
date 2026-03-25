import React from 'react'

const Gallerygrid = (props) => {
    return (
        <div className="flex flex-col rounded-[10px]  bg-taupe-500 w-[450px] shadow-xl/30 font-sans">

            <img src={props.src} className="w-[400px] h-[250px] rounded-[10px] pt-[20px] object-cover mx-auto mt-1" />
            <p className="text-white left ml-5 mt-4">
                <h2 className='text-2xl'>{props.title}</h2>
                <h5 className="text-black left text-1xl mt-2 mb-4">{props.date}</h5>
            </p>

        </div>
    )
}

export default Gallerygrid
