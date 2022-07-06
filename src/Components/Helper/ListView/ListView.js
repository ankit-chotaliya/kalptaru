import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ListView.css';
const ListView = (props) => {

    const navigate = useNavigate();

    const handleiconclick = () => {
        // console.log('icon clicked')
    }

    return (
        <>
            <div className='lv-list pb-2 pt-2'>
                <div className='lv-indexnum'>
                      {props.indexnum}
                </div>
                <div className='lv-property'>
                    <div className='lv-property-name'>
                        {props.property1}
                    </div>
                    <div className='lv-property-name'>
                        {props.property2}
                    </div>
                    {
                        props.property3?<div className='lv-property-name'>
                        {props.property3}
                        </div>:null
                    }
                    {
                        props.property4?<div className='lv-property-name'>
                        {props.property4}
                        </div>:null
                    }
                    {
                        props.property5?<div className='lv-property-name'>
                        {props.property5}
                        </div>:null
                    }
                    {
                        props.propertyLabel?<div className='lv-property-label'>
                        {props.propertyLabel}
                        </div>:null
                    }
                </div>
                <div className='lv-value'>
                    <div className='lv-value-name'>
                        {props.value1}
                    </div>
                    <div className='lv-value-name'>
                        {props.value2}
                    </div>
                    {
                        props.value3?<div className='lv-value-name'>
                        {props.value3}
                        </div>:null
                    }
                    {
                        props.value4?<div className='lv-value-name'>
                        {props.value4}
                        </div>:null
                    }
                    {
                        props.value5?<div className='lv-value-name'>
                        {props.value5}
                        </div>:null
                    }
                    {
                        props.valueLabel?<div className='lv-value-label'>
                        {props.valueLabel}
                        </div>:null
                    }
                </div>
                <div className='lv-icon' onClick={handleiconclick}>
                    {props.icon1}
                </div>
                <div className='lv-icon' onClick={handleiconclick}>
                    {props.icon}
                </div>
            </div>
        </>
    )
}

export default ListView