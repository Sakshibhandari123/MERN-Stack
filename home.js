import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate  } from "react-router-dom"


const Home = () =>  {

  const history = useNavigate();

  const[inpval,setInpval] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
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
      const addData = (e)=>{
        e.preventDefault();

        const {username,email,password,confirmPassword} = inpval;

        if(username===""){
          alert("Name field is required")
        }else if(email===""){
          alert("Email field is required")
        }else if(password===""){
          alert("Password should be required and special character")
        }else if(confirmPassword === ""){
          alert("please confirm your password first")
        }else {
          console.log("Data added successfully");
          console.log('user daa',JSON.stringify([...data,inpval]))
          localStorage.setItem("createuser",JSON.stringify([...data,inpval]));
          fetch("http://127.0.0.1:4000/signup/", {
            // [{"username":"sikha","email":"sikha@123","password":"123","confirmpassword":"123"}]
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify({"username":username,"email":email,"password":password,"confirmPassword":confirmPassword}),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log('signup res',json))
            .catch(e=>{console.log("error",e)})
            ;
          history("/login")
        }

      }
      
        return (
          <>
          <div className="container" mt-3  class="p-3 mb-2 bg-secondary text-white">
            <section className='d-flex justify-content-between'>
                <div className= ".left-data mt-3 p-3" style={{width:"100%"}} >
                <h3 className='text-center col-lg-6'>Sign Up</h3>

                <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="text" name='username' onChange ={getdata} placeholder="Enter your Name" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="email" name='email' onChange ={getdata} placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
         <Form.Control type="password" name='password' onChange ={getdata} placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" name='confirmPassword' onChange ={getdata} placeholder="Confirm Password" />
      </Form.Group>
      <Button variant="btn btn-success" className="col-lg-6" onClick={addData} type="button">
        Submit
        </Button> 
    </Form>
    <p className='mt-3'>Already have an Account <span><NavLink to="/login">Sign In</NavLink></span></p>
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

export default Home