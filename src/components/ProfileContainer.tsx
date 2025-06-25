import React from 'react'

type ProfileContainerType = {
    user: any
}

export default function ProfileContainer({ user }: ProfileContainerType) {
    return (
        <div className='bg-white p-10 rounded-lg shadow-md broder border-gray-200 w-3/4'>
            <div className='text-center text-neutral-900 text-2xl font-[700]'>Thông tin tài khoản</div>

            <div className='p-10 mb-5 rounded-lg shadow-md broder border-gray-200 flex items-center'>
                <div>
                    <img src={user?.avatar} alt="Avatar" className='w-20 rounded-full' />
                </div>
                <div className='pl-4'>
                    <div className='text-xl font-semibold'>{user?.username}</div>
                    <div className='text-gray-600'>Vai trò: {user?.role}</div>
                </div>
            </div>

            <div className='p-10 mb-5 rounded-lg shadow-md broder border-gray-200'>
                <div className='font-semibold text-xl mb-5'>Thông tin cơ bản</div>

                <div className='grid grid-cols-2 w-2/3 gap-5'>
                    <div>
                        <div className='text-gray-600 text-sm'>Họ và tên:</div>
                        <div className='text-gray-800'>{user?.fullname}</div>
                    </div>

                    <div />

                    <div>
                        <div className='text-gray-600 text-sm'>Email:</div>
                        <div className='text-gray-800'>{user?.email}</div>
                    </div>

                    <div>
                        <div className='text-gray-600 text-sm'>Só điện thoại:</div>
                        <div className='text-gray-800'>{user?.phone}</div>
                    </div>


                    <div>
                        <div className='text-gray-600 text-sm'>Vai trò:</div>
                        <div className='text-gray-800'>{user?.role}</div>
                    </div>
                </div>
            </div>

            <div className='p-10 rounded-lg shadow-md broder border-gray-200'>
                <div className='font-semibold text-xl mb-5'>Thông tin đăng nhập</div>

                <div className='mb-5'>
                    <div className='text-gray-600 text-sm'>Email:</div>
                    <div className='text-gray-800'>{user?.email}</div>
                </div>

                <div className='flex items-end'>
                    <div>
                        <div className='text-gray-600 text-sm'>Mật khẩu:</div>
                        <div className='text-gray-800'>{user?.password}</div>
                    </div>

                    <div className='ml-4'>
                        <span className='text-sm underline'>Đổi mật khẩu</span>
                    </div>
                </div>


            </div>
        </div>
    )
}
