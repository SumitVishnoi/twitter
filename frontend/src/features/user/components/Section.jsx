import React from 'react'
import UserCard from './UserCard'

const Section = ({title, children}) => {
  return (
    <div className="border-r-2 border-gray-700 px-2 h-screen overflow-y-auto ">
      <h1 className="text-3xl mb-4">{title}</h1>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

export default Section