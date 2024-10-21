import React from 'react'
const products = [
    {
        id: 1,
        name: "Electric Kettle",
        price: "$29.99",
        image: "https://www.novaindia.co.in/cdn/shop/files/Screenshot2023-07-18at10.44.03AM.png?v=1689657278",
    },
    {
        id: 2,
        name: "Blender",
        price: "$59.99",
        image: "https://bossindia.com/wp-content/uploads/2019/09/B115-Grey-New.jpg",
    },
    {
        id: 3,
        name: "Microwave Oven",
        price: "$99.99",
        image: "https://morphyrichardsindia.com/cdn/shop/files/6_b005c6ef-10ab-41e6-ae1f-622be5286290.png?v=1722078726&width=416",
    },
    {
        id: 4,
        name: "Toaster",
        price: "$24.99",
        image: "https://bossindia.com/wp-content/uploads/2020/07/B527_2.jpg",
    },
    {
        id: 5,
        name: "Air Fryer",
        price: "$89.99",
        image: "https://www.coopersofstortford.co.uk/images/products/medium/L482i.jpg",
    },
    {
        id: 6,
        name: "Coffee Maker",
        price: "$49.99",
        image: "https://glenindia.com/cdn/shop/products/1_59f04f79-cb58-4b08-9547-07702fcc49a1_1200x1200.jpg?v=1672308229",
    },
    {
        id: 7,
        name: "Electric Stove",
        price: "$399.99",
        image: "https://i.pinimg.com/736x/f6/00/2f/f6002f09eaf3150afb23cdbde1335fca.jpg",
    },
    {
        id: 8,
        name: "Rice Cooker",
        price: "$39.99",
        image: "https://myborosil.com/cdn/shop/files/my-borosil-rice-cookers-borosil-instacook-electric-pressure-cooker-6l-33274837500042.jpg",
    },
    {
        id: 9,
        name: "Vacuum Cleaner",
        price: "$199.99",
        image: "https://shop.ttkprestige.com/media/catalog/product/9/2/9275-42661-IMG1.jpg",
    },
    {
        id: 10,
        name: "Hair Dryer",
        price: "$19.99",
        image: "https://www.novaindia.co.in/cdn/shop/products/B083F853KB_MAIN.jpg?v=1654940341",
    },
    {
        id: 11,
        name: "Electric Iron",
        price: "$25.99",
        image: "https://mccoyindia.in/wp-content/uploads/2020/04/Jupiter-iron-features.jpg",
    },
    {
        id: 12,
        name: "Electric Fan",
        price: "$49.99",
        image: "https://vguard.com/cdn/shop/files/CREATIVE_1_ad4d47ea-6aec-4bd9-b7d6-c23129daf39e.jpg?v=1711693004&width=1946",
    },
    {
        id: 13,
        name: "Portable Heater",
        price: "$69.99",
        image: "https://m.media-amazon.com/images/I/7130RFj1x+L.jpg",
    },
    {
        id: 14,
        name: "LED Light Bulb",
        price: "$4.99",
        image: "https://5.imimg.com/data5/FR/JG/UK/SELLER-86701761/led-bulb-5-volt.jpg",
    },
    {
        id: 15,
        name: "Smart Plug",
        price: "$14.99",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolpyq57gzGnbcgxf1rm00smY8mbHMRePViA&s",
    },
    {
        id: 16,
        name: "Smart Thermostat",
        price: "$129.99",
        image: "https://smartify.in/wp-content/uploads/2019/07/Nest-Learning-Thermostat-3rd-Generation-product.jpg",
    },
    {
        id: 17,
        name: "Electric Grill",
        price: "$79.99",
        image: "https://m.media-amazon.com/images/I/51RdG4bGxQL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 18,
        name: "Electric Pressure Cooker",
        price: "$99.99",
        image: "https://myborosil.com/cdn/shop/files/my-borosil-rice-cookers-borosil-instacook-electric-pressure-cooker-6l-33274837500042.jpg",
    },
    {
        id: 19,
        name: "Electric Blanket",
        price: "$49.99",
        image: "https://m.media-amazon.com/images/I/51WI93c3ycL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 20,
        name: "Dishwasher",
        price: "$499.99",
        image: "https://m.media-amazon.com/images/I/71FS5XXc8DL.jpg",
    },
];
const Shop = () => {

    return (
        <div className="bg-gray-100 py-10 ">
            <div className="container mx-auto px-4 mb-10">
                <h1 className="text-4xl font-bold text-center mb-8">Shop Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56  object-cover mb-4 rounded-lg"
                            />
                            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-4">{product.price}</p>
                            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>


            </div>
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
    );
}

export default Shop
