import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const SRegister = () => {
    const[inpval,setInpval] = useState({
        FirstName:"",
        LastName:"",
        RollNumber:"",
        MobileNumber:"",
        City:""
      })
    const [data,setData] = useState([])
    console.log(inpval);
        const getdata = (e)=>{
          //console.log(e.target.value);
    
          const{value,name} = e.target;
          //console.log(value,name);
          setInpval(()=>{
            return{
              ...inpval,
              [name]:value
            }
          })
        } 
          const addData = async (e)=>{
            e.preventDefault();
    
            const {FirstName,LastName,RollNumber,MobileNumber,City} = inpval;
    
            if(FirstName===""){
              alert("Name field is required")
            }else if(LastName===""){
              alert("LastName is required")
            }else if(RollNumber===""){
              alert("RollNumber is required")
            }else if(MobileNumber===""){
                alert("please confirm your MobileNumber first")
              }else if(City===""){
                alert("City is required")
              }else {
              console.log("Student Registered successfully");
              console.log('signup data',inpval)
             
              fetch("http://localhost:4000/createstudent/", {
                      
            //       // Adding method type
               method: "POST",
                  
            //       // Adding body or contents to send
                  body: JSON.stringify({
                    FirstName,
                    LastName,
                    RollNumber,
                    MobileNumber,
                    City
                  }),
                  
            //       // Adding headers to the request
                  headers: {
                      "Content-type": "application/json; charset=UTF-8"
                  }
                  })

            //       // Converting to JSON
                  .then(response => response.json())

            //       // Displaying results to console
            .then(json =>{
              localStorage.setItem("token",JSON.stringify(json.token));
              if(json && json.token){
               

              }
               console.log('signin res',json)})
               
            .catch(e=>{console.log("error",e)})
            //       .then(json => console.log('student create res',json));
            //  localStorage.setItem("registerstudent",JSON.stringify([...data,inpval]));
            alert("Successfully Added");
              }
          }
    
            return (
              <>
              <div className="container" mt-3>
                <section className='d-flex justify-content-between'>
                    <div className= ".left-data mt-3 p-3" style={{width:"100%"}} >
                    <h3 className='text-center col-lg-6'>Student Registration</h3>
    
                    <Form>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Control type="text" name='FirstName' onChange ={getdata} placeholder="Enter your FirstName" />
          </Form.Group>
    
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Control type="text" name='LastName' onChange ={getdata} placeholder="Enter your LastName" />
          </Form.Group>
    
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
             <Form.Control type="RollNumber" name='RollNumber' onChange ={getdata} placeholder="RollNumber" />
          </Form.Group>
    
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
            <Form.Control type="MobileNumber" name='MobileNumber' onChange ={getdata} placeholder="MobileNumber" />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
            <Form.Control type="text" name='City' onChange ={getdata} placeholder="City" />
          </Form.Group>
          <Button variant="btn btn-success" className="col-lg-6" onClick={addData} type="button" >
           Register
            </Button> 
        </Form>
       
        </div>
                    <div className="right-data mt-5" style={{width:"100%"}}>
                        <div className="image1_img mt-5">
                            <img src="./image1.png" style={{maxWidth:700}}alt=""/> 
                        </div>
                        
                    </div>
                </section>
              </div>
              </>  
            )
  
}

export default SRegister
