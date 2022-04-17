import React from 'react'
import './ListView.css';
const ListView = (props) => {
  return (
    <>
    <div className='lv-list pb-2 pt-2'>
        <div className='lv-property'>
            <div className='lv-property-name'>
            {props.property1}
            </div>
            <div className='lv-property-name'>
            {props.property2}
            </div>
        </div>
        <div className='lv-value'>
        <div className='lv-value-name'>
            {props.value1}
        </div>
        <div className='lv-value-name'>
            {props.value2}
        </div>
        </div>
        <div className='lv-icon'>
            {props.icon}
        </div>
    </div>
    </>
  )
}

export default ListView