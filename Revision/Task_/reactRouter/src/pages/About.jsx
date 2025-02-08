import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className='p-4 '>
                <img src="https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg" alt="img" className='mx-auto mb-5 h-56'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque id, error voluptatibus culpa voluptatem porro distinctio assumenda labore laudantium dolore perspiciatis nostrum alias earum necessitatibus aliquam beatae nobis deserunt! Blanditiis aliquam sint odio, libero harum quaerat sed consequuntur et doloribus laborum dolore vero dolorem architecto, numquam sit modi, excepturi corporis facilis aperiam. Architecto nesciunt quam dolore libero harum voluptatem molestias, cum minima aut praesentium, delectus voluptatibus nihil illo fuga ducimus itaque aspernatur qui ipsum, perspiciatis iure. Molestias repellat et nesciunt est omnis itaque incidunt quisquam, ullam placeat! Possimus magnam cupiditate, consequatur, excepturi sint culpa explicabo, omnis dolor saepe numquam odio?</p>
            </div>

            <nav className='flex bg-purple-600  text-xl text-white justify-around'>
                <Link to='help'>Help</Link>
                <Link to='faq'>Faq</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default About
