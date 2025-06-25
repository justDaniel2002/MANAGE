import React from 'react'
import Input from '../atoms/Input'

type InputContainerType = {
    label?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
}

export default function InputContainer({ label = "Label", placeholder, onChange, value, type }: InputContainerType) {
    return (
        <div className='w-full'>
            <div className='text-left text-sm text-neutral-800 mb-2'>{label}</div>
            <Input
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type} />
        </div>
    )
}
