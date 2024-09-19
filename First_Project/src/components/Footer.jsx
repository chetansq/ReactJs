import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTiktok, FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import visa from '../assets/asset_83.png'
import paypal from "../assets/asset_84.png";
import masterCard from '../assets/asset_85.png'
import amex from '../assets/asset_86.png'
import dinnerclub from '../assets/asset_87.png'


// import logo from "../../assets/logo-white.svg";

export default function Footers() {
    return (
        <footer className="bg-white text-black flex  h-auto   items-center flex-col p-8">
            <div className="container mx-auto flex flex-col md:flex-row h-full ">
                <div className=" flex flex-col lg:flex-row w-[50%] justify-around sm:gap-4 ">
                    <div className="mb-6 md:mb-0 lg:w-[25%] w-full flex flex-col gap-3 text-[14px] text-black">
                        {/* <img src={logo} alt="logo" className="mb-4 lg:w-full sm:w-1/2" /> */}
                        <p className="sm:w-10/12 lg:w-full">
                            Address: 1234 Fashion Street, Suite 567 New York, NY 10001
                        </p>
                        <p className="flex gap-1">
                            Email: <a href=" ">info@fashionshop.com</a>
                        </p>
                        <p className="text-muted-foreground">
                            Phone: <span>(212) 555-1234</span>
                        </p>
                        <a href="#" className="text-primary hover:underline">
                            Get direction
                        </a>

                        <div className="flex gap-3 sm:w-[500px]">
                            <div className="w-[40px] h-[40px]  flex items-center justify-center rounded-[50%] p-1  border">
                                <CiFacebook className="text-5xl" />
                            </div>
                            <div className="w-[46px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                                <FaXTwitter className="text-2xl" />
                            </div>
                            <div className="w-[40px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                                <FaInstagram className="text-2xl" />
                            </div>
                            <div className="w-[40px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                                <FaTiktok className="text-2xl" />
                            </div>
                            <div className="w-[40px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                                <FaPinterestSquare className="text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="mb-3 text-[18px]">Help</h3>
                        <ul className="list-none flex flex-col gap-1 text-[14px] duration-1000 text-black">
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Returns + Exchanges
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    FAQ's
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Compare
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    My Wishlist
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" flex flex-col lg:flex-row sm:gap-14 lg:gap-0 sm:w-[50%] justify-around ">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-[18px]">About us</h3>
                        <ul className="list-none flex flex-col gap-3 text-[14px] mt-2 text-black">
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Visit Our Store
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-[#93f859]"
                                >
                                    Account
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0 flex flex-col lg:w-[40%]  w-full gap-5">
                        <h3 className="font-semibold">Sign Up for Email</h3>
                        <p className="text-[14px] w-[60%]  text-black">
                            Sign up to get first dibs on new arrivals, sales, exclusive
                            content, events and more!
                        </p>
                        <div className="flex relative">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="border border-muted rounded-l-lg p-2 bg-[#bda6a628]  w-[100%] h-12 "
                            />
                            <button className="bg-primary text-primary-foreground right-[3%] lg:right-[2%]   sm:right-[3%] max-[37px]:right-[2%]  py-2 px-5 rounded-lg absolute top-[10%] bg-black  hover:bg-primary/80">
                                Subscribe
                            </button>
                        </div>
                        {/* Dropdown */}
                        <div className="flex justify-around">

                            <div className="text-white flex items-center gap-2 relative">
                                <p>ENGLISH</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="h-[1px] bg-white w-[80%] mt-10"></p>
            <div className="flex sm:flex-row flex-col items-center gap-3 sm:gap-0 sm:justify-between w-3/4 py-6">
                <p className="text-[14px] text-[#545454] ">
                    © 2024 Ecomus Store. All Rights Reserved
                </p>
                <div className="flex gap-2">
                    <img src={visa} alt="" />
                    <img src={paypal} alt="" />
                    <img src={masterCard} alt="" />
                    <img src={amex} alt="" />
                    <img src={dinnerclub} alt="" />
                 
                </div>
            </div>
            {/* devloper name */}

        </footer>
    );
}