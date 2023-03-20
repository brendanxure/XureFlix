import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../Firebase/Config'


const Nav = () => {

  console.log(auth?.currentUser?.email)

  const logout = async()=> {
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <div className='py-4 px-12 w-full flex justify-between items-center absolute left-0 top-0 z-10'>
        <h1 className='text-red-600 font-bold text-4xl cursor-pointer'><NavLink to='/'>XureFlix</NavLink></h1>
        <div>
            <button className='text-white py-1 px-4'><NavLink onClick={(e)=>console.log(e.target)} to='/Login'>{!auth && 'Sign In'}</NavLink></button>
            <button className='text-white py-1 px-4'><NavLink onClick={(e)=>console.log(e.target)} to=''>{auth && 'Account'}</NavLink></button>
            <button className={!auth ? 'hidden text-white py-1 px-4 ml-2 bg-red-600 rounded-lg': 'text-white py-1 px-4 ml-2 bg-red-600 rounded-lg'}><NavLink onClick={(e)=>console.log(e.target)} to=''>Log Out</NavLink></button>
            <button className={auth ? 'hidden text-white py-1 px-4 ml-2 bg-red-600 rounded-lg': 'text-white py-1 px-4 ml-2 bg-red-600 rounded-lg'}><NavLink onClick={(e)=>console.log(e.target)} to='/Signup'>Sign Up</NavLink></button>
        </div>
    </div>
  )
}

export default Nav