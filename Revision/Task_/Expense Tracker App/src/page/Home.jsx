import React from 'react'

const Home = () => {
    return (
        <div className='flex justify-around items-center h-[calc(100svh-56px)] bg-[#D3D9D4]  px-10 gap-5'>
            <div className='text-5xl leading-tight  '>
                <pre className='text-[#748D92]'>Hello,</pre>
                <pre className='text-[#212A31]'>Welcome To</pre>
                <pre className='text-[#124E66] underline'>Expense Tracker App</pre>
            </div>
            <div className=''>
                <img src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone-woman_23-2148555981.jpg?t=st=1737526003~exp=1737529603~hmac=8cc9b6f03755d196587d1aa19d277debf413f1186cb6aab990998908584a9b90&w=600" alt=""  />
            </div>
        </div>
    )
}

export default Home
