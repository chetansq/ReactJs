import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {

    const path = useLocation()

    console.log(path);

    let pagelink = ''

    const pages_path = path.pathname
    console.log(pages_path);

    const page_split = pages_path.split('/')

    console.log(page_split);

    const page_filter = page_split.filter((link) => link !== "")

    const filter_path = page_filter.map((link) => {

        pagelink += `/${link}`
        return (
            <div key={link}>
                <Link to={pagelink}> <span> / </span> {link} </Link>

            </div>
        )
    })

    return (
        <div className='flex'>
            {
                filter_path
            }
        </div>
    )
}

export default Breadcrumb
