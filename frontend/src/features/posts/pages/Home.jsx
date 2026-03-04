import React from 'react'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='flex'>
        <Navbar />
        <div>
            <Feed />
        </div>
    </div>
  )
}

export default Home