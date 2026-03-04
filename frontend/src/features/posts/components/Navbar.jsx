import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { TbDotsCircleHorizontal } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
        <h1>Y</h1>
        <div className='flex items-center gap-2'>
            <GoHomeFill className='w-6 h-8' />
            <h2>Home</h2>
        </div>
        <div className='flex items-center gap-2'>
            <CiSearch className='w-6 h-8' />
            <h2>Explore</h2>
        </div>
        <div className='flex items-center gap-2'>
            <VscBell className='w-6 h-8' />
            <h2>Notification</h2>
        </div>
        <div className='flex items-center gap-2'>
            <FiUserPlus className='w-6 h-8' />
            <h2>Follow</h2>
        </div>
        <div className='flex items-center gap-2'>
            <MdOutlineEmail className='w-6 h-8' />
            <h2>Chat</h2>
        </div>
        <div className='flex items-center gap-2'>
            {/* <i class="ri-grok-ai-fill"><i> */}
            <h2>Grok</h2>
        </div>
        <div className='flex items-center gap-2'>
            <FaRegUser className='w-6 h-8' />
            <h2>Profile</h2>
        </div>
        <div className='flex items-center gap-2'>
            <TbDotsCircleHorizontal className='w-6 h-8' />
            <h2>More</h2>
        </div>
        <button>Post</button>
    </div>
  )
}

export default Navbar