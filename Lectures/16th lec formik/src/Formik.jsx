import React from 'react'
// import { useFormik } from 'formik'


const Formik = () => {

    let FormData = {
        fullName: '',
        email: '',
        password: ''
    }


    return (
        <div>
            <h1 className='heading'>Form with Formik in ReactApp</h1>
            <div className='flex h-lvh justify-center items-center '>
                <fieldset className=' w-[35%] border border-black p-3 rounded' style={{ backgroundImage: "url('https://media.istockphoto.com/id/2099730553/photo/black-grunge-texture-stone-texture-scratches-vignette-dark-background-stone-wall-concrete.webp?b=1&s=612x612&w=0&k=20&c=5N2zaR9S3jn0XaYNSC9zCIvyRb_kTimGbSQTcJFwp0o=')" }}>
                    <legend className=' text-2xl uppercase p-2 shadow-[rgba(0,0,0,0.5)_0px_3px_8px] relative text-white top-6 bg-[rgba(0,0,0,0.5)] ' >form</legend>

                    <form className='flex flex-col p-12 rounded  shadow-[rgba(0,0,0,0.5)_0px_3px_8px_1px]' action='#' onSubmit={(e) => e.preventDefault} >
                        <label htmlFor="fullName" className='text-white'>FullName</label>
                        <input className='mb-6 p-2' type="text" name="fullName" id="fullName" onChange={(e) => {
                            FormData = { ...FormData, fullName: e.target.value }
                            console.log(FormData);

                        }} />
                        <label htmlFor="email" className='text-white'>Email</label>
                        <input className='mb-6 p-2' type="email" name="email" id="email" onChange={(e) => {
                            FormData = { ...FormData, email: e.target.value }
                            console.log(FormData);

                        }} />
                        <label htmlFor="password" className='text-white'>Password</label>
                        <input className='mb-6 p-2' type="password" name="password" id="password" onChange={(e) => {
                            FormData = { ...FormData, password: e.target.value }
                            console.log(FormData);

                        }} />
                        <button type="submit" className='bg-green-600 text-white p-2'>Submit</button>
                    </form>
                </fieldset>
            </div>






        </div>
    )
}

export default Formik