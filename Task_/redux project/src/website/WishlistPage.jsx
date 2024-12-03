import React from "react";
import { useSelector, useDispatch } from "react-redux";
const WishlistPage = () => {
    // const wishlistItems = [
    //     { id: 1, name: "Shoes VIR", price: "$20", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/n/h/10-126-grey-10-winprice-grey-original-imagrmcyhvmzxhvv.jpeg?q=90&crop=false" },

    // ];
    
    const wishlist_data1 = useSelector((state) => state.wishlist)
    const wishlist_data2 = useSelector((state) => state.carttowishlist)
    console.log("productpage : add to wishlist data", wishlist_data1);
    console.log("cart page : cart to wishlist data", wishlist_data2);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist_data1.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img src={item.image} alt={item.name} className="w-full h-50 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                            <p className="text-gray-600">{item.price}</p>
                            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                    {wishlist_data2.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img src={item.image} alt={item.name} className="w-full h-50 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                            <p className="text-gray-600">{item.price}</p>
                            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

export default WishlistPage;
