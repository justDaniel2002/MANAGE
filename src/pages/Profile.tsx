import { useAtom } from 'jotai'
import React from 'react'
import { userAtom } from '../joital/atom'
import ProfileContainer from '../components/ProfileContainer'

export default function Profile() {
    const [user, setUser] = useAtom(userAtom)

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Thông tin tài khoản</h1>

        <div className='flex flex-col justify-center items-center h-full'>
            <ProfileContainer user={user} />
        </div>
    </div>
  )
}
