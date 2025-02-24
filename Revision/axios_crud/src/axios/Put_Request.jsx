import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Put_Request = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  console.log('userData', userData);


  const handleUserData = async (e) => {
    e.preventDefault()
    try {
      await axios.put('http://localhost:3000/profile_Data/02d5', userData)
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete('http://localhost:3000/profile_Data/02d5')
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className='bg-blue-600 py-4 my-4 text-white  w-fit px-2'>Put with Axios</h1>
      <form onSubmit={handleUserData} className='flex gap-4'>
        <input type="text" className="border rounded-2xl border-black " name="" id="" onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder='name'/>
        <input type="email" className="border rounded-2xl border-black" name="" id="" onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='email' />
        <input type="tel" className="border rounded-2xl border-black " name="" id="" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} placeholder='Phone' />
        <button className='bg-green-600 text-white  px-2  mx-2' type='submit'>submit</button>
      </form>
      <button className='bg-red-600 text-white py-1 px-2 my-3' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Put_Request