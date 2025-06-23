import React from 'react'

type PaginationType = {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage = 1, totalPages = 10, onPageChange }: PaginationType) {
  return (
    <div>
        <span>{currentPage}</span>
    </div>
  )
}
