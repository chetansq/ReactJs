import React from 'react'

export default function Card() {
    return (
        <div className="border rounded-md w-[300px]">
            <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Laptop"
                className="rounded-md w-full h-[200px] object-cover"
            />
            <div className="p-4">
                <h1 className="font-semibold text-lg">About Macbook</h1>
                <p className="mt-3 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                </p>
                <button
                    type="button"
                    className="bg-black hover:bg-black/80 shadow-sm mt-4 px-2.5 py-1 rounded-sm font-semibold text-[10px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Read
                </button>
            </div>
        </div>
    )
}
