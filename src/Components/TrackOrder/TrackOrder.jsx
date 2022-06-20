import React from 'react'
import Navbar from '../NavBar/Navbar'
import { AiOutlineArrowLeft, AiOutlineCloudDownload } from 'react-icons/ai'
import { RiEqualizerLine } from 'react-icons/ri'
import { GrFormView } from 'react-icons/gr'
import './TrackOrder.css';
import ListView from '../Helper/ListView/ListView';
import { useNavigate } from 'react-router-dom'
function TrackOrder() {
  const navigate = useNavigate();

  const handleopenEditForm = () => {
    navigate('/OrderView');
  }

  return (
    <>
      <Navbar />
      <div className='container no-main no-border pageview'>
        <div className='to-heading no-heading'>
          <div className='to-editorder'>
            <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Track Order
          </div>
          <div className='to-btns'>
            <button className='to-btn'>Urgent</button>
            <button className='to-btn to-btn-bt'>Fast</button>
            <button className='to-btn'>Normal</button>
          </div>
        </div>
        <div className='to-heading2 mt-4'>
          <div className='to-editorder2'>
            This Week
          </div>
          <div className='to-more-btn'>
            <RiEqualizerLine style={{ cursor: 'pointer' }} />
            <div className='to-moretext'>More</div>
          </div>
        </div>

        <div className='eo-container mt-4'>
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
        </div>
        <div className='to-heading2 mt-5'>
          <div className='to-editorder2'>
            This Week
          </div>
          <div className='to-more-btn'>
            <RiEqualizerLine style={{ cursor: 'pointer' }} />
            <div className='to-moretext'>More</div>
          </div>
        </div>

        <div className='eo-container mt-4'>
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
          <ListView
            property1="Client Name: "
            property2="Ref No: "
            value1="Parth Goti"
            value2="1234"
            icon={<GrFormView onClick={handleopenEditForm} />}
            icon1={<AiOutlineCloudDownload/>}
          />
        </div>
      </div>

    </>
  )
}

export default TrackOrder