import React from 'react'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='grid grid-cols-[1fr_2fr_1.5fr]'>
        <div>
          <Navbar />
        </div>
        <div>
            <Feed />
        </div> 
        <div className='bg-red-950 min-h-screen'>

        </div>
    </div>
  )
}

export default Home