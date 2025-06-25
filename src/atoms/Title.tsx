import React from 'react'

export default function Title({children, className}:{children:React.ReactNode, className?:string}) {
  return (
    <div className={`text-neutral-900 text-3xl font-[600] ${className}`}>{children}</div>
  )
}
