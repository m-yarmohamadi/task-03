import React from 'react';

const AddCommodity = () => {
	return (
		<div className=' w-full flex flex-col justify-center items-start gap-1'>
			<span className='text-primary-04 font-bold p-1'>اضافه کردن کالای جدید</span>
			<div className='w-full bg-primary-02 rounded-md px-4'>
				<form className='p-8'>
					<div className='mb-6'>
						<label
							className=' text-primary-04 text-sm p-1 '
							for='title'>
							عنوان کالا
						</label>
						<input
							className='shadow rounded-md w-full py-2 bg-primary-02 px-3 text-primary-04 focus:outline-none focus:shadow-outline ring-1 ring-offset ring-primary-03 focus:ring-secondary-01'
							id='title'
							type='text'
						/>
					</div>
					<div className='mb-6'>
						<label
							className=' text-primary-04 text-sm p-1 '
							for='quantity'>
							تعداد کالا
						</label>
						<input
							className='shadow rounded-md w-full py-2 bg-primary-02 px-3 text-primary-04 focus:outline-none focus:shadow-outline ring-1 ring-offset ring-primary-03 focus:ring-secondary-01'
							id='quantity'
							type='number'
						/>
					</div>
					<div className='mb-6 '>
						<label
							className=' text-primary-04 text-sm p-1 '
							for='category'>
							دسته بندی
						</label>
						<div className='grid grid-cols-12 gap-1'>
							<select className=' col-span-11 shadow rounded-md w-full py-2 bg-primary-02 px-3 text-primary-04 focus:outline-none focus:shadow-outline ring-1 ring-offset ring-primary-03 focus:ring-secondary-01'>
								<option>دسته بندی 1</option>
								<option>دسته بندی 2</option>
								<option>دسته بندی 3</option>
							</select>
							<button className=' col-span-1 w-full h-full flex justify-center items-center text-primary-04 text-4xl'>+</button>
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<button
							className='w-full bg-primary-03 hover:bg-opacity-80 text-primary-04 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'
							type='button'>
							ثبت کالای جدید
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCommodity;
