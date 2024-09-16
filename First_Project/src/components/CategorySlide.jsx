import React from 'react'

// slider

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import categoryImg1 from '../assets/asset_30.jpeg'
import categoryImg2 from '../assets/asset_31.jpeg'
import categoryImg3 from '../assets/asset_32.jpeg'
import categoryImg4 from '../assets/asset_33.jpeg'
import categoryImg5 from '../assets/asset_34.jpeg'


// react icon

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { MdArrowOutward } from "react-icons/md";

let Category = [
    {
        id: 1,
        categoryImage: categoryImg1,
        btnDescription: 'Clothing'
    },
    {
        id: 2,
        categoryImage: categoryImg2,
        btnDescription: 'Sunglasses'
    },
    {
        id: 3,
        categoryImage: categoryImg3,
        btnDescription: 'Bags'
    },
    {
        id: 4,
        categoryImage: categoryImg4,
        btnDescription: 'Fashion'
    },
    {
        id: 5,
        categoryImage: categoryImg5,
        btnDescription: 'Accessories'
    }


]

const CategorySlide = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (

        <div className='flex flex-col overflow-x-hidden px-8 my-10 '>

            <div className='flex items-center mb-4 gap-5' >
                <div className='flex gap-2 categoryArrow'>

                    <a href="#" className='text-lg border-2 p-1 rounded-full hover:bg-black hover:text-white duration-300 hover:duration-300 slick-prev' ><IoIosArrowBack /></a>
                    <a href="#" className='text-lg border-2 p-1 rounded-full hover:bg-black hover:text-white duration-300 hover:duration-300 slick-next'> <IoIosArrowForward /></a>

                </div>
                <p className='font-semibold'>SHOP BY CATEGORIES</p>
            </div>

            <div className='h-[50%] w-[90%] '>

                {/* <div className='absolute z-10 right-0 flex  flex-col justify-end gap-4  bg-white  rounded-md h-full w-1/6 border-2 p-3'>
                    <p className=' text-2xl '>Discover all new items</p>
                    <a href="#" className='text-2xl border-2 p-1 rounded-full hover:bg-black hover:text-white duration-300 hover:duration-300 w-fit '>  <MdArrowOutward className=' ' /></a>
                </div> */}

                <div className='category-slider '>

                    <div className="slider-container">

                        <Slider {...settings} className='HeroSlider'>

                            {
                                Category.map((current, index) => {
                                    return (

                                        <CategoryDetails key={current.id} details={current} />

                                    );
                                })}

                        </Slider>

                    </div>
                    {/* {
                        Category.map((current) => {
                            return (
                                <CategoryDetails key={current.id} details={current} />
                            )
                        }
                        )
                    } */}
                </div>
            </div>
        </div>
    )
}

export default CategorySlide


function CategoryDetails({ details }) {

    return (
        <div>
            <div className="relative rounded-md  h-fit mx-5">
                <img
                    src={details.categoryImage}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover hover:scale-105 duration-1000 hover:duration-1000 "

                />
                {/* <div className="absolute inset-0 bg-gradient-to-t to-transparent"></div> */}
                <div className="absolute bottom-4 left-4 text-left">

                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm hover:text-smfont-semibold text-black bg-white p-2 gap-2 hover:bg-black hover:text-white group">
                        {details.btnDescription}
                        <MdArrowOutward className='hidden group-hover:block  ' />
                    </button>
                </div>
            </div>
        </div>
    )
}