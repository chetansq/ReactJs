import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUp = () => {

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',

    }

    const onSubmit = values => {
        console.log(values);
    }

    const validationschema = Yup.object({
        userName: Yup.string().max(10, 'No More Then 10 Char').required('please required'),
        email: Yup.string().required('please required').email('Invalid').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email Address'),
        password: Yup.string().required('please required').matches(!/^[a-z]+[A-Z]+[0-9]+[!#$%^&*]{8,8}$/, 'password must has at least 8 character that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)'),
        confirmPassword: Yup.string().required('please required'),
    })

    return (
        <div>
            <Formik validationSchema={validationschema} initialValues={initialValues} onSubmit={onSubmit}>

                <Form className='flex flex-col p-12 rounded  shadow-[rgba(0,0,0,0.5)_0px_3px_8px_1px]' action='#' style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/92/25/09/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg')" }}>
                    {/* username section */}
                    <div className=''>
                        <label htmlFor="userName" className='text-white'>userName</label>
                        <Field className='p-2 w-full mb-4' type="text" name="userName" id="userName" />
                        <div className='text-red-600'>
                            <ErrorMessage name='userName' className='text-white'></ErrorMessage>
                        </div>
                    </div>

                    {/* Email section */}

                    <div>
                        <label htmlFor="email" className='text-white'>Email</label>
                        <Field className='p-2 w-full mb-4' type="email" name="email" id="email" />
                        <div className='text-red-600'>
                            <ErrorMessage name='email'></ErrorMessage>
                        </div>
                    </div>

                    {/* Password section */}

                    <div>
                        <label htmlFor="password" className='text-white'>Password</label>
                        <Field className='p-2 mb-4 w-full ' type="password" name="password" id="password" />
                        <div className='text-red-600'>
                            <ErrorMessage name='password'></ErrorMessage>
                        </div>
                    </div>

                    {/* Confirm password section */}

                    <div>
                        <label htmlFor="confirmPassword" className='text-white'>confirmPassword</label>
                        <Field className='p-2 mb-4 w-full ' type="password" name="confirmPassword" id="confirmPassword" />
                        <div className='text-red-600'>
                            <ErrorMessage name='confirmPassword'></ErrorMessage>
                        </div>
                    </div>
                    <button type="submit" className='bg-green-600 text-white p-2'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUp
