import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Product, ProductInput } from '../types/product';

type Props = {
    onSubmit: (data: ProductInput) => void;
    product?: Product;
}

const ProductForm = ({ onSubmit,product }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductInput>();
    useEffect(()=>{
        if(!product) return;
        reset(product)
    },[product])
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">title</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" {...register('title', { required: 'title is required' })} />
                    {errors.title && (<div id="emailHelp" className="form-text">{errors.title.message}</div>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">price</label>
                    <input type="text" className="form-control" {...register('price', { required: 'price is required' })} />
                    {errors.price && (<div id="emailHelp" className="form-text">{errors.price.message}</div>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">desc</label>
                    <input type="text" className="form-control" {...register('desc', { required: 'desc is required' })} />
                    {errors.desc && (<div id="emailHelp" className="form-text">{errors.desc.message}</div>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">status</label>
                    <select id="disabledSelect" className="form-select" {...register('status', { required: 'status is required' })} >
                        <option value='' >Disabled select</option>
                        <option value='Publish'>Publish </option>
                        <option value='Draft'>Draft </option>
                    </select>
                    {errors.status && (<div id="emailHelp" className="form-text">{errors.status.message}</div>)}
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input"  {...register('isSale')} />
                    <label className="form-check-label" htmlFor="exampleCheck1">isSale</label>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ProductForm