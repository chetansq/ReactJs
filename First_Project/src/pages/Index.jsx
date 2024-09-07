import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img1 from '../assets/asset28.jpeg'
import slider_img2 from '../assets/asset_27.jpeg'
import slider_img3 from '../assets/asset29.jpeg'

// icon section

import { IoIosArrowForward } from "react-icons/io";
import { HiBolt } from "react-icons/hi2";



let HeroSlideDetails = [
    {
        tittle: ["Glamorous", "Glam"],
        description: "From casual to formal, we've got you covered",
        image: slider_img1
    },
    {
        tittle: ["Simply", "Style"],
        description: "From casual to formal, we've got you covered",
        image: slider_img2
    },
    {
        tittle: ["Simply", "Style"],
        description: "From casual to formal, we've got you covered",
        image: slider_img3
    }
]

export const Sliders = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    }
    return (
        <>
            {/* Home Main section start */}

            <div>

                {/* Slider Section Start */}
                <div className="slider-container">
                    <div className="slider-container  overflow-x-hidden h-[50%]  ">


                        <Slider {...settings} className='HeroSlider'>

                            {HeroSlideDetails.map((current, index) => {
                                return (
                                    <>
                                        <HeroSlide
                                            key={current}
                                            details={current} />
                                    </>
                                );
                            })}

                        </Slider>
                    </div>

                </div>
                {/* Slider Section End */}

                {/* Marquee Section Start */}
                <div className='bg-yellow-100 flex text-nowrap overflow-x-hidden marqueeContainer'>
                    <div className='py-5 flex marqueeDiv'>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>

                    </div>
                    <div className='py-5 flex marqueeDiv'>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>

                    </div>
                </div>
                {/* Marquee Section End */}

            </div>

            {/* Home Main section End */}
        </>
    );
}

const Index = () => {
    console.log("index page");
    return (
        <div>
            <main>
                <Sliders />
            </main>
        </div>

    )
}

export default Index


function HeroSlide({ details }) {

    return (
        <>
            <div>
                <div style={{ backgroundImage: `url(${details.image})` }} className=' h-screen bg-cover bg-center relative'>
                    <div className='absolute z-40 text-black left-[10%] top-[28%] lg:top-[45%] px-4 lg:px-20 m-auto w-full '>
                        <p className='text-4xl md:text-5xl lg:text-[80px]'>{details.tittle[0]} <br /> {details.tittle[1]}</p>
                        <p className='md:text-xl my-4 mb-6 max-md:hidden'>{details.description}</p>

                        <a href="" className='bg-black w-fit text-white text-md font-semibold rounded md:px-7 px-4 py-2 md:py-3 mt-4 flex items-center gap-1'>
                            <span>Shop Collection</span>
                            <IoIosArrowForward className='text-white font-bold text-lg' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}