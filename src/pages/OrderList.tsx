import React from 'react'
import TableContainer, { OrderColumns } from '../components/TableContainer'
import { orderData } from '../data/order'

export default function OrderList() {
  return (
    <div>
        <div className='bg-white'>
        <div className='font-bold text-3xl p-10'>
            Danh sách phiếu bán hàng
        </div>
        <div className='min-h-screen w-full'>
            <TableContainer datas={orderData} columns={OrderColumns}/>
        </div>
    </div>
    </div>
  )
}
