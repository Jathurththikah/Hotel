import React from 'react'

const Booking = () => {
  return (

    <div className="font-sans">


      <header className="bg-stone-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Booking.com</h1>

        <div className="space-x-4 hidden md:flex">
          <button className="border px-4 py-1 rounded bg-stone-700">Register</button>
          <button className="bg-white text-blue-200 px-4 py-1 rounded">Sign in</button>
        </div>
      </header>


      <div className="bg-stone-700 text-white px-6 pb-4 flex space-x-6 text-sm">
        <span className="border px-3 py-1 rounded-full bg-blue-800">Stays</span>
        <span>Flights</span>
        <span>Car rental</span>
        <span>Attractions</span>
        <span>Airport taxis</span>
      </div>

      
      <section className="bg-stone-800 text-white px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Find your next stay
        </h1>
        <p className="mt-3 text-lg">
          Search deals on hotels, homes, and much more...
        </p>
      </section>

      
      <div className="px-6 -mt-10">
        <div className="bg-white rounded-lg shadow-lg border-4 border-yellow-400 flex flex-col md:flex-row overflow-hidden">

          <input
            type="text"
            placeholder="Where are you going?"
            className="flex-1 px-4 py-4 outline-none border-b md:border-b-0 md:border-r"
          />

          <input
            type="text"
            placeholder="Check-in — Check-out"
            className="flex-1 px-4 py-4 outline-none border-b md:border-b-0 md:border-r"
          />

          <input
            type="text"
            placeholder="2 adults · 0 children · 1 room"
            className="flex-1 px-4 py-4 outline-none md:border-r"
          />

          <button className="bg-stone-700 text-white px-8 py-4 font-semibold hover:bg-blue-700">
            Search
          </button>

        </div>
      </div>

    </div>

  )
}

export default Booking
