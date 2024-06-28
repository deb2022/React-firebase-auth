import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
    </>
  )
}

export default Rout