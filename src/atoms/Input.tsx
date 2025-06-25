import React from 'react'

type InputType = {
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
}

export default function Input({ placeholder = "Enter text", onChange, value, type="text" }: InputType) {
    return (
        <input
            type={type}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            onChange={onChange}
            value={value} />
    )
}
