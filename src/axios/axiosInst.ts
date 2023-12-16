import axios from 'axios';
import env from '../../env';

const axiosInst = axios.create({
    baseURL: env.NEXTAUTH_URL + '/api'
});

export default axiosInst;