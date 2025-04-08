import React from "react";
import AuthLayouts from "../../components/layouts/AuthLayouts"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";

const Login = () =>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);

  const navigate= useNavigate();

  //Handle Login Form Submit
  const handleLogin = async (e) =>{}
  return(
    <AuthLayouts>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to log in</p>
      
        <form onSubmit={handleLogin}>
          <Input 
           value={email} 
           onChange={({ target })=> setEmail(target.value)}
           label="Email Address"
           placeholder="john@example.com"
           type="text" />
        </form>
      </div>
    </AuthLayouts>
  )
}

export default Login
