import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function AppLayout() {
  return (
    <div className='flex bg-white'>
      <div className='pl-5 pt-5 w-1/5'>
        <Navbar />
      </div>
      <div className='w-4/5'>
        <div className='mb-3'><Header /></div>
        <Outlet />
      </div>
    </div>
  )
}
