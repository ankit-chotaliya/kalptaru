import axios from 'axios';
import store from '../store';
const axiosinstance=axios.create({
    baseURL:'http://localhost:8080'
})

axiosinstance.interceptors.request.use((req)=>{
    const {user}=store.getState();
    if(user.token){ 
        req.headers.Authorization=`Bearer ${user.token}` 
    }else{
        const istoken=localStorage.getItem("accessToken");
        if(istoken){
            const token=istoken.split(" ")[0];
            req.headers.Authorization=`Bearer ${token}`
        }
    }
    return req;
})

export default axiosinstance;