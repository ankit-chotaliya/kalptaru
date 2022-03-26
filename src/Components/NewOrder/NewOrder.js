import React from 'react'
import './NewOrder.css'
import {AiOutlineArrowLeft,AiOutlineUpload} from 'react-icons/ai'
const NewOrder = () => {
  return (
    <>
    
        <div className='container no-main no-border'>
            <div className='no-heading'>
              <AiOutlineArrowLeft/> New Order
            </div>
            <div className='no-form'>
              <form>
                <div class="row">
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="select-client">Select Client*</label>
                    <div className='d-flex justify-content-start'>
                      <select class="form-select no-select" aria-label="Default select example" id="select-client">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <button className='no-add-btn'> Add </button>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="select-karigar">Select Client*</label>
                    <div className='d-flex justify-content-start'>
                      <select class="form-select no-select" aria-label="Default select example" id="select-karigar">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <button className='no-add-btn'> Add </button>
                    </div>
                  </div>
                </div>


                <div className='row mt-4'>
                  <label for="product-category">Product Category*</label>
                  <div className='d-flex justify-content-start'>
                      <select class="form-select no-select-full-row" aria-label="Default select example" id="product-category">
                          <option selected>Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                      </select>
                  </div>
                </div>
                <div className='row'>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="ref-num">Reference Number</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="text" 
                    className="form-control no-input" 
                    placeholder="Reference Number"
                    id="ref-num"
                    />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="qty">Quantity*</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="number" 
                    className="form-control no-input" 
                    placeholder="Quantity"
                    id="qty"
                    />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="from">Weight</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="number" 
                    className="form-control no-input" 
                    placeholder="From"
                    id="from"
                    />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="to"></label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="number" 
                    className="form-control no-input" 
                    placeholder="to"
                    id="To"
                    />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="d-date">Delivery Date*</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="date" 
                    className="form-control no-select" 
                    placeholder="Pick a Date"
                    id="d-date"
                    />
                    <span className='no-validity'></span>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="melting">Melting</label>
                    <div className='d-flex justify-content-around'>
                    
                    <div class="form-check">
                      <input class="form-check-input no-radio" type="radio" name="melting" id="op1"/>
                      <label class="form-check-label" for="op1">
                        18
                      </label>
                    </div>
                    
                    <div class="form-check">
                      <input class="form-check-input no-radio" type="radio" name="melting" id="op2"/>
                      <label class="form-check-label" for="op2">
                        22
                      </label>
                    </div>

                    <input 
                    type="number" 
                    className="form-control no-checkbtn-text" 
                    name="melting"
                    placeholder='Custom'
                    />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="select-priority">Select Priority*</label>
                    <div className='d-flex justify-content-start'>
                      <select class="form-select no-select-full-row" aria-label="Default select example" id="select-priority">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="select-img">Attach upto 5 images</label>
                    <div className='d-flex justify-content-start'>
                      <span className='no-browse-text'>Browse Now <AiOutlineUpload className='no-browse-icon'/></span>
                      <input className='no-browse' id='select-img' type='file' multiple accept="image/png, image/gif, image/jpeg" />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="huid">HUID</label>
                    <div className='d-flex justify-content-start'>
                      <div class="form-check">
                        <input class="form-check-input no-radio" type="radio" name="huid" id="ophuid1"/>
                        <label class="form-check-label" for="ophuid1">
                          YES
                        </label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input no-radio" type="radio" name="huid" id="ophuid2"/>
                      <label class="form-check-label" for="ophuid2">
                        NO
                      </label>
                    </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-4">
                    <label for="melting">Order Type*</label>
                    <div className='d-flex justify-content-start'>
                    
                      <div class="form-check">
                        <input class="form-check-input no-radio no-order-type" type="radio" name="order-type" id="order-type1"/>
                        <label class="form-check-label" for="order-type1">
                          Custom Order
                        </label>
                      </div>
                      
                      <div class="form-check">
                        <input class="form-check-input no-radio no-order-type" type="radio" name="order-type" id="order-type2"/>
                        <label class="form-check-label" for="order-type2">
                          Stock Order
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6 col-sm-6 mt-4'>
                    <button className='no-add-more'>Add More</button>
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4'>
                    <button className='no-sub-btn'>Submit Order</button>
                  </div>
                </div>
              </form>
            </div>
           
        </div>
    </>
  )
}

export default NewOrder