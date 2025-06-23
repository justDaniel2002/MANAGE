import React from 'react'

type ProfileContainerType = {
    user: any
}

export default function ProfileContainer({ user }: ProfileContainerType) {
    return (
        <div className='bg-white p-4 rounded-lg shadow-md broder border-gray-200'>
            <div className='text-center'>Thông tin tài khoản</div>

            <div className='p-4 rounded-lg shadow-md broder border-gray-200 flex items-center'>
                <div className='w-1/3'>
                    <img src={user.avatar} alt="Avatar" className='w-24 h-24 rounded-full mx-auto' />
                </div>
                <div className='w-2/3 pl-4'>
                    <div className='text-lg font-semibold'>{user.username}</div>
                    <div className='text-gray-600'>Vai trò: {user.role}</div>
                </div>
            </div>

            <div className='p-4 rounded-lg shadow-md broder border-gray-200'>
                <div>Thông tin cơ bản</div>

                <div className='grid grid-cols-2 w-1/2'>
                    <div>
                        <div className='text-gray-600 text-sm'>Họ và tên:</div>
                        <div className='text-gray-800'>{user.fullName}</div>
                    </div>

                    <div />

                    <div>
                        <div className='text-gray-600 text-sm'>Email:</div>
                        <div className='text-gray-800'>{user.email}</div>
                    </div>

                    <div>
                        <div className='text-gray-600 text-sm'>Só điện thoại:</div>
                        <div className='text-gray-800'>{user.phone}</div>
                    </div>

                    <div />

                    <div>
                        <div className='text-gray-600 text-sm'>Vai trò:</div>
                        <div className='text-gray-800'>{user.role}</div>
                    </div>
                </div>
            </div>

            <div className='p-4 rounded-lg shadow-md broder border-gray-200'>
                <div>Thông tin đăng nhập</div>

                <div>
                    <div className='text-gray-600 text-sm'>Email:</div>
                    <div className='text-gray-800'>{user.email}</div>
                </div>

                <div className='flex'>
                    <div>
                        <div className='text-gray-600 text-sm'>Mật khẩu:</div>
                        <div className='text-gray-800'>{user.password}</div>
                    </div>

                    <div className='ml-4'>
                        <span className='text-sm underline'>Đổi mật khẩu</span>
                    </div>
                </div>


            </div>
        </div>
    )
}
