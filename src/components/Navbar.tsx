import React from 'react'
import { navLinks } from '../data/navlink'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Navbar() {
  return (
    <div className='min-h-screen w-64 bg-white shadow-md border-r border-gray-200 sticky'>
        {navLinks.map((link, index) => (
            <div key={index} className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
                <Icon icon={`${link.icon}`}></Icon>
                <span className="text-gray-700">{link.label}</span>
            </div>
        ))}
    </div>
  )
}
