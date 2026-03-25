import React from 'react'

const Roombooking = () => {

    const offersData = [
        {
            id: 1,
            title: "Deluxe Room Special",
            description: "Book now and get 20% off on deluxe rooms for this season.",
            price: "$120/night",

            image: "https://digitallearning.eletsonline.com/wp-content/uploads/2014/01/hotel-management.jpg"
        },
        {
            id: 2,
            title: "Family Getaway",
            description: "Enjoy a 3-night stay with complimentary breakfast and spa access.",
            price: "$300/package",
            image: "https://www.torrens.edu.au/-/media/project/laureate/apac/torrens/stories/bmihms/7-key-benefits-of-studying-hotel-management/7-key-benefits-of-studying-hotel-management-lg.png?rev=1e1322bab7114d618c50a0f816efc564"
        },
        {
            id: 3,
            title: "Romantic Escape",
            description: "Couples special with candlelight dinner and sea view room.",
            price: "$250/package",
            image: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/06/Hotel_Management_Career.jpg"
        }
    ];


    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-blue-600 text-white p-6 text-center">
                <h1 className="text-3xl font-bold">Special Offers & Packages</h1>
                <p className="mt-2">Exclusive deals and seasonal discounts at our hotel</p>
            </header>

            {/* Offers Section */}
            <section className="container mx-auto my-10 px-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Current Offers</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {offersData.map((offer) => (
                        <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                                <p className="text-gray-700 mb-4">{offer.description}</p>
                                <span className="text-blue-600 font-semibold">{offer.price}</span>
                                <button className="mt-4 bg-stone-700 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-6 text-center mt-10">
                &copy; 2026 Your Hotel Name. All Rights Reserved.
            </footer>
        </div>
    )
}

export default Roombooking
