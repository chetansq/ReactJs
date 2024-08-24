import React from 'react'
import { useState } from 'react'
import Button from './Button';

// const Card = () => {
//     return (
//         <>
//             {/* first way for props passing */}
//             <div className='flex justify-around'>


//                 <div className="w-[300px] rounded-md border ">
//                     <img
//                         src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
//                         alt="Laptop"
//                         className="h-[200px] w-full rounded-t-md object-cover"
//                     />
//                     <div className="p-4">
//                         <h1 className="inline-flex items-center text-lg font-semibold">
//                             Bird &nbsp;
//                         </h1>
//                         <p className="mt-3 text-sm text-gray-600">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//                         </p>
//                         <div className="mt-4">
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Macbook
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Apple
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Laptop
//                             </span>
//                         </div>
//                         <button
//                             type="button"
//                             className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Read
//                         </button>
//                     </div>
//                 </div>


//                 <div className="w-[300px] rounded-md border ">
//                     <img
//                         src="https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_640.jpg"
//                         alt="Laptop"
//                         className="h-[200px] w-full rounded-t-md object-cover"
//                     />
//                     <div className="p-4">
//                         <h1 className="inline-flex items-center text-lg font-semibold">
//                             Nature &nbsp;
//                         </h1>
//                         <p className="mt-3 text-sm text-gray-600">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//                         </p>
//                         <div className="mt-4">
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Macbook
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Apple
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Laptop
//                             </span>
//                         </div>
//                         <button
//                             type="button"
//                             className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Read
//                         </button>
//                     </div>
//                 </div>


//                 <div className="w-[300px] rounded-md border ">
//                     <img
//                         src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
//                         alt="Laptop"
//                         className="h-[200px] w-full rounded-t-md object-cover"
//                     />
//                     <div className="p-4">
//                         <h1 className="inline-flex items-center text-lg font-semibold">
//                             Cat &nbsp;
//                         </h1>
//                         <p className="mt-3 text-sm text-gray-600">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//                         </p>
//                         <div className="mt-4">
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Macbook
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Apple
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Laptop
//                             </span>
//                         </div>
//                         <button
//                             type="button"
//                             className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Read
//                         </button>
//                     </div>
//                 </div>


//                 <div className="w-[300px] rounded-md border ">
//                     <img
//                         src="https://cdn.pixabay.com/photo/2020/05/22/18/20/apple-5206487_1280.jpg"
//                         alt="Laptop"
//                         className="h-[200px] w-full rounded-t-md object-cover"
//                     />
//                     <div className="p-4">
//                         <h1 className="inline-flex items-center text-lg font-semibold">
//                             Apple &nbsp;
//                         </h1>
//                         <p className="mt-3 text-sm text-gray-600">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//                         </p>
//                         <div className="mt-4">
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Macbook
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Apple
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 #Laptop
//                             </span>
//                         </div>
//                         <button
//                             type="button"
//                             className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Read
//                         </button>
//                     </div>
//                 </div>

//             </div>


//         </>
//     )
// }
const intialValue = "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";
const setImg = 'https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg';

const Card = () => {

    const [defaultImage, setImage] = useState(intialValue);
    const setImages = () => {
        setImage(setImg);
    }
    return (
        <>
            {/* second way for  */}
            <Button img={intialValue} />
            <div className="w-[300px] rounded-md border ">
                <img
                    src={defaultImage}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        Bird &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Macbook
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Apple
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Laptop
                        </span>
                    </div>
                    <button
                        onClick={setImages}
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>



                </div>
            </div>
        </>

    )
}

export default Card

