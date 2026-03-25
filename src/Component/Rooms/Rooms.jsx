import React from 'react'

const Rooms = () => {
    return (
  <div className="max-w-6xl mx-auto p-5 bg-stone-400">
      <h1 className="  text-3xl font-bold text-center mb-8">
        Rooms & Accommodation
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">

        {/* Room 1 */}
        <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://www.livehome3d.com/assets/img/articles/rooms-in-house/stylish-guest-room@2x.jpg"
            alt="Deluxe Room"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Deluxe Room</h2>
            <p className="text-gray-600 text-sm mt-1">
              Comfortable room with AC, free WiFi, and TV.
            </p>
            <p className="text-green-600 font-bold mt-2">
              ₹3000 / night
            </p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>

        {/* Room 2 */}
        <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://www.siteminder.com/wp-content/uploads/2022/09/sm_room_types_feat.png"
            alt="Suite Room"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Suite Room</h2>
            <p className="text-gray-600 text-sm mt-1">
              Spacious suite with living area and premium facilities.
            </p>
            <p className="text-green-600 font-bold mt-2">
              ₹5000 / night
            </p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>

        {/* Room 3 */}
        <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://wpmedia.roomsketcher.com/content/uploads/2023/07/11110944/rooms-in-house.jpg"
            alt="Standard Room"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Standard Room</h2>
            <p className="text-gray-600 text-sm mt-1">
              Affordable room with basic amenities.
            </p>
            <p className="text-green-600 font-bold mt-2">
              ₹8000 / night
            </p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
    )
}

export default Rooms

