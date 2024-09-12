import React from 'react'

const Button = () => {
    return (
        <div>
            <button
                type="button"
                className="mt-4 rounded-sm bg-blue-600 px-4 py-1 text-xl  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Read
            </button>
        </div>
    )
}

export default Button