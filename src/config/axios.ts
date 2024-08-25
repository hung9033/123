import axios from 'axios';

export const configAxios = () =>{
    axios.defaults.baseURL = 'http://localhost:3000';
}