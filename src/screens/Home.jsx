import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
            <span className="text-4xl font-black text-black mb-4">
                Welcome to my Calculator
            </span>
            <div className='flex'>
                <Link to="/sum" className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md mr-2 ">
                    Sum Number
                </Link>
                <Link to="/bmi" className="bg-blue-800 hover:bg-blue-800 text-white px-4 py-2 rounded-md mr-2 ">
                    Sum Number
                </Link>
            </div>
            
            
        </div>
    </>
  )
}

export default Home