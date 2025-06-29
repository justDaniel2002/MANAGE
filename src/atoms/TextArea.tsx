import React from 'react'

type TextAreaType = {
    placeholder?: string;
    onChange?: any;
    value?: string;
    disable? : boolean
}

export default function TextArea({ placeholder = "Enter text", onChange, value, disable = false }: TextAreaType) {
    return (
        <textarea
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            disabled={disable} />
    )
}
