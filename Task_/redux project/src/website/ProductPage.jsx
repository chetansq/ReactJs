import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { product_set } from "../redux/ProductAction";
import { add_to_cart } from "../redux/Action";
import { add_to_wishlist } from "../redux/Action";


// const products = [
//     { id: 1, name: "Shoes VIR", price: "$20", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/n/h/10-126-grey-10-winprice-grey-original-imagrmcyhvmzxhvv.jpeg?q=90&crop=false" },
//     { id: 2, name: "Shoes VIR", price: "$30", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/n/k/3/7-vir-ezdezario-grey-original-imagqjhugthkmygb.jpeg?q=90&crop=false" },
//     { id: 3, name: "Shoes ATP", price: "$40", image: "https://rukminim2.flixcart.com/image/850/1250/xif0q/shoe/d/l/j/7-b201-kardam-sons-black-original-imagygdknhbjwsah.jpeg?q=20&crop=false" },
//     { id: 4, name: "3D Camera", price: "$50", image: "https://www.justcanon.in/cdn/shop/products/EOSR7wRF-S18-150mmf4.5-6.3ISSSTMFront.jpg?v=1659021305" },
//     { id: 5, name: "Wireless Speaker", price: "$60", image: "https://avstore.in/cdn/shop/products/AVStore-Denon-Home-150-Black-Back.jpg?v=1634724487&width=2000p" },
//     { id: 6, name: "Canon Camera", price: "$70", image: "https://media.the-digital-picture.com/Images/Other/Tamron-150-500mm-f-5-6.7-Di-III-VXD-Lens/Tamron-150-500mm-f-5-6.7-Di-III-VXD-Lens-Extended-Comparison.webp" },
//     { id: 7, name: "Cooler", price: "$80", image: "https://www.novamaxindia.com/public/uploads/all/rtw95I53clnKwl98rlvHPGvbZ4TUAH2gDbvIq0aT.jpg" },
//     { id: 8, name: "Bags", price: "$90", image: "https://cdn.lowepro.com/media/catalog/product/cache/03fd8892b024dd7e7d63ccf8cf919d8c/c/a/camera-backpacks-tahoebp-150-family-2-sq-lp36892-config.jpg" },
//     { id: 9, name: "ToolsVilla", price: "$100", image: "https://s3.toolsvilla.com/products-heavyduty2500watthighpressurewasher/1709985310002/1709985398393-watmrkA.webp" },
//     { id: 10, name: "Mixer", price: "$110", image: "https://vasanthandco.in/images/productimages/15__product__Mixer%20Grinder__Preethi%20BLUE%20LEAF%20GOLD%20MG-150%203%20JAR%20750%20Watt%20Mixer%20Grinder.jpeg" },
// ];

const products = 
    { id: 1, name: "Shoes VIR", price: "$20", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/n/h/10-126-grey-10-winprice-grey-original-imagrmcyhvmzxhvv.jpeg?q=90&crop=false", quantity: 1 };
    // { id: 2, name: "Shoes VIR", price: "$30", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/n/k/3/7-vir-ezdezario-grey-original-imagqjhugthkmygb.jpeg?q=90&crop=false", quantity: 1 },
    // { id: 3, name: "Shoes ATP", price: "$40", image: "https://rukminim2.flixcart.com/image/850/1250/xif0q/shoe/d/l/j/7-b201-kardam-sons-black-original-imagygdknhbjwsah.jpeg?q=20&crop=false", quantity: 1 },



const ProductPage = () => {

    const productData = useSelector((state) => state.product);
    console.log("product data", productData);

    const cart_data = useSelector((state) => state.cart);
    console.log('cart data', cart_data);

    const wishlist_data = useSelector((state) => state.wishlist);
    console.log('product to wishlist', wishlist_data);

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(product_set(products))
    // }, [])


    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <button onClick={() => dispatch(product_set(products))}>click for action</button>

            {productData.map(item => (
                <div
                    key={item.id}
                    className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                    <img src={item.image} alt={item.name} className="w-full h-50 object-cover rounded" />
                    <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                    <p className="text-gray-600">{item.price}</p>

                    <button onClick={() => dispatch(add_to_cart(item))} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button>

                    <button onClick={() => dispatch(add_to_wishlist(item))} className="mt-3 ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Add to Wishlist
                    </button>

                </div>
            ))}
        </div>
    );
};

export default ProductPage;
