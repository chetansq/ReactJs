import React from 'react'
import categoryImg1 from '../assets/asset_30.jpeg'
import categoryImg2 from '../assets/asset_31.jpeg'
import categoryImg3 from '../assets/asset_32.jpeg'
import categoryImg4 from '../assets/asset_33.jpeg'
import categoryImg5 from '../assets/asset_34.jpeg'

import { MdArrowOutward } from "react-icons/md";

let Category = [
    {
        categoryImage: categoryImg1,
        btnDescription: 'Clothing'
    },
    {
        categoryImage: categoryImg2,
        btnDescription: 'Sunglasses'
    },
    {
        categoryImage: categoryImg3,
        btnDescription: 'Bags'
    },
    {
        categoryImage: categoryImg4,
        btnDescription: 'Fashion'
    },
    {
        categoryImage: categoryImg5,
        btnDescription: 'Accessories'
    }

]

const CategorySlide = () => {

    return (

        <div className='flex-col overflow-x-hidden px-8 mt-10'>
            <div>
                    
            </div>

            <div className='flex overflow-x-hidden px-8'>

                {
                    Category.map((current) => {

                        return (
                            <>
                                <div>

                                    <CategoryDetails details={current} />
                                </div>
                            </>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default CategorySlide



function CategoryDetails({ details }) {

    return (
        <div>
            <div className="relative h-[400px] w-[300px] rounded-md">
                <img
                    src={details.categoryImage}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">

                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black bg-white p-2 gap-2 hover:bg-black hover:text-white">
                        {details.btnDescription}
                        <MdArrowOutward className='' />
                    </button>
                </div>
            </div>
        </div>
    )
}