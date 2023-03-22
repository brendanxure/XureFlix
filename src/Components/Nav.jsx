import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/Config'
import {onAuthStateChanged, signOut} from 'firebase/auth'


const Nav = () => {
// const navigate = useNavigate()
const [user, setuser] = useState()

  console.log(auth?.currentUser?.email)

  const logout = ()=> {
    const signout = async()=> {
    try {
      await signOut(auth)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }
  signout()
  }
  useEffect(()=>{
    const onmount = onAuthStateChanged(auth, (currentUser)=> {
      if (currentUser) {
        const uid = currentUser.uid;
        console.log(uid)
        console.log(currentUser)
        setuser(currentUser)
      }else {
        console.log('user is logged out')
      }
    })
    return () => {
      onmount()
    }
  }, [logout, auth, onAuthStateChanged])
  return (
    <div className='py-4 px-12 w-full flex justify-between items-center absolute left-0 top-0 z-10'>
        <h1 className='text-red-600 font-bold text-4xl cursor-pointer'><NavLink to='/'>XureFlix</NavLink></h1>
        <div>
            {user?  <button className='text-white py-1 px-4'><NavLink onClick={(e)=>console.log(e.target)} to='/Myshow'>Account</NavLink></button> :<button className='text-white py-1 px-4'><NavLink onClick={(e)=>console.log(e.target)} to='/Login'>Sign In</NavLink></button> }
           
            {user? <button className='text-white py-1 px-4 ml-2 bg-red-600 rounded-lg'><NavLink onClick={logout} to=''>Log Out</NavLink></button> :
            <button className='text-white py-1 px-4 ml-2 bg-red-600 rounded-lg'><NavLink onClick={(e)=>console.log(e.target)} to='/Signup'>Sign Up</NavLink></button>}
        </div>
    </div>
  )
}

export default Nav