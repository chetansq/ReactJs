import React from 'react'

const About = () => {
    return (
        <div>

<main class="container mx-auto mt-10 px-4">
        <section class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
            <p class="text-gray-700 mb-4">
                At Electronics Store, we are committed to providing our customers with top-notch electronic products and services that enhance their lives. 
            </p>

            <h2 class="text-2xl font-semibold mb-4">Our Values</h2>
            <ul class="list-disc pl-5 text-gray-700 mb-4">
                <li>Innovation: We embrace cutting-edge technology.</li>
                <li>Quality: We ensure every product meets our high standards.</li>
                <li>Customer Satisfaction: Our customers are our priority.</li>
                <li>Integrity: We believe in honest and transparent practices.</li>
            </ul>

            <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
            <p class="text-gray-700 mb-4">
                Our team consists of passionate electronics enthusiasts and experts who are always ready to assist you in finding the perfect product for your needs.
            </p>
        </section>

        <section class="mt-10">
            <h2 class="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
            <p class="text-gray-700 mb-4">
                We invite you to explore our extensive range of products and discover how we can help you stay connected and powered up in today’s digital world.
            </p>
        </section>
    </main>

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

export default About
