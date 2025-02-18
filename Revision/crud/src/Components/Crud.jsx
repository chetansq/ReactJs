import React, { useState } from "react";

const Crud = () => {
    const [users, setUsers] = useState([

        {
            id: 1,
            name: "chetan",
            email: "chetan@gmail.com",
            contact: "9897954799",
            address: "Surat",
        },

    ]);


    return (
        <div className=" bg-[#FBE9D0] h-screen p-5">
            <div className="my-auto bg-[#90AEAD] container mx-auto  rounded-lg shadow-xl p-6">

                {/* hading */}
                <h1 className="text-3xl font-bold mb-4 text-center text-white shadow_ p-5">
                    CRUD Without Refreh / Reload
                </h1>

                <hr className="border border-gray-500 my-3" />

                <div className="flex items-center justify-between">
                    {/* Show Entries */}
                    <div className="mb-4 flex items-center gap-2">
                        <span>Show </span>
                        {/* <label for=""></label> */}

                        <select name="" id="" className="bg-gray-200 py-1 px-2">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                        <span>entries</span>
                    </div>

                    {/* Add user */}
                    <div className="mb-4 flex justify-center ">
                        <button className="bg-[#E64833] py-1 px-4 rounded text-white font-semibold hover:bg-red-100 border hover:border-[#E64833] hover:text-[#E64833]">Add User</button>
                    </div>

                    {/* Search bar */}
                    <div className="mb-4 flex items-center">
                        <label htmlFor="search" className="mr-2">
                            Search
                        </label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search..."
                            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                </div>

                {/* table data */}
                <table className="user-table w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">#</th>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Contact</th>
                            <th className="p-2 border">Address</th>
                            <th className="p-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((data, index) => (
                            <tr key={data.id}>
                                <td className="p-2 border text-center">{index + 1}</td>
                                <td className="p-2 border">{data.name}</td>
                                <td className="p-2 border">{data.email}</td>
                                <td className="p-2 border">{data.contact}</td>
                                <td className="p-2 border">{data.address}</td>
                                <td className="p-2 border">
                                    <button className="bg-[#244855] hover:bg-gray-200 hover:text-[#244855] border hover:border-[#244855] text-white font-bold py-1 px-2 rounded mr-1">
                                        Edit
                                    </button>
                                    <button className="bg-[#874F41] hover:bg-[#fae6e1]  border hover:border-[#874F41] text-white hover:text-[#874F41] font-bold py-1 px-2 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* pagination */}
                <div className="flex justify-between">

                    <div className="mt-4">
                        <p className="text-lg font-medium">Showing 1 Entries</p>
                    </div>

                    {/* pagination */}
                    <div className="mt-4 flex justify-center">
                        <button className=" bg-gray-100 text-gray-800 border hover:border-gray-800 font-bold py-2 px-4 rounded mr-2">
                            Previous
                        </button>
                        <div className="flex  gap-2">
                            <button className="bg-[#244855] hover:bg-gray-200 hover:text-[#244855] border hover:border-[#244855] text-white font-bold py-2 px-4 rounded mr-1">1</button>
                            <button className="py-2 px-4 border border-gray-300 rounded">2</button>
                            {/* <button className="py-2 px-4 border border-gray-300 rounded">3</button> */}
                        </div>
                        <button className=" bg-gray-100 text-gray-800 border hover:border-gray-800 font-bold py-2 px-4 rounded ml-2">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crud;
