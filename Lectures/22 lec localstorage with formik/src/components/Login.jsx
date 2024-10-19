import React from 'react'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik'
import * as Yup from 'yup'



const Login = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('required').required('invalid email address'),
        password: Yup.string().min(8, 'Password must be at lest 8 character').required("enter valid password ")
    })

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div>

            <div className="h-screen flex justify-center items-center bg-gray-100">

                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={{ email: '', password: '' }}>
                        <Form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>

        </div>
    )
}

export default Login
