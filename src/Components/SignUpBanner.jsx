import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../Firebase/Config'

const SignUpBanner = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

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
    console.log(auth?.currentUser?.email)
    
    const Login = (e) => {
        e.preventDefault()
        const submit = async() => {
            try {
                setLoading(true)
                await createUserWithEmailAndPassword(auth, email, password)
                setFormData({email:"", password: ""})
                setDoc(doc(db, 'userMovies', email), {
                    savedShow : []
                })
                navigate('/')
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        submit()
    }
  return (
    <div className='relative'>
        <img className='w-full h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6 text-white'>
            <div className="bg-black/80 px-12 pb-[8rem] pt-12 lg:w-[40%] md:w-[50%] w-[80%]">
            <h1 className="text-3xl my-4 text-center">Sign Up</h1>
            <form className="flex flex-col gap-4" onSubmit={Login}>
                <input className="py-2 px-4 bg-slate-800 outline-none" name='email' value={email} onChange={onChange} type='email' placeholder='Email..' />
                <input className="py-2 px-4 bg-slate-800 outline-none" name='password' value={password} onChange={onChange} type='password' placeholder="Password" />
                <button className="bg-red-600 py-2 px-4">{loading? 'Creating an account..' :'Sign Up'}</button>
                <div className="flex justify-between">
                    <div>
                        <input id="remember" type='checkbox' />
                        <label className='text-slate-500' htmlFor="remember" >Remember me</label>
                    </div>
                    <p className='text-slate-500'>Need Help?</p>
                </div>
                <p className="mb-[10px] text-slate-500">Already have a xureflix account? <span className='text-white'>Sign In</span></p>
            </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpBanner