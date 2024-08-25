import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import { useAuth } from '../hook/useAuth'

const Login = () => {
    const { Login} = useAuth();
  return (
    <>
        <div className='container'>
            <h1 className='text-center'>Login</h1>
            <AuthForm onSubmit={Login}/>
        </div>
    </>
  )
}

export default Login