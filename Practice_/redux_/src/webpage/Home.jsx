import React from 'react'


const categories = [
    { id: 1, name: "Electronics", image: "https://images-cdn.ubuy.co.in/63400828da17551acd788ca4-mystery-electronic-box-unexpected-gift.jpg" },
    { id: 2, name: "Fashion", image: "https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image004.jpg?v=20210616T144221" },
    { id: 3, name: "Home & Living", image: "https://img.jakpost.net/c/2019/09/17/2019_09_17_79579_1568684756._large.jpg" },
    { id: 4, name: "Sports", image: "https://petapixel.com/assets/uploads/2022/09/SportsPhotographerBasketball2-800x800.jpeg" },
    { id: 5, name: "Beauty & Health", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Toys", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Books", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Automotive", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Gaming", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Groceries", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Music", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Office Supplies", image: "https://via.placeholder.com/150" },
    { id: 13, name: "Pet Supplies", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Fitness", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Garden & Outdoor", image: "https://via.placeholder.com/150" },
];

const products = [
    { id: 1, name: "Mixer-juicer", price: "$99.99", image: "https://m.media-amazon.com/images/I/71vfrhmJ1SL._AC_UF894,1000_QL80_.jpg" },
    { id: 2, name: "Fashion", price: "$89.99", image: "https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/summer-fashion-trends-butter-yellow.jpg?fit=1360%2C1600" },
    { id: 3, name: "Sofa", price: "$79.99", image: "https://kotart.in/cdn/shop/products/Kotart-Beautiful-Deer-Canvas-Art-for-Home-Living-Room-Bedroom-Wall-Decor-Modern-Art-Canvas-Painting-4.jpg?v=1697553878&width=1946" },
    { id: 4, name: "Cricket Bat", price: "$69.99", image: "https://commercebuild-175c7.kxcdn.com/cdn-d03d5231-5b2e278c.mysagestore.com/cf738e9579802e6b988bb225ca6bc00c/contents/2A25130C/thumbnail/middle_2A25130C-Kahuna-Pro-Shadow.jpg?quality=65" },
    { id: 5, name: "Product 5", price: "$59.99", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$49.99", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", price: "$39.99", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: "$29.99", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Product 9", price: "$19.99", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Product 10", price: "$109.99", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Product 11", price: "$119.99", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Product 12", price: "$129.99", image: "https://via.placeholder.com/150" },
    { id: 13, name: "Product 13", price: "$139.99", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Product 14", price: "$149.99", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Product 15", price: "$159.99", image: "https://via.placeholder.com/150" },
];

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="bg-gray-100 py-20 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">Your One-Stop Shop for Everything</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Discover amazing deals on the products you love.
                    </p>
                    <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-8">Shop by Categories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
                            >
                                <img src={category.image} alt={category.name} className="mb-4 w-full rounded" />
                                <h4 className="font-bold text-lg">{category.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section id="products" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
                            >
                                <img src={product.image} alt={product.name} className="mb-4 w-full rounded" />
                                <h4 className="font-bold text-lg">{product.name}</h4>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home
