import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const [username, setUsername] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const {loading, handleRegister} = useAuth()
        const navigate = useNavigate()
    
        const handleSubmit = async (e)=> {
            e.preventDefault()

            await handleRegister({username, email, password})
            navigate("/")
        }

        if(loading) {
            return (
              <main>
                <h1>loading...</h1>
              </main>
            )
        }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
          onInput={(e)=> setUsername(e.target.value)}
            className="bg-zinc-300 p-3 w-95 rounded outline-none placeholder:text-zinc-500"
            type="text"
            name="usename"
            id="username"
            placeholder="Enter username"
          />
          <input
          onInput={(e)=> setEmail(e.target.value)}
            className="bg-zinc-300 p-3 w-95 rounded outline-none placeholder:text-zinc-500"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <input
          onInput={(e)=> setPassword(e.target.value)}
            className="bg-zinc-300 p-3 w-95 rounded outline-none placeholder:text-zinc-500"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <button className="bg-zinc-900 text-white font-medium p-3 rounded-md active:scale-95 cursor-pointer">
            Register
          </button>
        </form>
          <p>Already have an account ? <Link to="/login" className='text-blue-800'>Loign</Link> </p>
      </div>
    </div>
  )
}

export default Register