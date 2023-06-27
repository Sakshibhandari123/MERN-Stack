import React,{useState,useEffect} from "react";
import { NavLink, useNavigate,useLocation  } from "react-router-dom"
// import {useLocation} from 'react-router-dom'
const StudentData = () => {

const [studentdata,setstudentdata]=useState()
useEffect(()=>{
  getData()
})
function getData(){
  let url="http://127.0.0.1:4000/getstudent"

  fetch(url)
  .then(res=>res.json())
  .then(res=>{
    setstudentdata(res)
    // console.log(res)

  })
} 
let location = useLocation();
console.log()
  return (
    <>
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1  class="p-3 mb-2 bg-secondary text-white"> Student Data</h1>
        </div>
        <div className="card-body"  class="p-3 mb-2 bg-secondary text-white">
          <table className="table table-bordered">
            <thead classname="bg-dark text-white">

          
              <tr>
                <td>FirstName</td>
                <td>LastName</td>
                <td>RollNumber</td>
                <td>MobileNumber</td>
                <td>City</td>
                <td>Action</td>
              
              </tr>
            </thead>
            <tbody>
              {
                studentdata && studentdata.map((item,index)=>{
                 return(
                  <tr key={index}>
                  <th scope="row">{item.FirstName}</th>
                  <td>{item.LastName}</td>
                  <td>{item.RollNumber}</td>
                  <td>{item.MobileNumber}</td>
                  <td>{item.City}</td>
                  <td>
          

                  <a  className="btn btn-success" href={`http://127.0.0.1:4000/pdf/${item.RollNumber}/`} >Certificate Download </a>

                </td>
                </tr>
                 )
               
                })
              }

            </tbody>
          </table>
        </div>
      </div>
      <NavLink to="/sRegister"><button type="button" class="btn btn-success">Add Student</button></NavLink>
    </div>
    </>
  );
};

export default StudentData;
