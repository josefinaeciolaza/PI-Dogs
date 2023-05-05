import React from "react";
import { useNavigate } from "react-router-dom";



export default function LandingPage (){
    const navigate = useNavigate();

    function handleClick() {
      navigate('/home');
    }
  
    return (
        <div>
      <button onClick={handleClick}>
        Go to Home
      </button>
      </div>
    );
  }

