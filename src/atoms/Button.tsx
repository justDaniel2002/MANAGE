import React from 'react'

type ButtonType = {
    onClick?: () => void;
    label?: string;
    disabled?: boolean;
    type?: string;
    className?: string;
}

export default function Button({ onClick, label = "Click Me", disabled = false, type = "primary", className }: ButtonType) {
  
  let buttonClass = "px-4 py-3 rounded-md font-thin focus:outline-none focus:ring-2 focus:ring-blue-500 w-full";

  switch (type) {
    case "primary":
        buttonClass += " bg-black text-white";
    case "gray":
        buttonClass += " bg-gray-400 text-white";
        break;
  }
  
  return (
    <button disabled={disabled} 
    onClick={onClick} 
    className={`${className} ${buttonClass}`}>{label}</button>
  )
}
