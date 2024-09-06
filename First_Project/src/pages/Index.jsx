import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img1 from '../assets/asset28.jpeg'
import slider_img2 from '../assets/asset_27.jpeg'
import slider_img3 from '../assets/asset29.jpeg'

import { IoIosArrowForward } from "react-icons/io";

export const Sliders = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }
    return (
        <>


            <div>

            </div>
            <div className="slider-container">
                <div className="slider-container overflow-hidden h-[50%] ">


                    <Slider {...settings}>

                        <div>
                            <div style={{ backgroundImage: `url(${slider_img1})` }} className=' h-screen bg-cover bg-center relative'>
                                <div className='absolute z-40 text-black top-[28%] lg:top-[25%] px-4 lg:px-20 m-auto w-full'>
                                    <p className='text-4xl md:text-5xl lg:text-[80px]'>Glamorous <br /> Glam</p>
                                    <p className='md:text-xl my-4 mb-6 max-md:hidden'>From casual to formal, we've got you covered</p>

                                    <a href="" className='bg-black w-fit text-white text-md font-semibold rounded md:px-7 px-4 py-2 md:py-3 mt-4 flex items-center gap-1'>
                                        <span>Shop Collection</span>
                                        <IoIosArrowForward className='text-white font-bold text-lg' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ backgroundImage: `url(${slider_img2})` }} className=' h-screen bg-cover bg-center'>
                                <div className='absolute z-40 text-black top-[28%] lg:top-[25%] px-4 lg:px-20 m-auto w-full'>
                                    <p className='text-4xl md:text-5xl lg:text-[80px]'>Simply <br /> Style</p>
                                    <p className='md:text-xl my-4 mb-6 max-md:hidden'>From casual to formal, we've got you covered</p>

                                    <a href="" className='bg-black w-fit text-white text-md font-semibold rounded md:px-7 px-4 py-2 md:py-3 mt-4 flex items-center gap-1'>
                                        <span>Shop Collection</span>
                                        <IoIosArrowForward className='text-white font-bold text-lg' />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${slider_img3})` }} className=' h-screen bg-cover bg-center'>
                                <div className='absolute z-40 text-black top-[28%] lg:top-[25%] px-4 lg:px-20 m-auto w-full'>
                                    <p className='text-4xl md:text-5xl lg:text-[80px]'>Glamorous <br /> Glam</p>
                                    <p className='md:text-xl my-4 mb-6 max-md:hidden'>From casual to formal, we've got you covered</p>

                                    <a href="" className='bg-black w-fit text-white text-md font-semibold rounded md:px-7 px-4 py-2 md:py-3 mt-4 flex items-center gap-1'>
                                        <span>Shop Collection</span>
                                        <IoIosArrowForward className='text-white font-bold text-lg' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div>

                </div>
            </div>

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