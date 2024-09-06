import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img1 from '../assets/asset28.jpeg'
import slider_img2 from '../assets/asset_27.jpeg'
import slider_img3 from '../assets/asset29.jpeg'

export const Sliders = () => {

    const settings = {
        dots: false,
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
            <div className="slider-container border-2 border-red-800 overflow-hidden h-[50%] ">
                <Slider {...settings}>

                    <div>
                        <div style={{ backgroundImage: `url(${slider_img1})` }} className=' h-screen bg-cover bg-center'>


                        </div>
                    </div>

                    <div>
                        <div style={{ backgroundImage: `url(${slider_img2})` }} className=' h-screen bg-cover bg-center'>


                        </div>

                    </div>
                    <div>
                        <div style={{ backgroundImage: `url(${slider_img3})` }} className=' h-screen bg-cover bg-center'>


                        </div>
                    </div>
                </Slider>

                <div>
                    <marquee behavior="alternate" direction="left" className='  text-black'>Spring Clearance Event: Save Up to 70%</marquee>
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