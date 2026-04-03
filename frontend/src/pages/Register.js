import React,{useState} from "react";


function Register(){
    const[name, setName] =useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        fetch("http://localhost:8000/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,email,password}),
        })
        .then(response=> response.json())
        .then((data) => {console.log(data);
        alert("User Registered Successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    };
    return(

        <div id="root" className="d-flex justify-content-center align-items-start"
        style={{
            backgroundColor:"rgba(145, 101, 24, 0.5)",
            minHeight:"100vh",
            padding:"60px",
            borderRadius:"5px"
        }}>
            <div style={{width:"100%",maxWidth:"450px"}}>
    
            <form onSubmit={handleSubmit} className="card p-5 shadow"  >
                <h2 className="text-center mb-5" >REGESTER</h2>

                <div className="mb-3">
                <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className="mb-3">
                <input type="email" placeholder="Email" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                <input type="password" placeholder="password" className="form-control" value={password}  onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
        </div>
        
    );
}


export default Register;