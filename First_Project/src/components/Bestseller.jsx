import React from 'react'

// images
import seller_img_1 from '../assets/asset_16.jpeg'
import seller_img_2 from '../assets/asset_35.jpeg'
import seller_img_3 from '../assets/asset_19.jpeg'
import seller_img_4 from '../assets/asset_21.jpeg'
import seller_img_5 from '../assets/asset_24.jpeg'
import seller_img_6 from '../assets/asset_38.jpeg'
import seller_img_7 from '../assets/asset_45.jpeg'
import seller_img_8 from '../assets/asset_51.jpeg'
import seller_img_9 from '../assets/asset_55.jpeg'
import seller_img_10 from '../assets/asset_57.jpeg'
import seller_img_11 from '../assets/asset_60.jpeg'
import seller_img_12 from '../assets/asset_64.jpeg'

// hover images
import seller_hover_1 from '../assets/asset_17.jpeg'
import seller_hover_2 from '../assets/asset_36.jpeg'
import seller_hover_3 from '../assets/asset_20.jpeg'
import seller_hover_4 from '../assets/asset_22.jpeg'
import seller_hover_5 from '../assets/asset_25.jpeg'
import seller_hover_6 from '../assets/asset_39.jpeg'
import seller_hover_7 from '../assets/asset_46.jpeg'
import seller_hover_8 from '../assets/asset_52.jpeg'
import seller_hover_10 from '../assets/asset_58.jpeg'
import seller_hover_11 from '../assets/asset_61.jpeg'
import seller_hover_12 from '../assets/asset_65.jpeg'

// icon

import { BiDollar } from "react-icons/bi";

const seller = [
    {
        id: 1,
        seller_img: seller_img_1,
        description: "Ribbed Tank Top",
        price: 16.95
    },
    {
        id: 2,
        seller_img: seller_img_2,
        description: "Ribbed modal T-shirt",
        price: 18.95
    },
    {
        id: 3,
        seller_img: seller_img_3,
        description: "Oversized Printed T-shirt",
        price: "10.00"
    },
    {
        id: 4,
        seller_img: seller_img_4,
        description: "Oversized Printed T-shirt",
        price: 16.95
    },
    {
        id: 5,
        seller_img: seller_img_5,
        description: "V-neck linen T-shirt",
        price: 114.95
    },
    {
        id: 6,
        seller_img: seller_img_6,
        description: "Loose Fit Sweatshirt",
        price: "10.00"
    },
    {
        id: 7,
        seller_img: seller_img_7,
        description: "Regular Fit Oxford Shirt",
        price: "10.00"
    },
    {
        id: 8,
        seller_img: seller_img_8,
        description: "Loose Fit Hoodie",
        price: 9.95
    },
    {
        id: 9,
        seller_img: seller_img_9,
        description: "Patterned scarf",
        price: 14.95
    },
    {
        id: 10,
        seller_img: seller_img_10,
        description: "Slim Fit Fine-knit Turtleneck Sweater",
        price: 18.95
    },
    {
        id: 11,
        seller_img: seller_img_11,
        description: "Slim Fit Fine-knit Turtleneck Sweater",
        price: 18.95
    },
    {
        id: 12,
        seller_img: seller_img_12,
        description: "Slim Fit Fine-knit Turtleneck Sweater",
        price: 18.95
    },
]


const Bestseller = () => {
    return (
        <div className='my-4'>


            <div className='overflow-x-hidden'>
                <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8  px-[14px] sm:px-4 md:px-6 lg:px-12   '>
                    {
                        seller.map((current) => {

                            return (

                                <SellerDetails key={current.id} details={current} />

                            )
                        }
                        )
                    }
                </div>
            </div>

            <div className='flex justify-center my-4 '>
                <button className='border border-black rounded py-3 px-7 hover:duration-300 font-semibold duration-300 hover:text-[red] hover:border-[red] text-sm'>Load More</button>
            </div>

        </div>
    )
}

export default Bestseller

function SellerDetails({ details }) {

    return (
        <div className=' h-fit rounded-md mt-5 m-auto '>
            <div className=" h-fit w-fit rounded-md overflow-hidden ">
                <img
                    src={details.seller_img}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover hover:scale-105 duration-1000 hover:duration-1000"

                />
            </div>

            <div className="  text-left text-sm md:text-base">

                <p className='hover:text-red-500 hover:duration-300 my-1' >{details.description}</p>
                <p className='flex items-center' ><BiDollar />{details.price}</p>

            </div>
        </div>
    )
}
