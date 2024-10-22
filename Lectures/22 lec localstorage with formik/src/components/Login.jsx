import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { getFormDataFromLocalStorage } from '../auth/auth'


const Login = () => {
    // const [isSubmitting, setIsSubmiting] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('required').required('invalid email address'),
        password: Yup.string().min(8, 'Password must be at lest 8 character').required("enter password ")
    })

    const onSubmit = (values) => {
        // setIsSubmiting(true)
        setIsError(false)
        setIsSubmit(true)
        const user = getFormDataFromLocalStorage(values.email)

        setTimeout(() => {
            if (user && user.password === values.password) {
                localStorage.setItem('authenticate', true)
                navigate('/')
                // setIsSubmiting(false)
                setIsSubmit(false)
            } else {
                setIsError(true)
                // console.log(isSubmitting);
                // setIsSubmiting(false)
                setIsSubmit(false)
            }
        }, 2000

        )

        console.log(values)
    }

    return (
        <div>

            <div className="h-screen flex justify-center items-center bg-gray-100 ">

                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={{ email: '', password: '' }}>

                        {
                            () => (

                                <Form className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <Field
                                            type="email" name="email" id='email' disabled={isSubmit} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <Field
                                            type="password" name="password" id="password" disabled={isSubmit} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                                    </div>
                                    {isError && <span className='text-red-800 text-xs'>user not found</span>}

                                    {
                                        isSubmit && <div role="status" className='bg-indigo-600 text-white flex justify-center py-2'>
                                            <svg aria-hidden="true" className="w-8 h-8 text-black animate-spin dark:text-white fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    }
                                    {
                                        isSubmit === false && <button
                                            type="submit"
                                            className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Login
                                        </button>
                                    }

                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>

        </div>
    )
}

export default Login


