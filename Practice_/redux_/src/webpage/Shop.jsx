import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart } from '../redux/Action'
import { product_set } from '../redux/ProductAction';

const products = [
    { id: 1, name: "Mixer-juicer", price: "$99.99", image: "https://m.media-amazon.com/images/I/71vfrhmJ1SL._AC_UF894,1000_QL80_.jpg" },
    { id: 2, name: "Fashion", price: "$89.99", image: "" },
    { id: 3, name: "Sofa", price: "$79.99", image: "" },
    { id: 4, name: "Product 4", price: "$69.99", image: "" },
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

const Shop = () => {

    const productData = useSelector((state) => state.product);
    console.log("product data ", productData);


    const dispatch = useDispatch();
    return (
        <div>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-8">Shop All Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <button onClick={() => dispatch(product_set(products))}>click for action</button>

                        {productData.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                                <img src={item.image} alt={item.name} className="mb-4 w-full rounded" />
                                <h4 className="font-bold text-lg">{item.name}</h4>
                                <p className="text-gray-600">{item.price}</p>
                                <button onClick={() => dispatch(add_to_cart(item))} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop
