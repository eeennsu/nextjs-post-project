import axios from 'axios';

const axiosInst = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_AUTH_URL}/api`,
    headers: {
        "Content-Type": 'application/json'
    }
});

export default axiosInst;