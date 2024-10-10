import React from 'react'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik'
import * as Yup from 'yup'

const FormikComponent = () => {

    const initialValues = {
        fullName: '',
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log(values);
    }

    let EmailRegex = new RegExp()



    // let YupEmail = Yup.string().matches(EmailRegex , 'Invalid Email




    const validationschema = Yup.object({
        fullName: Yup.string().max(10, 'No More Then 10 Char').required('please required'),
        email: Yup.string().required('please required').email('Invalid').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'kjshdcasjh'),
        password: Yup.string().required('please required')
    })

    return (
        <div>
            <div className='flex flex-col gap-4 h-lvh justify-center items-center bg-slate-300'>
                <h1 className='text-center text-3xl bg-gray-500 text-white p-2 w-[35%] rounded'>Form with Formik in ReactApp</h1>
                <fieldset className=' w-[35%] border border-black p-3 rounded' style={{ backgroundImage: "url('https://media.istockphoto.com/id/2099730553/photo/black-grunge-texture-stone-texture-scratches-vignette-dark-background-stone-wall-concrete.webp?b=1&s=612x612&w=0&k=20&c=5N2zaR9S3jn0XaYNSC9zCIvyRb_kTimGbSQTcJFwp0o=')" }}>
                    {/* <legend className=' text-2xl uppercase p-2 shadow-[rgba(0,0,0,0.5)_0px_3px_8px] relative text-white top-6 bg-[rgba(0,0,0,0.5)] ' >form</legend> */}

                    <Formik validationSchema={validationschema} initialValues={initialValues} onSubmit={onSubmit}>

                        <Form className='flex flex-col p-12 rounded  shadow-[rgba(0,0,0,0.5)_0px_3px_8px_1px]' action='#'  >
                            <div className=''>
                                <label htmlFor="fullName" className='text-white'>FullName</label>
                                <Field className='p-2' type="text" name="fullName" id="fullName" />
                                <div className='text-white'>
                                    <ErrorMessage name='fullName' className='text-white'></ErrorMessage>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className='text-white'>Email</label>
                                <Field className='p-2' type="email" name="email" id="email" />
                                <div className='text-white'>
                                    <ErrorMessage name='email'></ErrorMessage>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className='text-white'>Password</label>
                                <Field className='p-2 mb-4' type="password" name="password" id="password" />
                                <div className='text-white'>
                                    <ErrorMessage name='password'></ErrorMessage>
                                </div>
                            </div>
                            <button type="submit" className='bg-green-600 text-white p-2'>Submit</button>
                        </Form>
                    </Formik>
                </fieldset>
            </div>






        </div>
    )
}

export default FormikComponent