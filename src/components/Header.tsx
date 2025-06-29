import { useAtom } from 'jotai'
import React from 'react'
import { userAtom } from '../joital/atom'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Header() {
  const [user, setUser]: any = useAtom(userAtom)
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-end">
      <div><img className='rounded-full w-10' src={user?.avatar} /></div>
      <div className="ml-4 text-gray-800 font-semibold">
        {user?.username}
      </div>
      <div className='flex text-xl space-x-5 px-5'>
        <Icon icon="mdi:bell" />
        <Icon icon="tdesign:setting-1-filled" />
        <Icon icon="simple-line-icons:logout" />
      </div>
    </div>
  )
}
