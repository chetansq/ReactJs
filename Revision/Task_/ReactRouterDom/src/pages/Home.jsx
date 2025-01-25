import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    price: 89.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img23/Wireless/Xiaomi/Note14/sale/golive/D183640088_IN_WLD_RedmiNote14_NewLaunch_SIM_1400x800_1._CB539538720_.jpg",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and stay connected.",
    price: 199.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/25thDec/D182254770_IN_WLD_vivo_X200_launch_launch_1400x800._CB538856465_.jpg",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and clear sound.",
    price: 49.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img22/WLA/2024/Launches24/iTel/Buds_Ace/Sale/D184039124_1400x800_1._CB538399423_.gif",
    category: "Audio"
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    description: "Experience stunning picture quality and vibrant colors.",
    price: 799.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/Flagship/OnePlus13R_NewLaunch/Teaser/GW/26thDec/D189060327_WLD_OnePlus_13R_NewLaunch__1400x800._CB538574147_.jpg",
    category: "Home Entertainment"
  },
  {
    id: 5,
    name: "Gaming Laptop",
    description: "Powerful performance for the ultimate gaming experience.",
    price: 1299.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/D174512533_WLD_-_iQOO_13_-_New_LaunchDesign_SIMcatpage_1400x800._CB538859515_.jpg",
    category: "Computers"
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "Monitor your activity and health metrics.",
    price: 59.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/bau/clp/26Dec/1400x800_8._CB538844889_.jpg",
    category: "Wearables"
  },
  {
    id: 7,
    name: "Digital Camera",
    description: "Capture stunning photos and videos with ease.",
    price: 499.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/25thDec/D142626032_IN_WLD_Samsung_M35-5G_Launch_catpage_1400x800._CB538856465_.jpg",
    category: "Photography"
  },
  {
    id: 8,
    name: "Smart Home Assistant",
    description: "Control your smart home devices with voice commands.",
    price: 99.99,
    imageUrl: "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/BAU/4Dec/D119951047_WLD_5Grevamp_March2024_1400x800_14._CB539119306_.jpg",
    category: "Smart Home"
  }
];

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
  };
  return (
    <div>
      <div>

        <div className="slider-container main_slider">
          <Slider {...settings} className=''>
            {
              products.map((item) => {
                return (
                  <div key={item.id} className=' '>
                    <div className='relative  ' style={{ backgroundImage: `url('${item.imageUrl}')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover",height:"80svh",width:""}}>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
            {/* <img src={item.imageUrl} alt="" className='w-full' /> */}
            {/* <div className=' absolute px-4 *:text-white flex flex-col justify-start top-20 items-start h-1/2'>
              <p className='text-5xl'>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
            </div> */}


      </div>
    </div>
  )
}

export default Home
