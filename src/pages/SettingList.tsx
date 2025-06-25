import React from 'react'
import TableContainer, { SettingColumns } from '../components/TableContainer'
import { settingsData } from '../data/setting'

export default function SettingList() {
  return (
    <div className='bg-white'>
        <div className='font-bold text-3xl p-10'>
            Setting List
        </div>
        <div className='min-h-screen w-full'>
            <TableContainer datas={settingsData} columns={SettingColumns}/>
        </div>
    </div>
  )
}
