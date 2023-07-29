import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {

    const [bar,setBar] = useState(false)
    const handleClick =  () => setBar(!bar)
    return (
        <div>
            {/* Nav Bar */}
            <div className='w-full h-[70px] flex flex-row items-center px-4 bg-[] text-[#6c4ec7] font-semibold'>
                {/* Make new client */}
                <div className='w-1/3 pl-8'>
                    <button>Client Creator</button>
                </div>

                {/* Logo */}
                <div className='w-1/3 flex justify-center'>
                    <div className=''>
                        <p className='text-2xl'>App Name</p>
                    </div>
                </div>

                {/* User */}
                <div className='w-1/3 pr-8 flex flex-row justify-end items-center'>
                    <p className='pr-4'>Philip Yi</p>

                    {/* Hamburger Menu */}
                    <div onClick = {handleClick} className=' z-10'>
                        {!bar ? <FaBars className = 'cursor-pointer' />: <FaTimes className = 'cursor-pointer' />}
                    </div>
                    {/* Notification Menu */}
                    {/* Tells the user how many rounds they have done and is a notification board that refreshes every day */}
                    <div>

                    </div>
                </div>
            </div>
            {/* Profile Bar */}
            <div className='w-full h-[100px] bg-gray-200'>

            </div>
        </div>
    )
}

export default Navbar