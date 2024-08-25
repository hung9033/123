import React from 'react'
import ProductForm from '../components/ProductForm'
import { useProduct } from '../hook/useProduct';

const Edit = () => {
    const { Edit , product} = useProduct();
  return (
    <div>
            <h1>ADD</h1>
            <ProductForm onSubmit={Edit} product={product}/>
        </div>
  )
}

export default Edit