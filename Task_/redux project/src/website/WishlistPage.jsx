import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { empty_wishlist, remove_to_wishlist } from "../redux/Action";
import { useState } from "react";


const WishlistPage = () => {
    // const wishlistItems = [
    //     { id: 1, name: "Shoes VIR", price: "$20", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/n/h/10-126-grey-10-winprice-grey-original-imagrmcyhvmzxhvv.jpeg?q=90&crop=false" },

    // ];
    const [enableBtn, setEnableBtn] = useState(false)
    const [BtnOpacity, setBtnOpacity] = useState('opacity-100')


    const wishlist_data1 = useSelector((state) => state.wishlist)
    console.log("productpage : add to wishlist data", wishlist_data1);

    const wishlist_data2 = useSelector((state) => state.carttowishlist)
    console.log("cart page : cart to wishlist data", wishlist_data2);

    const empty_data_list = () => {
        dispatch(empty_wishlist())
        setEnableBtn(true)
        setBtnOpacity('opacity-75')
    }

    const dispatch = useDispatch()
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Wishlist</h1>

            <button onClick={() => empty_data_list()} className={`mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600`} disabled={enableBtn}>
                Empty Wishlist
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist_data1.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                    >
                        <img src={item.image} alt={item.name} className="w-full h-50 object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                        <p className="text-gray-600">{item.price}</p>
                        <button onClick={() => dispatch(remove_to_wishlist(item))} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            Remove from Wishlist(product)
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
                        <button onClick={() => dispatch(remove_to_wishlist(item))} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            Remove from Wishlist(cart)
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WishlistPage;
