import React, { useState } from 'react'
import axios from 'axios'


const Post_Request = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  })


  const handleSubmit = () => {
    try {
      let apiData = axios.post("http://localhost:3000/profile_Data", userData
      )

      console.log(apiData);
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div>
       <h1 className='bg-blue-600 py-4 my-4 text-white  w-fit px-2'>Post with Axios</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border rounded-2xl border-black" name="" id="" onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder='Name'/>
        <input type="email" className="border rounded-2xl border-black" name="" id="" onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='Email'/>
        <input type="tel" className="border rounded-2xl border-black" name="" id="" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} placeholder='Phone'/>
        <button className='bg-green-600 text-white py-1 px-2 my-3 mx-2' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Post_Request