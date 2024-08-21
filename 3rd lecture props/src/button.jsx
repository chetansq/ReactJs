import React from 'react'

function Button({ data }) {

    console.log("button", data);

    return (
        <div className='flex gap-3'>

            <img src={data} alt=""  />

            {/* <button
                type="button"
                className="bg-black hover:bg-black/80 shadow-sm px-3 py-2 rounded-full font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                {data1}

            </button> */}

            {/* <button
                type="button"
                className="bg-black hover:bg-black/80 shadow-sm px-3 py-2 rounded-full font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                {value}
                
            </button> */}
            {/* <button
                type="button"
                className="bg-black hover:bg-black/80 shadow-sm px-3 py-2 rounded-full font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                {name}
            </button> */}

            {/* <div>
                {data}
            </div> */}


        </div>
    )
}
export default Button
