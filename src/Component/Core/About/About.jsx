import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TikTokOutlined } from '@ant-design/icons'
import React from 'react'


const About = () => {
    return (
        <div>

            <div className="py-16 px-8 text-center bg-stone-600">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="max-w-2xl mx-auto">
                    We provide the best hotel experience with modern rooms, great food,
                    and excellent customer service. Your comfort is our priority.
                </p>
                <span className='text-white text-2xl'> <a href="https://www.facebook.com/"> <FacebookOutlined /> </a> <a href="https://www.instagram.com/"> <InstagramOutlined /> </a> <a href="www.tiktok.com"><TikTokOutlined /></a> <a href="https://lk.linkedin.com"><LinkedinOutlined /> </a> </span>

            </div>
            <div className='flex gap-60 m-8 ml-40'>
                <div className='w-120 bg-stone-200 h-45 text-center pt-7  rounded-2xl shadow-2xl'>
                    <h1 className='text-xl'>Our Mission</h1>
                    <p>Our missionTo provide exceptional hospitality services <br />
                        by delivering comfort, quality,and personalized experiences <br />
                        that exceed guest expectation while maintaining high standards
                        of professionalism, cleanliness,and efficiency. </p>
                </div>
                <div className='w-120 bg-stone-200 h-45 text-center pt-5 rounded-2xl shadow-2xl'>
                    <h1 className='text-xl'>Our Vision</h1>
                    <p> To be a leading hotel management brand recognized for
                        excellence in service, innovation in hospitality, and
                        a commitment to creating memorable stays for guests while
                        fostering a supportive and rewarding environment for employees. </p>
                </div>
            </div>


            <div className='text-center h-20 text-2xl '>
                <h3>Our Team
                    Members</h3>
            </div>
            <div className='flex gap-40 pb-10'>
                <div className=' w-100 bg-blue-50 h-40 text-center pt-10  rounded-2xl shadow-2xl '>
                    <h3>Jathurththikah</h3>
                    <p>Info Pages</p>
                </div>
                <div className='w-100 bg-blue-50  text-center pt-10  rounded-2xl shadow-2xl '>
                    <h3>Denis Devid Desman</h3>
                    <p> Booking section </p>
                </div>
                <div className='w-100  bg-blue-50  text-center pt-10  rounded-2xl shadow-2xl'>
                    <h3>kalainila</h3>
                    <p>Services</p>
                </div>
            </div>
        </div>
    )
}

export default About
