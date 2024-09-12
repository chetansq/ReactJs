import React from 'react'
import { useContext } from 'react'
import { BgChange1 } from './Theme'
import { BgChange2 } from './Theme'
import Button from './Button'

const Card1 = () => {

    const  colors  = useContext(BgChange1);

    return (
        <div className={`h-screen ${colors}`}>
          
            <div className="w-[300px]  rounded-md border">
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                    <h1 className="text-lg font-semibold">  {colors}</h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        {colors}
                    </p>
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Card1
