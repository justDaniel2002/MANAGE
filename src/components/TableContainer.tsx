import React from 'react'
import Pagination from './Pagination';

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
                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {column.render ? column.render(data[column.key]) : data[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div><Pagination /></div>
        </div>
    )
}

const AccountColumns = [
    {
        label: '',
        key: 'avatar',
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
        key: 'role'
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
        label: 'Tên danh mục',
        key: 'name'
    },

    {
        label: 'Trạng thái',
        key: 'status',
        render: (value: string) => {
            const statusClass = value === 'active' ? 'text-green-500' : 'text-red-500';
            return <span className={statusClass}>{value}</span>;
        }
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