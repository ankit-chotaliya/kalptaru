import React,{useState} from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {GrDocumentUpdate} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import ModalHelper from '../Helper/Modal/ModalHelper';
import NavBar from '../NavBar/Navbar'
import EditOrderFormHelper from './EditOrderFormHelper';

const EditOrderForm = () => {
    const navigate=useNavigate();
    const [client,setClient]=useState("");
    const [karigar,setKarigar]=useState("");
    const [pCategory,setPCategory]=useState("");
    const [refNum,setRefNum]=useState("");
    const [qty,setQty]=useState(1);
    const [weightFrom,setWeightFrom]=useState(1);
    const [weightTo,setWeightTo]=useState(1);
    const [dDate,setDDate]=useState("");
    const [melting,setMelting]=useState("");
    const [priority,setPriority]=useState("");
    const [img,setImg]=useState([]);
    const [huid,setHuid]=useState("");
    const [oType,setOType]=useState("");
    const [viewModal,setViewModal]=useState(false);

    const handleClient=(e)=>{
        setClient(e.target.value);
      }
      const handleKarigar=(e)=>{
        setKarigar(e.target.value)
      }
      const handlePCategory=(e)=>{
          setPCategory(e.target.value);
      }
      const handleRefNum=(e)=>{
        setRefNum(e.target.value);
      }
      const handleQty=(e)=>{
        setQty(e.target.value);
      }
      const handleWFrom=(e)=>{
        setWeightFrom(e.target.value);
      }
      const handleWTo=(e)=>{
        setWeightTo(e.target.value);
      }
      const handledDate=(e)=>{
        setDDate(e.target.value);
      }
      const handleMelting=(e)=>{
        setMelting(e.target.value);
      }
      const handlePriority=(e)=>{
        setPriority(e.target.value);
      }
      const handleimg=(e)=>{
        console.log(e.target.files);
        setImg(e.target.files)
      }
      const handleHUID=(e)=>{
        setHuid(e.target.value);
      }
      const handleOType=(e)=>{
        setOType(e.target.value);
      }

      
    const handleModalReply=(e)=>{
        const reply=e.target.value;
        console.log(reply);
        if(reply == "true"){
            alert("updated successfully!");
        }else{
            alert("Not Updated!");
        }
        setViewModal(false);
    }

    const hadnleUpdateOrder=(e)=>{
        e.preventDefault();
        setViewModal(true);
    }
    return (
        <>
        <NavBar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Edit Order
            </div>
            
            <div className='no-form'>
              <form onSubmit={hadnleUpdateOrder}>
              <EditOrderFormHelper 
                key="1"
                number="1"
                handleClient={handleClient}
                handleKarigar={handleKarigar}
                handlePCategory={handlePCategory}
                handleRefNum={handleRefNum}
                handleQty={handleQty}
                handleWFrom={handleWFrom}
                handleWTo={handleWTo}
                handledDate={handledDate}
                handleMelting={handleMelting}
                handlePriority={handlePriority}
                handleimg={handleimg}
                handleHUID={handleHUID}
                handleOType={handleOType}
                img={img}
                />
                <div className='row eof-mob'>
                  <div className='col-md-12 col-sm-12 mt-4'>
                  <button type="submit" className='no-sub-btn eof-up-btn'  onClick={hadnleUpdateOrder}>Update Order</button>
                  <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<GrDocumentUpdate/>}
                    text="Are you sure you want to Edit this Order?"
                    onReply={handleModalReply}
                  />
                  </div>
                </div>
              </form>
            </div>
           
        </div>
        </>
    )
}

export default EditOrderForm