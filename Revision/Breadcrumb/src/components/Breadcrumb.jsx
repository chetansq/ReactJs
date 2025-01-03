import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumb = () => {

    const path = useLocation()

    console.log(path);

    const pages_path = path.pathname
    console.log(pages_path);

    return (
        <div>

        </div>
    )
}

export default Breadcrumb
