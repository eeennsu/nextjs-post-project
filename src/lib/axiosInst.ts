import axios from 'axios';

const axiosInst = axios.create({
    baseURL: `${process.env.NEXTAUTH_URL_INTERNAL}/api`
});

export default axiosInst;