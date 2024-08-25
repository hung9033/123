import React from 'react'
import {useForm} from 'react-hook-form'
import { AuthInput } from '../types/auth';
type Props = {
    onSubmit : (data: AuthInput) => void;
}

const AuthForm = ({onSubmit}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<AuthInput>();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', {required:'Email is required'})} />
                    {errors.email && (<div id="emailHelp" className="form-text">{errors.email.message}</div>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password', {required:'password is required'}, )} />
                    {errors.password && (<div id="emailHelp" className="form-text">{errors.password.message}</div>)}
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}

export default AuthForm