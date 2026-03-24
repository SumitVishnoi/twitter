import React, { useEffect } from 'react'
import { initializeSocketConnection } from '../services/chat.socket'


const Dashboard = () => {
    useEffect(()=> {
        initializeSocketConnection()
    }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
