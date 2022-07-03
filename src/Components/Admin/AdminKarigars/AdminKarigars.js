import React, { useEffect,useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminKarigars.css';
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../../Helper/Loader/Loader';
import AdminKarigarTable from '../../Helper/AdminKarigarTable/AdminKarigarTable'

function AdminKarigars() {

    const navigate = useNavigate();
    const Karigars = useSelector(state=>state.karigar);

    const [data, setData] = useState([])
  
    useEffect(() => {
        if (Karigars.success==true) {
            setData(Karigars.data.karigar);
        }
    }, [Karigars])



    return (
        <>
            <AdminNavbar />
            {
                Karigars.data.loading?<Loader/>:<div className='container-fluid no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Karigars
                    </div>
                </div>
                <AdminKarigarTable/>
                </div>              
            }
        </>
    )
}

export default AdminKarigars