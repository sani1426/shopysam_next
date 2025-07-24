import axios from "axios";
import SummaryApi , { baseURL } from "@/common/index";

const Axios = axios.create({
    baseURL : baseURL,
    withCredentials : true
})

export default Axios