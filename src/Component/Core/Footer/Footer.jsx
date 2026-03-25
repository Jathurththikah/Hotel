import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TikTokOutlined } from "@ant-design/icons"

// import { FacebookOutlined } from "@ant-design/icons"

 

const Footer = () => {
  return (
    <div>
      <footer class="bg-stone-900 text-white ">
  <div class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-40">

    
    <div>
      <h2 class="text-xl font-bold mb-4">Hotel Management</h2>
      <p class="text-gray-300 text-sm">
        Providing premium hospitality services with comfort, luxury, and excellence.
        Your satisfaction is our priority.
        
      </p>
      <span className='text-white text-2xl'> <a href="https://www.facebook.com/"> <FacebookOutlined /> </a> <a href="https://www.instagram.com/"> <InstagramOutlined /> </a> <a href="www.tiktok.com"><TikTokOutlined/></a> <a href="https://lk.linkedin.com"><LinkedinOutlined /> </a> </span>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2 text-gray-300 text-sm">
        <li><a href="#" class="hover:text-white">Home</a></li>
        <li><a href="#" class="hover:text-white">Booking</a></li>
        <li><a href="#" class="hover:text-white">Services</a></li>
        <li><a href="#" class="hover:text-white">Info</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold mb-4">Contact</h3>
      <p class="text-gray-300 text-sm">123 kandy to kilinochchi A9Roade, kilinochchi, Sri Lanka</p>
      <p class="text-gray-300 text-sm mt-2">Phone: +94 7754555565</p>
      <p class="text-gray-300 text-sm">Email: info@hotelmanagement.com</p>
    </div>

  </div>

  
  <div class="border-t border-gray-700">
    <div class="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-400">
      © 2026 Hotel Management. All rights reserved.
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
