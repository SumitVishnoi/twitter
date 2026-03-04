import React from 'react'

const Feed = () => {
  return (
    <div className='flex flex-col gap-3 w-80 p-2 border border-zinc-500 hover:bg-zinc-900'>
      <div className='flex items-center gap-2'>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1722322426803-101270837197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
        <h1 className='text-white font-semibold'>username</h1>
      </div>
      <img src="https://images.unsplash.com/photo-1699888599894-7adf527c28e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9zdCUyMGltYWdlfGVufDB8fDB8fHww" alt="" />
      
    </div>
  )
}

export default Feed