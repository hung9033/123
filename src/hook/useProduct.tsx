import axios, { AxiosError } from "axios"
import { Product, ProductInput } from "../types/product"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const useProduct = () =>{
    const nav = useNavigate();
    const [ products, setProducts] = useState<Product[]>([]);
    const Add = async (value : ProductInput) =>{
        try {
            await axios.post('/products', value)
            toast.success('Product added successfully')
            nav('/products')
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        }
    }
    const getAll = async () =>{
        try {
           const {data} = await axios.get('/products')
           setProducts(data);
            
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        }
    }
    useEffect(() =>{
        getAll()
    },[])
    
    const Delete = async (d : string) =>{
        try {
            await axios.post('/products', value)
            toast.success('Product added successfully')
            nav('/products')
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        }
    }
    return{ Add, products}
}