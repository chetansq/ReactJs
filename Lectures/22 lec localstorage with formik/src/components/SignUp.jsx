import React from 'react'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import { formDataSaveFromLocalStorage } from '../auth/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const naviagation = useNavigate()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('required'),
        email: Yup.string().email('required').required('invalid email address'),
        password: Yup.string().min(8, 'Password must be at lest 8 character').required("enter valid password ")
    })

    const onSubmit = (values) => {
        formDataSaveFromLocalStorage(values)
        naviagation('/login')
        console.log(values);
    }

    return (
        <div>
            <div className="h-screen flex justify-center items-center bg-gray-100">

                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={{ name: '', email: '', password: '' }}>
                        <Form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <Field
                                    type="email"
                                    name="email"

                                id="email"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                SignUp
                            </button>
                            {/* <div>
                                have an account? <a href="./Login.jsx" className='text-blue-600 '>Sign In</a>
                            </div> */}
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignUp
