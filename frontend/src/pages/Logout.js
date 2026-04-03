import React from "react";
import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate =useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/Login");
    };
    return(
        <div className="container mt-5"
        style={{width:"100%",maxWidth:"400px"}}>
            
        <button onClick={handleLogout}className="btn btn-danger w-100">Logout</button>
        </div>
    );

}

export default Logout;


