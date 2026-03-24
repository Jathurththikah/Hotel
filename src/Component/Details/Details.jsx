import React from 'react'

const Details = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto p-5">

    
                <h1 className="text-3xl font-bold mb-6 text-center">Deluxe Room</h1>

            
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                    <img
                        src="https://wpmedia.roomsketcher.com/content/uploads/2023/07/11134340/gueast-bedroom-home-gym.jpg"
                        alt="Deluxe Room 1"
                        className="w-72 h-48 object-cover rounded-lg"
                    />
                    <img
                        src="https://d18slle4wlf9ku.cloudfront.net/www.cinnamonhotels.com-1302818674/cms/imagepool/67d3c92a853f7.jpg"
                        alt="Deluxe Room 2"
                        className="w-72 h-48 object-cover rounded-lg"
                    />
                    <img
                        src="https://q-xx.bstatic.com/xdata/images/hotel/max500/751011981.jpg?k=0f2e2ed0ed9b9c85570db72c43dfafe45582c4a24c6263f8a8e65e89de26f99c&o="
                        alt="Deluxe Room 3"
                        className="w-72 h-48 object-cover rounded-lg"
                    />
                </div>


                <div className="bg-white rounded-xl shadow-md p-6">


                    <p className="text-2xl font-bold text-green-600 mb-4">₹3000 / night</p>


                    <p className="text-gray-700 mb-4">
                        Spacious deluxe room with AC, free WiFi, minibar, and private bathroom.
                        Perfect for a comfortable stay with modern amenities.
                    </p>


                    <div className="mb-4">
                        <h2 className="font-semibold text-lg mb-2">Amenities:</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Air Conditioning</li>
                            <li>Private Bathroom</li>
                            <li>Room Service</li>
                        </ul>
                    </div>





                    <button className="bg-stone-700 text-white px-6 py-3 rounded-lg hover:bg-stone-800">
                        Book Now
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Details
