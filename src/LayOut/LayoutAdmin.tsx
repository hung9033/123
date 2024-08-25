import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutAdmin = () => {
    const nav = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            nav('/login')
        }
    }, [token, nav])
    return (
        <>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default LayoutAdmin