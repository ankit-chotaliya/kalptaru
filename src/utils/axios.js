import axios from 'axios';

import store from '../store';
const axiosinstance=axios.create({
    // baseURL:'https://shreekalptaru-backend.herokuapp.com/'
    baseURL:'https://sakshijain.in/'
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