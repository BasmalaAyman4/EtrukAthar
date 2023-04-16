import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = `http://otrok.invoacdmy.com/api`
const axiosConfig = axios.create({
    baseURL: BASE_URL,
});


axiosConfig.interceptors.response.use(response=>{
    return response;
},async (err) => {
    if(err.response.status === 401){
        localStorage.removeItem('token')
        toast.error("error")
    }
    return Promise.reject(err)
});
export {axiosConfig};