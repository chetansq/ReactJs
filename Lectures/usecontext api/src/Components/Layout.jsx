import React from 'react'
import Card from './Card'

const Layout = ({ children }) => {
    return (
        <div>
            <Card>

                {children}
                {/* <h1>this is card page </h1> */}
            </Card>

        </div>
    )
}

export default Layout