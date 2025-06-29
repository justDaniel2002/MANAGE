import React from 'react'
import InputContainer from '../components/InputContainer'

export default function InboundDetail() {
    return (
        <div>
            <div>Chi tiết phiếu nhập kho</div>
            <div>Thông tin chung</div>
            <div className='flex px-5'>
                <div className='w-1/2 grid-cols-2'>
                    <InputContainer label='Mã phiếu nhập kho' disable={true} />
                    <InputContainer label='Phân loại nhập kho' disable={true} />
                    <InputContainer label='Người tạo phiếu' disable={true} />
                    <div />
                    <InputContainer className='col-span-2' label='Diễn giải' disable={true} multiline={true} />
                </div>
                <div>
                    <InputContainer type='date' className='col-span-2' label='Ngày tạo đơn' disable={true} multiline={true} />

                </div>
            </div>
        </div>
    )
}
