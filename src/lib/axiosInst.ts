import axios from 'axios';

const axiosInst = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_DEPLOY_API_URL,
    headers: {
        "Content-Type": 'application/json'
    }
});

export default axiosInst;