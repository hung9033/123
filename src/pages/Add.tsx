import React from 'react'
import ProductForm from '../components/ProductForm'
import { useProduct } from '../hook/useProduct';

const Add = () => {
    const { Add} = useProduct();
  return (
    <div>
            <h1>ADD</h1>
            <ProductForm onSubmit={Add}/>
        </div>
  )
}

export default Add