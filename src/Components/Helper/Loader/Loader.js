import React  from "react";
import {ThreeDots} from "react-loader-spinner";
import "./Loader.css"

const Loader = () =>{
return(
<>
<div className="spinner">
        <ThreeDots type="ThreeDots" color="#2BAD60" height="100" width="100" />
</div>
</>
)}

export default Loader;