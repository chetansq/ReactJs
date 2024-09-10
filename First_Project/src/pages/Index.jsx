import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img1 from '../assets/asset28.jpeg'
import slider_img2 from '../assets/asset_27.jpeg'
import slider_img3 from '../assets/asset29.jpeg'
import CategorySlide from '../components/CategorySlide';

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
        tittle: ["Glsmorous", "Glam"],
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
                                        <HeroSlide details={current} />
                                    </>
                                );
                            })}

                        </Slider>
                    </div>

                </div>
                {/* Slider Section End */}

                {/* Marquee Section Start */}
                <div className='bg-yellow-100 flex text-nowrap overflow-x-hidden marqueeContainer lg:py-3'>
                    <div className='py-2 flex marqueeDiv max-md:py-3 max-md:text-lg'>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>
                        <p className='flex gap-2 items-center text-xl px-4'> <HiBolt /> <span> Spring Clearance Event: Save Up to 70% </span></p>

                    </div>
                    <div className='py-5 flex marqueeDiv max-md:py-3 max-md:text-lg'>
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
                <CategorySlide />
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

                        <a href="" className="bg-black w-fit text-white text-md font-semibold rounded md:px-7 px-4 py-2 md:py-3 mt-4 flex items-center gap-1 relative before:absolute before:content-[''] before:BgGradientMove before:h-full before:w-full before:translate-x-[100%] hover:before:-translate-x-[150%] before:duration-1000 overflow-hidden z-0 before:-skew-x-12 hover:before:BgGradient">
                            <span>Shop Collection</span>
                            <IoIosArrowForward className='text-white font-bold text-lg' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}




// background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.25), transparent);