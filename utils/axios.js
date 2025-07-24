import { BASE_URL } from "@/common/api";
import axios from "axios";


const Axios = axios.create({
    baseURL : BASE_URL,
    withCredentials : true
})

export default Axios