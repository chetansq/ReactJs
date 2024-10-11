import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"


const YupValidation = () => {
    const initialValues = {
        fullName: '',
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log(values);
    }

    // const validate = values => {
    //     const errors = {}
    //     if(!values.email){
    //         errors.email = 'Required'
    //     }else
    //     if (
    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //       ) {
    //         errors.email = 'Invalid email address';
    //       }
    //       return errors;
    // }

    const validationSchema = yup.object(
        {
            fullName: yup.string().required('please required'),
            email: yup.string().email('invalid email address').test(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).required('please required'),
            password: yup.string().required('please required')
        }
    )

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <div>
            <div className='flex flex-col gap-4 h-lvh justify-center items-center bg-slate-300'>
                <h1 className='text-center text-3xl bg-gray-500 text-white p-2 w-[35%] rounded'>Form with Formik in ReactApp</h1>
                <fieldset className=' w-[35%] border border-black p-3 rounded' style={{ backgroundImage: "url('https://media.istockphoto.com/id/2099730553/photo/black-grunge-texture-stone-texture-scratches-vignette-dark-background-stone-wall-concrete.webp?b=1&s=612x612&w=0&k=20&c=5N2zaR9S3jn0XaYNSC9zCIvyRb_kTimGbSQTcJFwp0o=')" }}>
                    {/* <legend className=' text-2xl uppercase p-2 shadow-[rgba(0,0,0,0.5)_0px_3px_8px] relative text-white top-6 bg-[rgba(0,0,0,0.5)] ' >form</legend> */}

                    <form className='flex flex-col p-12 rounded  shadow-[rgba(0,0,0,0.5)_0px_3px_8px_1px]' action='#' onSubmit={formik.handleSubmit} >
                        <label htmlFor="fullName" className='text-white'>FullName</label>
                        <input className='p-2' type="text" name="fullName" id="fullName" onChange={formik.handleChange} />
                        <span className='mb-6'>
                            {
                                formik.errors.fullName ? <div className='text-red-300'>*{formik.errors.fullName}</div> : null
                            }
                        </span>
                        <label htmlFor="email" className='text-white'>Email</label>
                        <input className='p-2' type="email" name="email" id="email" onChange={formik.handleChange} />
                        <span className='mb-6'>
                            {
                                formik.errors.email ? <div className='text-red-300'>*{formik.errors.email}</div> : null
                            }
                        </span>
                        <label htmlFor="password" className='text-white'>Password</label>
                        <input className='p-2' type="password" name="password" id="password" onChange={formik.handleChange} />
                        <span className='mb-6'>
                            {
                                formik.errors.password ? <div className='text-red-300'>*{formik.errors.password}</div> : null
                            }
                        </span>
                        <button type="submit" className='bg-green-600 text-white p-2'>Submit</button>
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default YupValidation
