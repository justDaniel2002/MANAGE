import React from 'react'
import TableContainer, { AccountColumns } from '../components/TableContainer'
import { userData } from '../data/user'

export default function UserList() {
  return (
    <div className='bg-white'>
        <div className='font-bold text-3xl p-10'>
            Danh sách nguời dùng
        </div>
        <div className='min-h-screen w-full'>
            <TableContainer datas={userData} columns={AccountColumns}/>
        </div>
    </div>
  )
}
