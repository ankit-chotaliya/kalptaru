import React from 'react'

const ImageView = (props) => {
  return (
    <>
     <div class='no-img-div'> 
                    <img class="no-img" src={props.imgsrc} width="150px" height="150px" alt="img"/>
                    <span onClick={()=>props.handleremoveImg(props.id,props.index)}>x</span>
    </div>
    </>
  )
}

export default ImageView