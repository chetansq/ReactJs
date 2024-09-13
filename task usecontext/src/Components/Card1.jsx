import React from 'react'
import { ChangeTheme } from './Theme'
import Button from './Button'

import { useContext } from 'react'


const Card1 = () => {

    const Changetheme = useContext(ChangeTheme)
    console.log('card', Changetheme);
    return (
        <div className={` h-screen flex  justify-center items-center ${Changetheme[0]}`} >
            <div className='text-center bg-white p-3 rounded-md'>


                <div className="w-[300px] bg-white rounded-md border-2 m-2">
                    <img
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Laptop"
                        className="h-[200px] w-full rounded-md object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-lg font-semibold"> hello</h1>
                        <p className={`mt-3 text-sm rounded-md ${Changetheme[0]} ${Changetheme[1]} `}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?

                        </p>

                    </div>
                </div>
                <Button />
            </div>

        </div>
    )
}

export default Card1
