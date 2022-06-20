import React  from "react";
import {ThreeDots} from "react-loader-spinner";
import "./Loader.css"

const Loader = (props) =>{
return(
<>
<div className="spinner">
        
        <ThreeDots type="ThreeDots" color="#2BAD60" height="50" width="100" />
        
        {
            props.msg?<>{props.msg}</>:<>Please Wait..</>
        }
</div>
</>
)}

export default Loader;