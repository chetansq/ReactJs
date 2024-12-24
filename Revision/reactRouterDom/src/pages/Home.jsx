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
    imageUrl: "https://cdn.pixabay.com/photo/2016/09/15/20/47/headphone-1672628_1280.jpg",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and stay connected.",
    price: 199.99,
    imageUrl: "https://cdn.pixabay.com/photo/2021/10/07/21/10/smartwatch-6689805_1280.jpg",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and clear sound.",
    price: 49.99,
    imageUrl: "https://cdn.pixabay.com/photo/2019/03/09/22/50/music-4045162_1280.jpg",
    category: "Audio"
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    description: "Experience stunning picture quality and vibrant colors.",
    price: 799.99,
    imageUrl: "https://img.freepik.com/free-photo/modern-indoor-living-room-with-comfortable-sofa-generative-ai_188544-19449.jpg?t=st=1735021938~exp=1735025538~hmac=e0c6383d4294d7aa09aaabb3e022cdc58e6f82435a2e000a551b6c5f1886ea68&w=1380",
    category: "Home Entertainment"
  },
  {
    id: 5,
    name: "Gaming Laptop",
    description: "Powerful performance for the ultimate gaming experience.",
    price: 1299.99,
    imageUrl: "https://cdn.pixabay.com/photo/2024/06/21/17/28/ai-generated-8844739_1280.jpg",
    category: "Computers"
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "Monitor your activity and health metrics.",
    price: 59.99,
    imageUrl: "https://cdn.pixabay.com/photo/2017/07/31/11/38/green-2557522_1280.jpg",
    category: "Wearables"
  },
  {
    id: 7,
    name: "Digital Camera",
    description: "Capture stunning photos and videos with ease.",
    price: 499.99,
    imageUrl: "https://cdn.pixabay.com/photo/2019/02/09/18/41/camera-3985711_1280.jpg",
    category: "Photography"
  },
  {
    id: 8,
    name: "Smart Home Assistant",
    description: "Control your smart home devices with voice commands.",
    price: 99.99,
    imageUrl: "https://cdn.pixabay.com/photo/2020/09/30/09/07/google-assistant-5615055_1280.jpg",
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

        <div className="slider-container ">
          <Slider {...settings} className=''>
            {
              products.map((item) => {
                return (
                  <div key={item.id} className='' style={{ backgroundImage: `url('${item.imageUrl}')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", height: '100svh', width: "100%" }}>
                    {/* <div>
                      <img src={item.imageUrl} alt="" className='w-full' />
                    </div> */}
                    <div>
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                      <p>{item.category}</p>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>


      </div>
    </div>
  )
}

export default Home
