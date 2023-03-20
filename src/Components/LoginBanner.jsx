import React, { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../Firebase/Config";


const LoginBanner = () => {

    const [formData, setFormData ] = useState({
        email: '', 
        password: ''
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }) )
    }
    
    const login = async(e) => {
        try {
            e.preventDefault()
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response.user)
        } catch (error) {
            console.error(error)
        }
       
    }
    
  return (
    <div className='relative'>
        <img className='w-full h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6'>
            <div className="bg-black/80 px-12 pb-[8rem] pt-12 lg:w-[40%] md:w-[50%] w-[80%]">
            <h1 className="text-3xl my-4 text-center">Sign In</h1>
            <form className="flex flex-col gap-4" onSubmit={login}>
                <input className="py-2 px-4 bg-slate-800 outline-none" type='email' name="email" value={email} onChange={onChange} placeholder='Email..' />
                <input className="py-2 px-4 bg-slate-800 outline-none" type='password' name="password" value={password} onChange={onChange} placeholder="Password" />
                <button className="bg-red-600 py-2 px-4">Login</button>
                <div className="flex justify-between">
                    <div>
                        <input id="remember" type='checkbox' />
                        <label className="text-slate-500" htmlFor="remember" >Remember me</label>
                    </div>
                    <p className="text-slate-500">Need Help?</p>
                </div>
                <p className="mb-[10px] text-slate-500">Don't have a xureflix account? <span className="text-white">Sign Up</span></p>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoginBanner