import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import logo from "../../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='fixed pl-15 flex flex-col gap-5 py-2'>
        <div className='w-12 h-12'>
            <img className='invert w-full h-full cursor-pointer' src={logo} alt="" />
        </div>
        
        <div className='flex items-center gap-3 cursor-pointer'>
            <GoHomeFill className='w-7 h-8' />
            <h2 className='text-xl font-medium text-zinc-300'>Home</h2>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
            <CiSearch className='w-7 h-8' />
            <h2 className='text-xl font-medium text-zinc-300'>Explore</h2>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
            <VscBell className='w-7 h-8' />
            <h2 className='text-xl font-medium text-zinc-300'>Notification</h2>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
            <FiUserPlus className='w-7 h-8' />
            <h2 className='text-xl font-medium text-zinc-300'>Follow</h2>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
            <MdOutlineEmail className='w-7 h-8' />
            <h2 className='text-xl font-medium text-zinc-300'>Chat</h2>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
            <svg className="w-7 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.93945 4.96094C7.86569 2.03348 12.1756 1.29525 15.7754 2.77832C16.5718 3.07449 17.2661 3.49585 17.8076 3.8877L14.8018 5.27734C12.003 4.10183 8.79674 4.9012 6.83984 6.86035C4.27606 9.42495 3.69417 13.8137 6.48047 16.7822L6.75781 17.0664L0.124023 23C1.99897 21.0271 3.89507 18.5729 2.75977 15.8096C1.23981 12.1122 2.12498 7.77906 4.93945 4.96094ZM23.9004 0.0996094C21.6357 3.27424 20.7155 5.48855 21.7031 9.74023L21.6963 9.7334C22.4495 12.9342 21.6438 16.4839 19.043 19.0879C15.7641 22.3728 10.5173 23.1041 6.19629 20.1475L9.20898 18.751C11.9667 19.8351 14.984 19.3584 17.1523 17.1875C19.3206 15.0165 19.8074 11.8547 18.7178 9.22363C18.5107 8.72479 17.8897 8.599 17.4551 8.91992L8.58984 15.4717L21.2891 2.70117V2.71191L23.9004 0.0996094Z"></path></svg>
            <h2 className='text-xl font-medium text-zinc-300'>Grok</h2>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
            <FaRegUser className='w-6 h-8' />
            <h2 className='text-xl font-medium text-zinc-300'>Profile</h2>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
            <TbDotsCircleHorizontal className='w-7 h-8' />
            <h2 className='text-xl font-medium text-zinc-300'>More</h2>
        </div>

        <div>
            <button className='text-black font-medium cursor-pointer text-xl w-full px-15 py-3 bg-white rounded-full'>Post</button>
        </div>
    </div>
  )
}

export default Navbar