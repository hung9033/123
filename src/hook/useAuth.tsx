import { toast } from "react-toastify"
import { AuthInput } from "../types/auth"
import axios from 'axios'
export const useAuth = () =>{
    const Register = async (value:AuthInput) =>{
        try {
            await axios.post('/register', value)
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        }
      
    }
    return{ Re}
}