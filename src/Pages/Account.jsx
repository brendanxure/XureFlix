import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Myshow from '../Components/Myshow'
import { auth } from '../Firebase/Config'


const Account = () => {
    const navigate = useNavigate()
    
    useEffect(()=> {
        if(!auth?.currentUser) {
            return navigate('/')
        }
    }, [])

  return (
    <div>
        <Myshow />
    </div>
  )
}

export default Account