import React, { useRef } from 'react'

const Scroll_image = () => {

    const img = useRef(0)

    return (
        <div>
            <div ref={img} className='flex gap-10 items-center h-screen'>
                <img src="https://cdn.pixabay.com/photo/2022/01/17/06/38/altai-6943982_1280.jpg" alt="altai" />
                <img src="https://cdn.pixabay.com/photo/2023/10/10/07/59/lake-8305673_1280.jpg" alt="lake" />
                <img src="https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg" alt="jungle" />
            </div>
            <div className='flex gap-2  text-white justify-center items-center  '>
                <button className='bg-blue-700 py-1 px-2'>1</button>
                <button className='bg-blue-700 py-1 px-2'>2</button>
                <button className='bg-blue-700 py-1 px-2'>3</button>
            </div>

        </div>
    )
}

export default Scroll_image
