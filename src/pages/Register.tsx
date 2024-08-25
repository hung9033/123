import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import { useAuth } from '../hook/useAuth'

const Register = () => {
    const { Register} = useAuth();
  return (
    <>
        <div className='container'>
            <h1 className='text-center'>Register</h1>
            <AuthForm onSubmit={Register}/>
        </div>
    </>
  )
}

export default Register