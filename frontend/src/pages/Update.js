import React  from "react";
import { useState } from "react";

function Update(){
    const[oldEmail, setOldEmail]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const handleUpdate=async(e)=>{
        e.preventDefault();
        const response =await fetch("http//localhost:8000/users/${oldEmail}",{
            method :"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({name,email}),

        });
        const data =await response.json();
        console.log(data);
        alert(data.message);
    };
    return(
        <div id="root" className="d-flex justify-content-center align-items-strat"
        style={{
            backgroundColor:"rgba(112, 21, 133, 0.5)",
            minHeight:"100vh",
            padding:"80px",
            borderRadius:"10px"
        }}>
            <div style={{width:"100%",maxWidth:"450px"}}>
            <form onSubmit={handleUpdate} className="card p-5 shadow">
            <h2 className="text-center mb-4">Update User</h2>
            <div className="mb-3"> 
            <input type="email" placeholder="Enter Current Email" className="form-control" value={oldEmail} onChange={(e)=>setOldEmail(e.target.value)} required />
            </div>  
            <div className="mb-3">
            <input type="text" placeholder="New Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>  
            <div className="mb-3">
            <input type="email" placeholder="new_Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>  
            <button type="submit" className="btn btn-secondary w-100">Update</button>
            </form>

            </div>
        </div>
    );
}

export default Update;