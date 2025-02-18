import React from 'react'

const AddUser = () => {
    return (
        <div>
            <div className="mb-4 flex justify-center ">

                <form className="grid grid-cols-2 gap-4" >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="tel"
                        name="contact"
                        placeholder="Contact"
                        required
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button type='submit' className="bg-blue-600 py-1 px-4 rounded text-white font-semibold hover:bg-blue-100 border hover:border-blue-600 hover:text-blue-600">Add User</button>
                </form>

            </div>
        </div>
    )
}

export default AddUser