import React from 'react'
import TableContainer, { ProductColumns } from '../components/TableContainer'
import { productData } from '../data/product'

export default function ProductList() {
  return (
    <div className='bg-white'>
        <div className='font-bold text-3xl p-10'>
            Sản phẩm
        </div>
        <div className='min-h-screen w-full'>
            <TableContainer datas={productData} columns={ProductColumns}/>
        </div>
    </div>
  )
}
