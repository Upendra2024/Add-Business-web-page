import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate= useNavigate();
    const [input,setInput]=useState({
      email:"",
      password:"",
     });

    const handleLogin = (e) =>
    {
      e.preventDefault();
      const loggeduser = JSON.parse(localStorage.getItem("user"));
      if( input.email === loggeduser.email && input.password === loggeduser.password)
      {
        localStorage.setItem("loggedin",true)
        navigate("/")
      }
      else
      {
        alert("incorrect details entered.Please Check!")
      }   
    }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center inner-row">
            <div className="col-md-5">
               <div className="form-box">
                  <h2 className="fw-bold mb-3">Login</h2>
               </div>
               <form onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                   <input name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
                   type="email" className="form-control form-control-sm" placeholder="Email" id="floatingInput" />
                   <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                   <input name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                   type="password" className="form-control form-control-sm" placeholder="Password" id="floatingPassword" />
                   <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary">Login</button>
                </div>
               </form>
               <div className="mt-3 d-flex justify-content-center">
                <p>Don't have account?<Link to ="/register"><u>Sign Up</u></Link></p>
             </div>
            </div>    
        </div>
       </div>
    </div>
  );
}

export default Login;
