import React from "react";
import AuthLayouts from "../../components/layouts/AuthLayouts"
import CARD_2 from "../../assets/images/card2.png"

const Login = () =>{
  return(
    <AuthLayouts>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to log in</p>
      </div>
    </AuthLayouts>
  )
}

export default Login
