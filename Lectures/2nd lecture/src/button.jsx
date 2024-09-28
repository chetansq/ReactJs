import React from 'react'

function Button() {
    return (
        <div className='flex gap-3'>


            <button
                type="button"
                className="bg-black hover:bg-black/80 shadow-sm px-3 py-2 rounded-full font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Button with tailwind
            </button>

            <button
                type="button"
                className="btn btn-danger"
            >
                Button with bootstrap
            </button>
        </div>
    )
}
export default Button
