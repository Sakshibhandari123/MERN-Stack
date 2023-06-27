import React,  { useState }from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate } from "react-router-dom"

const View = () => {
  return(
    <div>
      <h3 className='text-center col-lg-6'>View Data</h3>
  <div className = 'd-flex w-75 vh-50 justify-content-center align-items-left'>
    <div className = 'w-50 border bg-secondary text-white p-5'>
      <form>
        <div>
          <label htmlFor="name">FirstName:</label>
          <input type="text" name='name' className='form-control' placeholder = 'Enter FirstName'></input>
        </div>
  
        <div>
          <label htmlFor="name">LastName:</label>
          <input type="text" name='name' className='form-control' placeholder = 'Enter Lastname'></input>
        </div>
  
        <div>
          <label htmlFor="name">RollNumber:</label>
          <input type="text" name='name' className='form-control' placeholder = 'Enter RollNumber'></input>
        </div>
  
        <div>
          <label htmlFor="name">MobileNumber:</label>
          <input type="text" name='name' className='form-control' placeholder = 'Enter MobileNumber'></input>
        </div>
  
        <div>
          <label htmlFor="name">City:</label>
          <input type="text" name='name' className='form-control' placeholder = 'Enter City'></input>
        </div><br/>
  
        <Button variant="btn btn-success" className="col-lg-6"  type="button">
          OK
          </Button> 
      </form>
    </div>
  </div>
  </div>
  )
}

export default View
