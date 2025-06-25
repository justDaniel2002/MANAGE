import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'

type PaginationType = {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage = 1, totalPages = 10, onPageChange }: PaginationType) {
  return (
    <div className='flex justify-between items-center'>
      <button className='py-1 px-4 text-sm font-medium text-black border border-neutral-300 rounded-md flex items-center space-x-1'>
        <Icon icon="formkit:arrowleft" />
        <div>Previous</div>
      </button>
      <div className='flex space-x-2 text-sm'>
        <div className='px-4 py-2 text-black rounded-md bg-neutral-100'>{currentPage}</div>
        <div className='px-4 py-2 text-black rounded-md'>2</div>
        <div className='px-4 py-2 text-black rounded-md'>3</div>
        <div className='px-4 py-2 text-black rounded-md'>...</div>
        <div className='px-4 py-2 text-black rounded-md'>8</div>
        <div className='px-4 py-2 text-black rounded-md'>9</div>
        <div className='px-4 py-2 text-black rounded-md'>10</div>
      </div>
      <button className='py-1 px-4 text-sm font-medium text-black border border-neutral-300 rounded-md flex items-center space-x-1'>
        <div>Next</div>
        <Icon icon="formkit:arrowright" />
      </button>
    </div>
  )
}
