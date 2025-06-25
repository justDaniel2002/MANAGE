import React from 'react'
import InputContainer from './InputContainer'
import Button from '../atoms/Button'
import { useAtom } from 'jotai'
import { userAtom } from '../joital/atom'
import { userData } from '../data/user'
import { useNavigate } from 'react-router-dom'
import Title from '../atoms/Title'


export default function LoginContainer() {
    const [user, setUser] = useAtom(userAtom)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        const foundUser = userData.find((u) => u.email === email && u.password === password)
        if(foundUser) {
            setUser(foundUser)
            navigate('/profile')
        }
    }

    return (
        <div className='text-center flex flex-col items-center justify-center h-screen bg-white'>
            <Title>Đăng nhập</Title>
            <div className='my-7'>Nhập email và mật khẩu của bạn để đăng nhập</div>
            <div className='w-2/3 mb-7'>
                <InputContainer
                    onChange={(e) => setEmail(e.target.value)}
                    label='Email' placeholder='name@gmail.com' />
            </div>
            <div className='w-2/3 mb-10'>
                <InputContainer
                    onChange={(e) => setPassword(e.target.value)}
                    label='Mật khẩu' placeholder='Nhập mật khẩu của bạn' type='password' />
            </div>
            <div className='w-2/3'><Button onClick={handleLogin} label='ĐĂNG NHẬP' type='gray' /></div>
        </div>
    )
}
