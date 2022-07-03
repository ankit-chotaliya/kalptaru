import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AddUser from '../AdminUsers/AddUser';
import AddUserCsv from '../AdminUsers/AddUserCsv';
import './AdminUsers.css';
import { AiOutlineArrowLeft  } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AdminUserTable from '../../Helper/AdminUserTable/AdminUserTable';



function AdminUsers() {

    const navigate = useNavigate();
    const Users = useSelector(state => state.user);


    const [addUserModel, setAddUserModel] = useState(false);
    const [addUserCsvModal, setAddUserCsvModal] = useState(false);

    const [data, setData] = useState([])


    useEffect(() => {
        if (Users.success == true) {
            setData(Users.data.user);
        }
    }, [Users])



    const handleUser = (e) => {
        e.preventDefault();
        setAddUserModel(true);
    }

    const handleUserCsv = (e) => {
        e.preventDefault();
        setAddUserCsvModal(true);
    }


    return (
        <>
            <AdminNavbar />
            {
                Users.data.loading ? <Loader /> :
                    <div className='container no-main no-border pageview'>
                        <div className='to-heading no-heading'>
                            <div className='to-editorder'>
                                <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Users
                            </div>

                        </div>
                        <button className='no-add-btn mt-4 w-25' style={{marginRight:"414px"}} onClick={(e) => handleUser(e)}> Add User </button>
                        <AddUser
                            show={addUserModel}
                            onHide={() => setAddUserModel(false)}
                        />


                        <button className='no-add-btn mt-4 w-25' onClick={(e)=>handleUserCsv(e)}> Add User using CSV </button>
                        <AddUserCsv
                                show={addUserCsvModal}
                                onHide={() => setAddUserCsvModal(false)}
                            />

                        <AdminUserTable/>
                    </div>

            }
        </>
    )
}

export default AdminUsers