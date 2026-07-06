import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import MessagePanel from '../components/MessagePanel'
import { useUser } from '../../user/hooks/useUser'

const Dashboard = () => {
    const {handleGetAllUsers, allUser} = useUser()

  useEffect(()=> {
    handleGetAllUsers()
  }, [])

console.log(allUser)
  return (
    <div className='w-full h-screen lg:flex-row flex flex-col gap-4 p-3'>
      <Sidebar users={allUser}/>
      <MessagePanel />
    </div>
  )
}

export default Dashboard
