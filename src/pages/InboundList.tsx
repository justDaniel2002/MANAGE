import React from 'react'
import TableContainer, { InboundColumns, OrderColumns } from '../components/TableContainer'
import { orderData } from '../data/order'
import { InboundData } from '../data/inbound'

export default function InboundList() {
  return (
     <div className='bg-white'>
        <div className='font-bold text-3xl p-10'>
            Danh sách phiếu nhập kho
        </div>
        <div className='min-h-screen w-full'>
            <TableContainer datas={InboundData} columns={InboundColumns}/>
        </div>
    </div>
  )
}
