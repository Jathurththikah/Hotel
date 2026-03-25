// import { UsergroupAddOutlined } from "@ant-design/icons";
import { UsergroupAddOutlined } from "@ant-design/icons";
import React from "react";


const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen">


            <header className="bg-stone-500 text-white py-6 shadow-md pr-90">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl font-bold">Hotel Management</h1>
                    <p className="text-sm text-gray-200">Contact Us <span ><UsergroupAddOutlined /></span></p> 
                </div>
            </header>


            <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10" >
           


                <div >
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        We are here to assist you with bookings, inquiries, and support.
                        Feel free to reach out to us anytime.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div>
                            <h3 className="font-semibold">Address:</h3>
                            <p>123 kandy to kilinochchi  A9Roade,Kilinochchi, Sri Lanka</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Phone:</h3>
                            <p>+94 767465438</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Email:</h3>
                            <p>info@hotelmanagement.com</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Working Hours:</h3>
                            <p>24/7 Support Available</p>
                        </div>
                    </div>
                </div>


                <div className="bg-white p-8 rounded-2xl shadow-5xl">
                    <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-stone-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-stone-500 outline-none"
                            />
                        </div>



                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your message"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-stone-500 outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-stone-400 text-white py-3 rounded-lg hover:bg-stone-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>



        </div>
    );
};

export default Contact