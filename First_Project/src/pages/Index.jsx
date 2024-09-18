import React from 'react'

// Components
import CategorySlide from '../components/CategorySlide';
import Bestseller from '../components/Bestseller';
import { Sliders } from '../components/Slider';
import ShopTheLook from '../components/ShopTheLook';
import Happy_client from '../components/Happy_client';
import Shop_gram from '../components/Shop_gram';
import FlatIconBox from '../components/FlatIconBox';

const Index = () => {
    console.log("index page");
    return (
        <div>
            <main>
                <Sliders />
                <CategorySlide />
                <Bestseller />
                <ShopTheLook />
                <Happy_client />
                <Shop_gram />
                <FlatIconBox />
            </main>
        </div>

    )
}

export default Index
