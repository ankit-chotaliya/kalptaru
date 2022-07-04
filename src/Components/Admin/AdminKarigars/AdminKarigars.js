import React, { useEffect,useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AddKarigar from '../../AddKarigar/AddKarigar';
import AddKarigarCsv from '../../AddKarigar/AddKarigarCsv';
import './AdminKarigars.css';
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../../Helper/Loader/Loader';
import AdminKarigarTable from '../../Helper/AdminKarigarTable/AdminKarigarTable'

function AdminKarigars() {

    const navigate = useNavigate();
    const Karigars = useSelector(state=>state.karigar);
    const [addKarigarModal,setAddKarigarModal]=useState(false);
    const [addKarigarCsvModal, setAddKarigarCsvModal] = useState(false);
    const [data, setData] = useState([])
  
    useEffect(() => {
        if (Karigars.success==true) {
            setData(Karigars.data.karigar);
        }
    }, [Karigars])
    const handleKarigar=()=>{
        setAddKarigarModal(true);
    }
    const handleAddKarigarCsv = (e) => {
        e.preventDefault();
        setAddKarigarCsvModal(true);
    }

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
                <button className='no-add-btn mt-4 w-25' style={{ marginRight: "414px" }} onClick={handleKarigar} > Add Karigar </button>
                <AddKarigar
                    show={addKarigarModal}
                    onHide={() => setAddKarigarModal(false)}
                />
                <button className='no-add-btn mt-4 w-25' onClick={handleAddKarigarCsv}> Add Karigar using CSV </button>
                <AddKarigarCsv
                    show={addKarigarCsvModal}
                    onHide={() => setAddKarigarCsvModal(false)}
                />
                <AdminKarigarTable/>
                </div>              
            }
        </>
    )
}

export default AdminKarigars