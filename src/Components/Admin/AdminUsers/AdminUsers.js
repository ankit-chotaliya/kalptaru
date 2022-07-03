import React,{ useEffect,useState }from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminUsers.css';
import { AiOutlineArrowLeft  } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import AdminUserTable from '../../Helper/AdminUserTable/AdminUserTable';



function AdminUsers() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);


    const [data, setData] = useState([])
    
    useEffect(() => {
        if(user.success==true){
            setData(user.data.user);
        }
    }, [user])

    return (
        <>
            <AdminNavbar />
            {
                // user.data.loading?<Loader/>:
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Users
                    </div>
                </div>
              <AdminUserTable/>
            </div>
            }
        </>
    )
}

export default AdminUsers