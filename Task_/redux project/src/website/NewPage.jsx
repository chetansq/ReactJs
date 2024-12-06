import React from 'react'
import data from '../data.json'






const NewPage = () => {
    return (
        <div>
            {data.products.map((product) => (
                <>
                    <li key={product.id}>
                        {product.title} - ${product.price}
                    </li>
                        <img src={product.thumbnail} alt="" className='h-50' />
                </>
            ))}
        </div>
    )
}

export default NewPage
