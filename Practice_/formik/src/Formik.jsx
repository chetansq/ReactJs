import React from 'react'
import { useFormik } from 'formik'
const Formik = () => {

    const initialValues = {
        fullName: "",
        email: "",
        password: ""
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validate = values => {
        const errors = {};

        if (!values.fullName) {
            errors.fullName = 'required'
        }
        if (!values.email) {
            errors.email = 'required'
        }
        if (!values.password) {
            errors.password = 'required'
        }

        return errors
    }
    const formik = useFormik(
        {
            initialValues,
            onSubmit,
            validate
        }
    )
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit} className='flex flex-col'>
                <input type="text" name="fullName" id="fullname" onChange={formik.handleChange} className='border border-black' placeholder='enter a fullname' />

                {
                    formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null
                }

                <input type="text" name="email" id="email" onChange={formik.handleChange} className='border border-black' placeholder='enter a email' />

                {
                    formik.errors.email ? <div>{formik.errors.email}</div> : null
                }

                <input type="text" name="password" id="password" onChange={formik.handleChange} className='border border-black' placeholder='enter a password' />
                {
                    formik.errors.password ? <div>{formik.errors.password}</div> : null
                }

                <button type='submit' className='bg-slate-500 text-white p-2 rounded'>submit</button>
            </form>
        </div>
    )
}

export default Formik
