import React from 'react';
import PN from 'persian-number';
import { PiStorefrontDuotone, PiReceiptDuotone } from 'react-icons/pi';

const Panel = () => {
	return (
		<div className=' w-full text-primary-04'>
			<div className='w-full'>
				<div className='w-full border-b border-primary-04 font-bold'>فیلترها</div>
				<div>
					<form className='p-8'>
						<div className='mb-6 flex justify-start items-center'>
							<label
								className='w-full text-primary-03 text-md p-1 '
								for='title'>
								جستجو
							</label>
							<input
								className='shadow rounded-md w-full py-2 bg-primary-01 px-3 text-primary-04 focus:outline-none focus:shadow-outline ring-1 ring-offset ring-primary-03 focus:ring-success'
								id='title'
								type='text'
							/>
						</div>
						<div className='mb-6 flex justify-start items-center'>
							<label
								className='w-full text-primary-03 text-md p-1 '
								for='quantity'>
								مرتب سازی
							</label>
							<div className='w-full'>
								<select className='  shadow rounded-md w-full py-2 bg-primary-01 px-3 text-primary-04 focus:outline-none focus:shadow-outline ring-1 ring-offset ring-primary-03 focus:ring-success'>
									<option>صعودی</option>
									<option>نزولی</option>
								</select>
							</div>
						</div>
						<div className='mb-6 flex justify-start items-center'>
							<label
								className='w-full text-primary-03 text-md p-1 '
								for='category'>
								دسته بندی
							</label>
							<div className='w-full'>
								<select className='  shadow rounded-md w-full py-2 bg-primary-01 px-3 text-primary-04 focus:outline-none focus:shadow-outline ring-1 ring-offset ring-primary-03 focus:ring-success'>
									<option>دسته بندی 1</option>
									<option>دسته بندی 2</option>
									<option>دسته بندی 3</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className='w-full'>
				<div className='w-full border-b border-primary-04 font-bold text-xl'>لیست کالاها</div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            کالای شماره 1
                        </div>
                        <div className='flex justify-end items-center gap-2 p-1'>
                            <span>1403/05/28</span>
                            <span className='border border-primary-03 p-1 rounded-xl'>دسته</span>
                            <span className='border border-primary-04 bg-primary-02 p-1 rounded-full w-8 h-8'>43</span>
                            <button className='border border-error text-error hover:bg-error hover:text-primary-04 p-1 rounded-xl'>حذف</button>
                            <button className='border border-success text-success hover:bg-success hover:text-primary-04 p-1 rounded-xl'>ویرایش</button>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Panel;
