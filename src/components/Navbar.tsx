import React from 'react'
import { navLinks } from '../data/navlink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useAtom } from 'jotai'
import { userAtom } from '../joital/atom'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [user, setUser]:any = useAtom(userAtom)
  const navigate = useNavigate()

  return (
    <div className='h-[75%] rounded-lg py-5 bg-white shadow-md sticky top-5 px-5 '>

      <div className='text-lg font-bold text-center px-5 mb-5'>Thiết Bị Điện Hải Phòng</div>

      {user!=undefined && (
        <div className='text-lg font-thin text-neutral-500 mb-5 px-10 text-center'>Role: {user?.role}</div>
      )}
        {navLinks.filter(nav => nav?.role?.includes(user?.role)).map((link, index) => (
            <div onClick={() => navigate(link.link)} key={index} className="flex items-center px-5 mb-5 hover:bg-gray-200 cursor-pointer">
                <Icon className='text-2xl text-gray-400 mr-4' icon={`${link.icon}`}></Icon>
                <span className="text-gray-700">{link.label}</span>
            </div>
        ))}
    </div>
  )
}
