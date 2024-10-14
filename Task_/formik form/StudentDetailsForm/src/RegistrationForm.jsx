import React from 'react'
import { useFormik } from 'formik'


const RegistrationForm = () => {

    const initialValues = {
        userId: '',
        password: '',
        Name: '',
        address: '',
        country: '',
        zipCode: "",
        email: '',
        gender: '',
        language: '',
        about: ""
    }

    const onSubmit = values => {
        console.log(values);
    }

    const validate = values => {
        const errors = {};

        if (!values.userId) {
            errors.userId = 'Required'
        } else if (!/^[0-9]{5,12}$/i.test(values.userId)) {
            errors.userId = 'Only number and must be of length 5 to 12.';
        }

        if (!values.password) {
            errors.password = 'Required'
        } else if (!/^[0-9]{5,12}$/i.test(values.password)) {
            errors.password = 'Only number and must be of length 5 to 12.';
        }

        if (!values.Name) {
            errors.Name = 'Required'
        } else if (!/^[A-Z]{2,}$/i.test(values.Name)) {
            errors.Name = 'Alphabates only';
        }

        if (!values.address) {
            errors.address = 'Required'
        }

        if (!values.country) {
            errors.country = 'Required'
        }

        if (!values.zipCode) {
            errors.zipCode = 'Enter Valid code'
        } else if (!/^[0-9]{5,12}$/i.test(values.zipCode)) {
            errors.zipCode = 'Invalid';
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.gender) {
            errors.gender = 'Required'
        }

        if (!values.language) {
            errors.language = 'Required'
        }

        if (values.about) {
            errors.about = 'Optional'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div>
            <div className='flex flex-col gap-4 h-lvh justify-center items-center bg-slate-300'>
                <h1 className='text-center text-3xl bg-gray-500 text-white p-2 w-[35%] rounded'>Student Details Form</h1>
                <fieldset className=' w-[50%] border border-black p-3 rounded' style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/92/25/09/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg')" }}>
                    {/* <legend className=' text-2xl uppercase p-2 shadow-[rgba(0,0,0,0.5)_0px_3px_8px] relative text-white top-6 bg-[rgba(0,0,0,0.5)] ' >form</legend> */}

                    <form className='flex  flex-col p-12 rounded  shadow-[rgba(0,0,0,0.5)_0px_3px_8px_1px]' action='#' onSubmit={formik.handleSubmit} >

                        {/* user Id  section */}
                        <div className=''>
                            <label htmlFor="userid" className='text-white'>user id:</label>
                            <input className='p-2 w-full' type="text" name="userId" id="userid" onChange={formik.handleChange} />
                            <span className='mb-6'>
                                {
                                    formik.errors.userId ? <div className='text-red-300'>*{formik.errors.userId}</div> : null
                                }
                            </span>
                        </div>

                        {/* password section */}
                        <div className=''>
                            <label htmlFor="password" className='text-white'>Password:</label>
                            <input className='p-2 w-full' type="password" name="password" id="password" onChange={formik.handleChange} />
                            <span className='mb-6'>
                                {
                                    formik.errors.password ? <div className='text-red-300'>*{formik.errors.password}</div> : null
                                }
                            </span>
                        </div>

                        {/* name section */}
                        <div className=''>
                            <label htmlFor="Name" className='text-white'>Name:</label>
                            <input className='p-2 w-full' type="text" name="Name" id="Name" onChange={formik.handleChange} />
                            <span className='mb-6'>
                                {
                                    formik.errors.Name ? <div className='text-red-300'>*{formik.errors.Name}</div> : null
                                }
                            </span>
                        </div>

                        {/* Addresss Section */}
                        <div className=''>
                            <label htmlFor="address" className='text-white'>Address:</label>
                            <input className='p-2 w-full' type="text" name="address" id="address" onChange={formik.handleChange} />
                            <span className='mb-6'>
                                {
                                    formik.errors.address ? <div className='text-red-300'>*{formik.errors.address}</div> : null
                                }
                            </span>
                        </div>

                        {/* Country Section */}
                        <div>
                            <p className='text-white'>Country</p>

                            <select name="country" id="country" onChange={formik.handleChange}>

                                <option value="Select">(Please select a country)</option>
                                <option value="India">India</option>
                                <option value="Uk">Uk</option>
                                <option value="U.S.A">U.S.A</option>
                                <option value="Australia">Australia</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                            <span className='mb-6'>
                                {
                                    formik.errors.country ? <div className='text-red-300'>*{formik.errors.country}</div> : null
                                }
                            </span>
                        </div>

                        {/* Zip code section */}
                        <div>
                            <label htmlFor="zipCode" className='text-white'>zipCode</label>
                            <input className='p-2 w-full' type="number" name="zipCode" id="zipCode" onChange={formik.handleChange} />
                            <span className='mb-6'>
                                {
                                    formik.errors.zipCode ? <div className='text-red-300'>*{formik.errors.zipCode}</div> : null
                                }
                            </span>
                        </div>

                        {/* Email Section */}
                        <div>
                            <label htmlFor="email" className='text-white'>Email</label>
                            <input className='p-2 w-full' type="email" name="email" id="email" onChange={formik.handleChange} />
                            <span className='mb-6'>
                                {
                                    formik.errors.email ? <div className='text-red-300'>*{formik.errors.email}</div> : null
                                }
                            </span>
                        </div>

                        {/* gender section */}
                        <div>
                            <p className='text-white'>Gender</p>
                            <input type="radio" id="male" name="gender" value="male" onChange={formik.handleChange} />
                            <label htmlFor="male" className='text-white'>male</label>

                            <br />
                            <input type="radio" id="female" name="gender" value="female" onChange={formik.handleChange} />
                            <label htmlFor="female" className='text-white'>female</label>
                            <br />
                            <span className='mb-6'>
                                {
                                    formik.errors.gender ? <div className='text-red-300'>*{formik.errors.gender}</div> : null
                                }
                            </span>

                        </div>


                        {/* Language section */}

                        <div className='text-white flex flex-col'>
                            <p>Language:</p>
                            <div>
                                <input type="checkbox" name="language" id="english" onChange={formik.handleChange} value='english' />
                                <label htmlFor="english">English</label>
                            </div>
                            <div>
                                <input type="checkbox" name="language" id="nonEngkish" onChange={formik.handleChange} value='nonEnglish' />
                                <label htmlFor="nonEngkish">Non Engkish</label>
                            </div>

                            <span className='mb-6'>
                                {
                                    formik.errors.language ? <div className='text-red-300'>*{formik.errors.language}</div> : null
                                }
                            </span>
                        </div>

                        {/* About section */}
                        <div className='mb-5'>
                            <label htmlFor="about" className='text-white'>About:</label>
                            <input className='p-2 w-full' type="text" name="about" id="about" onChange={formik.handleChange} placeholder='OPtional' />
                            <span className='mb-6'>
                                {
                                    formik.errors.about ? <div className='text-red-300'>*{formik.errors.about}</div> : null
                                }
                            </span>
                        </div>



                        <button type="submit" className='bg-green-600 text-white p-2'>Submit</button>
                    </form>
                </fieldset>
            </div>
        </div >
    )
}

export default RegistrationForm
