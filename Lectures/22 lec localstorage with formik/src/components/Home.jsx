import React from 'react'

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Non-Stop Online Shop</h1>
                        <p className="text-gray-600 text-lg">Discover the latest trends and shop over 10,000 products in fashion, tech, home & more.</p>
                        <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">Start Shopping</a>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img src="https://wealthyhabits.org/wp-content/uploads/2019/04/online-shopping-e1567402745948.png" alt="Shopping Banner" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Browse by Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <img className=' w-full' src="https://i.pinimg.com/474x/ab/35/d0/ab35d0c207b0cb4cff71b24db925591e.jpg" alt="" />
                            <h3 className="text-lg font-semibold text-gray-700">Men's Fashion</h3>
                            <a href="#" className="block mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Shop Now</a>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <img className=' w-full' src="https://idaho-o.com/wp-content/uploads/2024/06/image-11.png" alt="" />
                            <h3 className="text-lg font-semibold text-gray-700">Women's Fashion</h3>
                            <a href="#" className="block mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Shop Now</a>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <img className=' w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQic0HmizmCJO-tR6gXI88IwS52SdjPtL3A&s" alt="" />
                            <h3 className="text-lg font-semibold text-gray-700">Electronics</h3>
                            <a href="#" className="block mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Shop Now</a>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <img className=' w-full' src="https://static.athome.com/image/upload/f_auto,q_auto/v1675721330/webcontent/ABtest/FurnitureCLP/FY24Q1_TRAD_LR_Providence_2.jpg" alt="" />
                            <h3 className="text-lg font-semibold text-gray-700">Home & Furniture</h3>
                            <a href="#" className="block mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Shop Now</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Footer --> */}
            <footer className="bg-gray-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
                        <div>
                            <h3 className="text-lg font-bold">ShopMate</h3>
                            <p className="mt-4 text-gray-400">Your go-to online store for fashion, electronics, and home essentials.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Quick Links</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Customer Service</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">Help & FAQs</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Returns</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Order Tracking</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Follow Us</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Instagram</a></li>
                                <li><a href="#" className="hover:text-indigo-400">Twitter</a></li>
                                <li><a href="#" className="hover:text-indigo-400">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-gray-400">
                        <p>&copy; 2024 ShopMate. All rights reserved.</p>
                    </div>
                </div>
            </footer>




        </div>
    )
}

export default Home
