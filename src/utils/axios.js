import axios from 'axios';

import store from '../store';
const axiosinstance=axios.create({
    baseURL:'http://localhost:8080/'
    // baseURL:'https://api.shreekalptaru.com/'
})

axiosinstance.interceptors.request.use((req)=>{

    const {user}=store.getState();
    const {admin}=store.getState();
    if(user.authenticate==true){
        if(user.data.accesstoken){ 
            const token=user.data.accesstoken;
            req.headers.Authorization=`Bearer ${token}` 
        }else{
            const istoken=localStorage.getItem("accessToken1");
            if(istoken){
                const token=istoken.split(" ")[0];
                req.headers.Authorization=`Bearer ${token}`
            }
        }
    }
    else if(admin.authenticate==true){
        if(admin.data.accesstoken){ 
            const token=admin.data.accesstoken;
            req.headers.Authorization=`Bearer ${token}` 
        }else{
            const istoken=localStorage.getItem("accessToken2");
            if(istoken){
                const token=istoken.split(" ")[0];
                req.headers.Authorization=`Bearer ${token}`
            }
        }
    }
   
    return req;
})

export default axiosinstance;