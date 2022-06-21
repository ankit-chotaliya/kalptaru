import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AdminListView.css';
const AdminListView = (props) => {

    const navigate = useNavigate();

    const handleiconclick = () => {
        alert('Button clicked')
    }

    return (
        <>
            <div className='lv-list pb-2 pt-2'>
                <div className='lv-no'>
                    <div>
                        {props.no1}
                    </div>
                </div>
                <div className='lv-name'>
                    <div>
                        {props.name1}
                    </div>
                </div>
                <div className='lv-mobile'>
                    <div>
                        {props.mobile1}
                    </div>
                </div>
                 <div className='lv-status'>
                    {props.status_online}
                    {props.status_offline}
                </div>
                <div className='lv-active' onClick={handleiconclick}>
                    {props.button_active}
                </div> 
                <div className='lv-delete' onClick={handleiconclick}>
                    {props.button}
                </div> 
            </div>
        </>
    )
}

export default AdminListView