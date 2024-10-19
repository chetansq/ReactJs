import React from 'react'

const Home = () => {
    return (
        <div>
            {/* <!-- Hero Section --> */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Find Your Perfect Style</h1>
                        <p className="text-gray-600 text-lg">Discover the latest trends in fashion and shop your favorite products today.</p>
                        <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">Shop Now</a>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img src="https://via.placeholder.com/500" alt="Fashion" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                        {/* <!-- Product Card 1 --> */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <img src="https://via.placeholder.com/300" alt="Product 1" className="w-full h-48 object-cover rounded-md" />
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-gray-700">Product Name</h3>
                                    <p className="text-gray-600">$49.99</p>
                                    <a href="#" className="block mt-2 bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700">Add to Cart</a>
                                </div>
                        </div>

                        {/* <!-- Product Card 2 --> */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-48 object-cover rounded-md" />
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-gray-700">Product Name</h3>
                                    <p className="text-gray-600">$59.99</p>
                                    <a href="#" className="block mt-2 bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700">Add to Cart</a>
                                </div>
                        </div>

                        {/* <!-- Product Card 3 --> */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <img src="https://via.placeholder.com/300" alt="Product 3" className="w-full h-48 object-cover rounded-md" />
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-gray-700">Product Name</h3>
                                    <p className="text-gray-600">$69.99</p>
                                    <a href="#" className="block mt-2 bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700">Add to Cart</a>
                                </div>
                        </div>

                        {/* <!-- Product Card 4 --> */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <img src="https://via.placeholder.com/300" alt="Product 4" className="w-full h-48 object-cover rounded-md"/>
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-gray-700">Product Name</h3>
                                    <p className="text-gray-600">$79.99</p>
                                    <a href="#" className="block mt-2 bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700">Add to Cart</a>
                                </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto px-4 text-center text-white">
                    <p>&copy; 2024 E-Shop. All Rights Reserved.</p>
                    <div className="mt-4 space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Home
