import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ListView.css';
const ListView = (props) => {

    const navigate = useNavigate();

    const handleiconclick = () => {
        console.log('icon clicked')
    }

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
                    <div className='lv-property-name'>
                        {props.property3}
                    </div>
                </div>
                <div className='lv-value'>
                    <div className='lv-value-name'>
                        {props.value1}
                    </div>
                    <div className='lv-value-name'>
                        {props.value2}
                    </div>
                    <div className='lv-value-name'>
                        {props.value3}
                    </div>
                </div>
                <div className='lv-icon' onClick={handleiconclick}>
                    {props.icon}
                </div>
            </div>
        </>
    )
}

export default ListView