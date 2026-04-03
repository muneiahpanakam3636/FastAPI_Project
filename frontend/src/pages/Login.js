import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

function Login(){
    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");
    const navigate =useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch("http://localhost:8000/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email,password}),
        })
            .then((response) =>response.json())
            .then((data)=>{
                console.log(data);
                

                localStorage.setItem("token",data.token);
                navigate("/home");
                
                
            })
            .catch((error)=>{
                console.error("Error:",error);
            });
        console.log(email,password);
    };
    return(
        <div id="root" className="d-flex justify-content-center align-items-start"
        style={{
            backgroundColor:"rgba(130, 158, 28, 0.52)",
            minHeight:"100vh",
            padding:"60px",
            borderRadius:"10px"
        }}>
            <div style={{width:"100%",maxWidth:"450px"}}>
            <form onSubmit={handleSubmit} className="card p-5 shadow">
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                <input type="email"  placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type="submit"className="btn btn-primary w-100">Login</button>
            </form>
        </div>
        </div>
    );
}

export default Login;