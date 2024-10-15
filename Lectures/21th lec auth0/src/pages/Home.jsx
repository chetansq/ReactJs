import React from 'react'

const Home = () => {
    return (
        <div className=''>
            
            <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://pinabu.pk/wp-content/uploads/2024/07/Best-Fast-Food-Suggestions-for-Visitors-in-Islamabad.webp')` }}>
                <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                    <h1 className="text-5xl text-white font-bold mb-4">Tasty Fast Food, Delivered Fast!</h1>
                    <p className="text-lg text-white mb-6">Get your favorite meals delivered to your doorstep in minutes.</p>
                    <a href="#menu" className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600">Order Now</a>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Menu Item 1 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://img.freepik.com/premium-photo/french-fries-delicious-veg-burger-combo-plate-big-thick-wooden-part-smoky-background_862994-14863.jpg" alt="Burger" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Classic Burger</h3>
                                <p className="text-gray-600">$7.99</p>
                                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Add to Cart</button>
                            </div>
                        </div>
                        {/* Menu Item 2 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg" alt="Pizza" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Cheese Pizza</h3>
                                <p className="text-gray-600">$8.99</p>
                                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Add to Cart</button>
                            </div>
                        </div>
                        {/* Menu Item 3 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://sammibrondo.com/wp-content/uploads/2023/07/Crispy-Carrot-Fries-500x500.jpg" alt="Fries" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Crispy Fries</h3>
                                <p className="text-gray-600">$3.99</p>
                                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-red-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 FastFoodies. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home
