import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PDFGenerate=()=>{
    const serverURL="http://localhost:8080/"
    const orderId="";
    axios.post(serverURL+"order/getPDF/"+orderId)
    .then((res)=>{
        // console.log(res.data);
    }).catch((err)=>{
        // console.log(err);
    })
}
const PDFClient = () => {
    return (
        <>
            <button onClick={PDFGenerate}>Generate for Client</button>
        </>
    )
}

export default PDFClient