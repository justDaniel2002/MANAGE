import React from 'react'
import InputContainer from './InputContainer'
import Button from '../atoms/Button'


export default function LoginContainer() {
    return (
            <div className='text-center flex flex-col items-center justify-center h-screen bg-white w-2/3'>
                <div>Đăng nhập</div>
                <div>Nhập email và mật khẩu của bạn để đăng nhập</div>
                <div><InputContainer label='Email' placeholder='name@gmail.com'/></div>
                <div><InputContainer label='Mật khẩu' placeholder='Nhập mật khẩu của bạn' type='password'/></div>
                <div><Button label='Đăng nhập'/></div>
            </div>
    )
}
