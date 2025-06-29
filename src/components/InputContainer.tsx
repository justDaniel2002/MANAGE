import React from 'react'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea';

type InputContainerType = {
    label?: string;
    placeholder?: string;
    onChange?: any;
    value?: string;
    type?: string;
    disable?: boolean,
    multiline?: boolean,
    className?: string
}

export default function InputContainer({ label = "Label", placeholder, onChange, value, type, disable = false, multiline = false, className }: InputContainerType) {
    return (
        <div className={`w-full ${className}`}>
            <div className='text-left text-sm text-neutral-800 mb-2'>{label}</div>
            {multiline ?
                <TextArea
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    disable={disable} /> :
                <Input
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    disable={disable}
                    type={type} />}
        </div>
    )
}
