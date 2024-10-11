import React from 'react'
import { useFormik } from 'formik'

const StudentDetails = () => {

    const initialValues = {
        Name: '',
        email: '',
        phone: '',
        school: '',
        gender: '',
        course: '',
        location: ''
    }

    const onSubmit = values => {
        console.log(values);
    }

    const validate = values => {
        const errors = {};

        if (!values.Name) {
            errors.Name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.school) {
            errors.school = 'Required'
        }

        if (!values.phone) {
            errors.phone = 'Enter Valid Number'
        } else if (!/^[0-9]{10,10}$/i.test(values.phone)) {
            errors.phone = 'Invalid';
        }

        if (!values.gender) {
            errors.gender = 'Required'
        }

        if (!values.course) {
            errors.course = 'Required'
        }

        if (!values.location) {
            errors.location = 'Required'
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

                    <form className='flex flex-col p-12 rounded  shadow-[rgba(0,0,0,0.5)_0px_3px_8px_1px]' action='#' onSubmit={formik.handleSubmit} >

                        <div className='grid grid-cols-2 gap-5 mb-5'>

                            <div className=''>
                                <label htmlFor="Name" className='text-white'>Name</label>
                                <input className='p-2 w-full' type="text" name="Name" id="Name" onChange={formik.handleChange} />
                                <span className='mb-6'>
                                    {
                                        formik.errors.Name ? <div className='text-red-300'>*{formik.errors.Name}</div> : null
                                    }
                                </span>
                            </div>

                            <div>
                                <label htmlFor="email" className='text-white'>Email</label>
                                <input className='p-2 w-full' type="email" name="email" id="email" onChange={formik.handleChange} />
                                <span className='mb-6'>
                                    {
                                        formik.errors.email ? <div className='text-red-300'>*{formik.errors.email}</div> : null
                                    }
                                </span>
                            </div>

                        </div>

                        <div className='grid grid-cols-2 gap-5 mb-5'>


                            <div>
                                <label htmlFor="email" className='text-white'>School</label>
                                <input className='p-2 w-full' type="text" name="school" id="school" onChange={formik.handleChange} />
                                <span className='mb-6'>
                                    {
                                        formik.errors.school ? <div className='text-red-300'>*{formik.errors.school}</div> : null
                                    }
                                </span>
                            </div>


                            <div>

                                <label htmlFor="phone" className='text-white'>phone</label>
                                <input className='p-2 w-full' type="number" name="phone" id="phone" onChange={formik.handleChange} />
                                <span className='mb-6'>
                                    {
                                        formik.errors.phone ? <div className='text-red-300'>*{formik.errors.phone}</div> : null
                                    }
                                </span>
                            </div>
                        </div>

                        <div className='grid grid-cols-3'>
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

                            {/* Course section */}

                            <div className='text-white flex flex-col'>
                                <p>Course</p>
                                <div>
                                    <input type="checkbox" name="course" id="it" onChange={formik.handleChange} value='it' />
                                    <label htmlFor="it">It</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="course" id="HRM" onChange={formik.handleChange} value='HRM' />
                                    <label htmlFor="HRM">HRM</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="course" id="English" onChange={formik.handleChange} value='English' />
                                    <label htmlFor="English">English</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="course" id="GraphicDesign" onChange={formik.handleChange} value='GraphicDesign' />
                                    <label htmlFor="GraphicDesign">Graphic Design</label>
                                </div>
                                <span className='mb-6'>
                                    {
                                        formik.errors.course ? <div className='text-red-300'>*{formik.errors.course}</div> : null
                                    }
                                </span>
                            </div>


                            {/* Location Section */}

                            <div>
                                <p className='text-white'>Institude Location</p>

                                <select name="location" id="location" onChange={formik.handleChange}>

                                    <option value="Select">Select City</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Bhavnagar">Bhavnagar</option>
                                    <option value="Bharuch">Bharuch</option>
                                    <option value="Ahemdabad">Ahemdabad</option>
                                </select>
                                <span className='mb-6'>
                                    {
                                        formik.errors.location ? <div className='text-red-300'>*{formik.errors.location}</div> : null
                                    }
                                </span>
                            </div>
                        </div>
                        <button type="submit" className='bg-green-600 text-white p-2'>Submit</button>
                    </form>
                </fieldset>
            </div>
        </div >
    )
}

export default StudentDetails
