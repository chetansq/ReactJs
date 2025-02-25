import React, { useState, useEffect } from "react";
import User_Data from "../CrudData.json"
import axios from "axios";

const Crud = () => {

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
                        <button className="bg-[#E64833] py-1 px-4 rounded text-white font-semibold hover:bg-red-100 border hover:border-[#E64833] hover:text-[#E64833]"> <AddUser />
                        </button>
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
                        {User_Data.User_Data.
                            map((data, index) => (
                                <tr key={data.id}>
                                    <td className="p-2 border text-center">{index + 1}</td>
                                    <td className="p-2 border">{data.name}</td>
                                    <td className="p-2 border">{data.email}</td>
                                    <td className="p-2 border">{data.contact}</td>
                                    <td className="p-2 border">{data.address}</td>
                                    <td className="p-2 border">
                                        <button className="bg-[#244855] hover:bg-gray-200 hover:text-[#244855] border hover:border-[#244855] text-white font-bold py-1 px-2 rounded mr-1">
                                            <Edit />
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


export const AddUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            contact: "",
            address: "",
        },
    );


    const handleSubmit = () => {
        axios.post("http://localhost:3000/User_Data", user)
        console.log("user", user);
    };

    return (
        <div>
            {/* Modal toggle */}
            <button
                onClick={() => setIsOpen(true)}

            >
                Add User
            </button>

            {/* Main modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
                >
                    <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white flex justify-center items-center"
                            >
                                <svg
                                    className="w-3 h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-4">
                            <form className="grid text-left  gap-4" >

                                {/* Name */}
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Xyz"
                                    required
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                />

                                {/* Email */}
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="abc@gmail.com"
                                    required
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                />

                                {/* Contact */}
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Contact
                                </label>
                                <input
                                    type="tel"
                                    name="contact"
                                    placeholder="xxxxxxxxxx (10 digit)"
                                    required
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setUser({ ...user, contact: e.target.value })}

                                />

                                {/* Address */}
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="add your address home/comapny"
                                    required
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                                />

                                <button onClick={handleSubmit} type='submit' className="bg-blue-700 py-2 px-4 rounded text-white font-semibold hover:bg-blue-100 border hover:border-blue-600 hover:text-blue-600" >Add User</button>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export const Edit = () => {
    const [isOpen, setIsOpen] = useState(false);

    // let edit = User_Data;
    // console.log(edit);

    const [editUser, setEditUser] = useState(
        {
            name: "",
            email: "",
            contact: "",
            address: "",
        },
    );

    console.log("editUser", editUser.name);

    const getData = () => {
        axios.get("http://localhost:3000/User_Data").then((response) => setEditUser(response.data)).catch((error) => {
            console.log(error);
        });
    };
    const handleSubmit = () => {

    }
    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            {/* Modal toggle */}
            <button
                onClick={() => setIsOpen(true)}
            >
                Edit
            </button>

            {/* Main modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
                >
                    <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white flex justify-center items-center"
                            >
                                <svg
                                    className="w-3 h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-4">
                            <form className="grid text-left gap-4" >

                                {/* Name */}
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Xyz"
                                    required
                                    value={editUser.name}
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                                />

                                {/* Email */}
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="abc@gmail.com"
                                    required
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                                />

                                {/* Contact */}
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Contact
                                </label>
                                <input
                                    type="tel"
                                    name="contact"
                                    placeholder="xxxxxxxxxx (10 digit)"
                                    required
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setEditUser({ ...editUser, contact: e.target.value })}

                                />

                                {/* Address */}
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="add your address home/comapny"
                                    required
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
                                />

                                <button onClick={handleSubmit} type='submit' className="bg-blue-700 py-2 px-4 rounded text-white font-semibold hover:bg-blue-100 border hover:border-blue-600 hover:text-blue-600" >Add User</button>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};





{/* <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login to your account
                                </button>
 </form> */}

