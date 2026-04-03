import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error)=> console.error("Error:",error));
  }, []);

  return (
    <div id="root" className="text-center mt-5"
    style={{
      backgroundColor:"rgba(13, 163, 65, 0.78)",
      minHeight:"100vh",
      minWidth:"50vh",
      padding:"80px",
      borderRadius:"10px"
    }}
    >
      <h2 className="text-center mb-4" style={{backgroundColor:"rgba(14, 92, 116, 0.5)",display:"inline-block",padding:"5px",borderRadius:"5px"}}>Home Page</h2>

      <div>
        <h4>Full Stack Application</h4>
        <p>This Project is build by using the<strong>ReactJS</strong>for frontend, and <strong>FastAPI</strong> for backend, and alsoI have used <strong>MongoDB</strong> for databasemanagament.</p>
      </div>
      

      {data.map((item, index) => (
        <p key={index}>{item.name} - {item.email}</p>
      ))}
    </div>
  );
}

export default Home;