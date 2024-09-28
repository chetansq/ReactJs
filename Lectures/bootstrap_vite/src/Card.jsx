import React from "react";
import image from "./assets/img.avif"
function Card() {
    return (
        <>
            <div>
                <div className="">
                    <img src={image} alt="images" className="" />
                </div>

                <div>
                    <p className="bg-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime debitis odio itaque voluptates error, sunt id possimus, ducimus, nisi tempora deleniti eveniet delectus ea. Saepe dolor asperiores repellendus molestiae. F</p>
                </div>
            </div>
        </>
    )
}

export default Card