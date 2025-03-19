import React from 'react'
import Navbar from '../user/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout;