import React from 'react'
import Pagination from './Pagination';
import { Switch } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';

type TableType = {
    datas: any[];
    columns: any[];
}

export default function TableContainer({ datas = [], columns = [] }: TableType) {



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map((column, index) => (
                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-neutral-300">
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className={`px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium border border-neutral-300 ${column?.className}`}>
                                        {column.render ? column.render(data[column.key]) : data[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div className='px-4 my-5'><Pagination /></div>
        </div>
    )
}

const AccountColumns = [
    {
        label: '',
        key: 'avatar',
        className: 'w-22',
        render: (value: string) => <img src={value} alt="Avatar" className="w-10 h-10 rounded-full" />
    },

    {
        label: 'Người dùng',
        key: 'username'
    },

    {
        label: 'Email',
        key: 'email'
    },

    {
        label: 'Chức vụ',
        key: 'role',
        className: 'w-1/4',
        render: (value: string) => {
            return <div className='text-center'>{value}</div>;
        }
    },

    {
        label: 'Trạng thái',
        key: 'status',
        render: (value: string) => {
            const statusClass = value === 'active' ? 'text-green-500' : 'text-red-500';
            return <span className={statusClass}>
                <span className='mr-7'><Switch defaultChecked /></span>
                {value}
            </span>;
        }
    },

    {
        label: 'Hành động',
        key: '',
        className: 'w-40',
        render: () => (
            <div className="flex space-x-4 justify-center">
                <button className="text-red-500 hover:underline text-2xl"><Icon icon="tabler:trash" /></button>
                <button className="text-blue-500 hover:underline text-2xl"><Icon icon="proicons:pencil" /></button>
            </div>
        )
    }
];

const SettingColumns = [
    {
        label: 'Tên danh mục',
        key: 'name'
    },

    {
        label: 'Chi tiết',
        key: 'detail'
    },

    {
        label: 'Trạng thái',
        key: 'status',
        render: (value: string) => {
            const statusClass = value === 'active' ? 'text-green-500' : 'text-red-500';
            return <span className={statusClass}>
                <span className='mr-7'><Switch defaultChecked /></span>
                {value}
            </span>;
        }
    },

    {
        label: 'Hành động',
        key: '',
        className: 'w-40',
        render: () => (
            <div className="flex space-x-4 justify-center">
                <button className="text-red-500 hover:underline text-2xl"><Icon icon="tabler:trash" /></button>
                <button className="text-blue-500 hover:underline text-2xl"><Icon icon="proicons:pencil" /></button>
            </div>
        )
    }
]

const CategoryColumns = [
    {
        label: 'mã loại sản phẩm',
        key: 'id'
    },

    {
        label: 'Tên loại sản phẩm',
        key: 'name'
    },

    {
        label: 'Mô tả',
        key: 'description'
    },

    {
        label: 'Trạng thái',
        key: 'status',
        render: (value: string) => {
            const statusClass = value === 'active' ? 'text-green-500' : 'text-red-500';
            return <span className={statusClass}>{value}</span>;
        }
    },

    {
        label: 'Hành động',
        key: '',
        render: () => (
            <div className="flex space-x-2">
                <button className="text-blue-500 hover:underline">Sửa</button>
                <button className="text-red-500 hover:underline">Xóa</button>
            </div>
        )
    }
]

export { AccountColumns, SettingColumns, CategoryColumns };