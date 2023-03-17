import React from 'react'

const Nav = () => {
  return (
    <div className='py-4 px-12 w-full flex justify-between items-center absolute left-0 top-0'>
        <h1 className='text-red-600 font-bold text-4xl'>XureFlix</h1>
        <div>
            <button className='text-white py-1 px-4'>Sign In</button>
            <button className='text-white py-1 px-4 ml-2 bg-red-600 rounded-lg'>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav