import React,{useState} from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate= useNavigate();
  const [input,setInput]=useState({
   name:"",
   email:"",
   password:"",
  });

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login")
  }

  return (
    <div>
       <div className="container">
        <div className="row justify-content-center align-items-center inner-row">
            <div className="col-md-5">
               <div className="form-box">
                  <h2 className="fw-bold mb-3">Create Your Account</h2>
               </div>
               <form onSubmit={handleSubmit}>
               <div className="form-floating mb-3">
                   <input name="name" value={input.name} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                    type="text" className="form-control form-control-sm" placeholder="Name" id="floatingName" />
                   <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3">
                   <input name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
                   type="email" className="form-control form-control-sm" placeholder="Email" id="floatingEmail" />
                   <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                   <input name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                   type="password" className="form-control form-control-sm" placeholder="Password" id="floatingPassword" />
                   <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
               </form>
               <div className="mt-3 d-flex justify-content-center">
                <p>Already have account?<Link to ="/login">Login</Link></p>
            </div>
            </div>
        </div>
       </div>
    </div>
  );
}

export default Register;
