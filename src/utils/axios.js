import axios from 'axios';
import store from '../store';
const axiosinstance=axios.create({
    baseURL:'http://localhost:8080'
})

axiosinstance.interceptors.request.use((req)=>{
    const {user}=store.getState();
    if(user.data.accesstoken){ 
        const token=user.data.accesstoken
        req.headers.Authorization=`Bearer ${token}` 
    }
    return req;
})

export default axiosinstance;