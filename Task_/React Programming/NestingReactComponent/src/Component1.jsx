import React from 'react'
import Button from './Button'

const Component1 = () => {
    return (
        <div >
            <figure className="flex flex-col gap-5 items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                    <p className="my-4">If you care for your time, I hands down would go with this."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Bonnie Green</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                    </div>
                </figcaption>
            </figure>
            <div className='text-xl flex gap-5 items-center bg-slate-100 px-10 py-2 justify-center'>

                Like :   <Button />
            </div>
        </div>
    )
}

export default Component1
