import { PRODUCT_SET } from "./Constant";
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
export const productReducer = (state = [], action) => {
    switch (action.type) {
        case PRODUCT_SET:
            return [...state, action.paylod]

        default: return state
    }
}