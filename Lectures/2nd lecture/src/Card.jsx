import React from 'react'
import Button from './button'

export default function Card({ tittle, text, imgLink }) {
    return (

        <div className="border rounded-md w-[300px]">
            <img
                src={imgLink}
                alt="Laptop"
                className="rounded-md w-full h-[200px] object-cover"
            />
            <div className="p-4">
                <h1 className="font-semibold text-lg">{tittle}</h1>
                <p className="mt-3 text-gray-600 text-sm">
                    {text}
                </p>

            </div>
            <Button />
        </div>

    )
}
