import React, { useState } from 'react'


const MultiFormHandling = () => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        language: '',
        city: ''
    });

    function gender(e) {
        e.preventDefault()
        console.log(data);
        setData(
            {
                username: '',
                email: '',
                password: '',
                gender: '',
                language: '',
                city: ''
            }
        )
    }

    return (
        <div className='flex flex-col gap-6 justify-center items-center h-screen bg-slate-400 '>
            <form action="" onSubmit={gender} className='flex flex-col justify-center items-center w-[30%] p-20 gap-4 rounded bg-gray-700 '>

                {/* username */}
                <label htmlFor="username"></label>
                <input type="text" placeholder='UserName' className='border p-2 px-5 rounded w-full' name="username" id='user_name' value={data.username} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                {/* email */}
                <label htmlFor="email"></label>
                <input type="text" placeholder='email' className='border p-2 px-5 rounded w-full' name="email" id='email' value={data.email} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                {/* password */}
                <label htmlFor="password"></label>
                <input type="password" placeholder='Password' className='border p-2 px-5 rounded w-full' name="password" id='pwd' value={data.password} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                {/* gender */}

                <div>
                    <input type="radio" name="gender" id="male" value="male" onChange={(e) => setData({ ...data, gender: e.target.value })} checked={data.gender === "male"} />
                    <label htmlFor="male">male</label>
                    <input type="radio" name="gender" id="female" value="female" onChange={(e) => setData({ ...data, gender: e.target.value })} checked={data.gender === "female"} />
                    <label htmlFor="female">female</label>
                </div>

                <div>
                    <input type="checkbox" name="language" id="gujarati" value="gujarati" onChange={(e) => setData({ ...data, language: e.target.value })} />
                    <label htmlFor="gujarati">Gujarati</label>
                    <input type="checkbox" name="language" id="hindi" value="hindi" onChange={(e) => setData({ ...data, language: e.target.value })} />
                    <label htmlFor="hindi">Hindi</label>
                    <input type="checkbox" name="language" id="english" value="english" onChange={(e) => setData({ ...data, language: e.target.value })} />
                    <label htmlFor="english">English</label>
                </div>

                <div>
                    <select name="city" id="city">
                        <option value="surat" name="surat" onChange={(e) => setData({ ...data, city: e.target.value })} checked={data.city === "surat"} >Surat</option>
                        <option value="vapi" name="vapi" onChange={(e) => setData({ ...data, city: e.target.value })}  >Vapi</option>
                        <option value="vadodara" name="vadodara" onChange={(e) => setData({ ...data, city: e.target.value })}  >Vadodara</option>
                        <option value="ahemdavad" name="ahemdavad" onChange={(e) => setData({ ...data, city: e.target.value })}  >Ahemdavad</option>
                        <option value="bhavanagar" name="bhavanagar" onChange={(e) => setData({ ...data, city: e.target.value })} >Bhavanagar</option>
                    </select>
                </div>

                {/* submit */}
                <button type='submit' className='bg-black text-white p-2 hover:bg-gray-300 hover:text-black rounded'>Submit</button>

            </form>

            {/* <div className='flex flex-col gap-4'>
                <div>
                    <p>your Name:{data.username}</p>
                    <p>password:{data.password}</p>
                </div>

            </div> */}
        </div>
    )
}

export default MultiFormHandling


