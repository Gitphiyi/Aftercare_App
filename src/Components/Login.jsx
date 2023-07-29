import React from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full h-screen  flex flex-col justify-center bg-[#ffd9b3b1]'>
            {/* Login Screen Container */}
            <div className='w-[400px] md:w-[800px] h-[600px] bg-white mx-auto rounded-[20px] flex flex-row'>
                {/* form */}
                <div className='w-full md:w-1/2 flex flex-col justify-center rounded-l-[20px]'>
                    <p className='text-center py-1 font-medium text-xl'>Login</p>
                    <form className='flex flex-col'>
                        <input className='w-1/2 m-auto p-2 mt-5 bg-[#ccd6f6] rounded-lg' name = 'username' type = 'username' placeholder='Username'/>
                        <input className='w-1/2 m-auto my-4 p-2 bg-[#ccd6f6] rounded-lg' name = 'password' type = 'password' placeholder='Password'/>
                        <button onClick = {()=>{navigate("/profile")}} className='font-medium border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-1 mx-auto flex items-center rounded-lg'>Sign In</button>
                    </form>
                </div>

                {/* right image website explanation */}
                <div className='w-1/2 hidden md:flex flex-col justify-center items-center rounded-r-[20px] md:bg-gradient-to-r from-[#ef3030] to-[#DE3163]'>
                    <p className='text-gray-200 font-medium text-2xl'>Welcome to App Name</p>
                </div>
            </div>
        </div>
    )
}

export default Login