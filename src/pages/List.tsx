import React from 'react'
import { useProduct } from '../hook/useProduct'
import { Link } from 'react-router-dom';

const List = () => {
    const { products,Delete } = useProduct();
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Desc</th>
                        <th scope="col">isSale</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.status}</td>
                                <td>{product.isSale.toString()}</td>
                                <td>{product.desc}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className='btn btn-primary'>Edit</Link>
                                    <button onClick={()=> Delete(product.id)} className='btn btn-danger'>Delete</button>
                                </td>
                                
                            </tr>

                        )
                    })}

                </tbody>
            </table>

        </>
    )
}

export default List