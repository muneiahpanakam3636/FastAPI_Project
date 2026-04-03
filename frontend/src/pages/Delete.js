import React,{useState} from "react";

function Delete(){
    const[email,setEmail] =useState("");

    const handleDelete =async()=>{
        const response =await fetch("http://localhost:8000/users/${email}",{
            method:"DELETE",
        });
        const data =await response.json();
        console.log(data);
        alert(data.message);
    };

    return(
        <div id="root" className="d-flex justify-content-center align-items-start"
        style={{
            backgroundColor:"rgba(177, 147, 11, 0.5)",
            minHeight:"100vh",
            padding:"80px",
            borderRadius:"10px"
        }}>
            <div style={{width:"100%",maxWidth:"450px"}}>
            <form onSubmit={handleDelete} className="card p-5 shadow">   
                <h2 className="text-center mb-4">Delete User</h2>
                <div className="mb-3" >
                <input type="email" placeholder="Enter Email to delete"  className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div >
                <button  className="btn btn-danger w-100">Delete</button>
                </div>
            </form>
            </div>
        </div>
    );
}


export default Delete;
   