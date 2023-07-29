import React from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-col justify-center items-center pt-6'>
        <div className='w-[1000px] h-4 bg-slate-300'>
          <p className='text-4xl font-bold'>Rounds</p>
          <p>Fill this form out every day and log what you do to get approved by staff.</p>
          <form className='flex flex-col justify-start'>
            {/* Time and Date can all be automatically populated */}
            <input className='w-1/2 m-auto p-2 mt-5 bg-[#ccd6f6] rounded-lg' type='text' name='location' placeholder='Location'></input>
            <input className='w-1/2 m-auto p-2 mt-5 bg-[#ccd6f6] rounded-lg' type='text' name='activity_1' placeholder='Activity 1'></input>
            <input className='w-1/2 m-auto p-2 mt-5 bg-[#ccd6f6] rounded-lg' type='text' name='activity_2' placeholder='Activity 2'></input>
            <textarea className='w-1/2 m-auto p-2 mt-5 bg-[#ccd6f6] rounded-lg' name = 'message' row = '10' placeholder='Message'/>
            <input className='w-1/2 m-auto p-2 mt-5 bg-[#ccd6f6] rounded-lg' type='text' name='initial' placeholder='Initials'></input>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile