import loginBGPng from '../assets/blackLoginBg.png'
import LoginContainer from '../components/LoginContainer'

export default function LoginPage() {
    return (
        <div>
            <div className='flex'>
                <div className='w-2/3'><LoginContainer /></div>
                <div className='w-1/3'>
                    <img src={loginBGPng} alt="Login Background" className='w-full h-screen' />
                </div>
            </div>
        </div>
    )
}
