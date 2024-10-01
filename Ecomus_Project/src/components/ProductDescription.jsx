import React from 'react'
import DescriptionNav from './DescriptionNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const ProductDescription = () => {
    return (

        // <BrowserRouter>
        //     <DescriptionNav />
        //     <Routes>
        //         <Route path="/description" element={<Descriptions />}></Route>
        //         <Route path="/review" element={<Reviews />}></Route>
        //         <Route path="/shipping" element={<Shippings />}></Route>
        //         <Route path="/returnpolicy" element={<Returnpolicy />}></Route>
        //     </Routes>
        // </BrowserRouter>

        // <div className='flex gap-6'>

        //     <div onClick={Descriptions}>Description</div>
        //     <div onClick={Reviews}>Review</div>
        //     <div onClick={Shippings}>Shipping</div>
        //     <div onClick={Returnpolicy}>Return policy</div>


        // </div>

        <div>
            <Descriptions />
            
        </div>

    )
}

export default ProductDescription


function Descriptions() {
    console.log('Description');
    return (
        <div className='h-screen w-screen '>
            This is Description section
        </div>
    )
}

function Reviews() {
    console.log('Review');
    return (
        <div>
            This is Review section
        </div>
    )
}

function Shippings() {
    console.log('Shipping');
    return (
        <div>
            This is Shipping section
        </div>
    )
}

function Returnpolicy() {
    console.log('Return policy');

    return (
        <div>
            This is Return policy section
        </div>
    )
}
