import React from 'react'

const FormHandling = () => {
    
    return (
        <div className='flex  justify-center items-center h-screen bg-slate-400'>
            <form action="" className='flex flex-col justify-center items-center  gap-4 p-5'>
                <label htmlFor="username"></label>
                <input type="text" placeholder='UserName' className='border p-2 px-5 rounded' />

                <label htmlFor="password"></label>

                
                <input type="password" placeholder='password' className='border p-2 px-5 rounded' />


                <button type='submit' className='bg-blue-500 p-2'>Submit</button>
            </form>
        </div>
    )
}

export default FormHandling
