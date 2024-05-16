import React from 'react';
import PN from 'persian-number';
import { PiStorefrontDuotone, PiReceiptDuotone } from 'react-icons/pi';

const Factor = () => {
    return (
        <div className='w-full'>
        <div className=' bg-white p-4 gap-2  flex flex-col justify-center items-center rounded-2xl  '>
            <div className='text-secondary-700 font-extrabold text-3xl  py-9 gap-x-4  border-b border-b-gray-40 w-full flex justify-start items-center  text-start  '>
                <span>
                    <PiReceiptDuotone />
                </span>
                <span>پرداخت</span>
            </div>
            <div className='pb-10 text-2xl font-bold w-full p-4 flex flex-col gap-y-10 border-b border-dashed border-b-gray-40'>
                <div className='w-full flex justify-between items-center'>
                    <span className=' text-secondary-700'>جمع دوره ها</span>
                    <span className='text-primary-900 font-extrabold'>
                        {PN.convertEnToPe('4.250.000')}+
                    </span>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <span className=' text-secondary-700'>تخفیف ها</span>
                    <span className=' text-red-500 font-extrabold'>
                        {PN.convertEnToPe('750.000')}-
                    </span>
                </div>
            </div>
            <div className=' text-secondary-700 font-semibold text-xl py-6'>
                کد تخفیف دارم!
            </div>
            <div className=' h-fit xl:text-2xl font-bold w-full bg-blue-600 text-white text-center p-8 rounded-3xl'>
                پرداخت {PN.convertEnToPe('3,500,000')} تومان
            </div>
        </div>
    </div>
);
};

export default Factor;