import React from 'react';
import PN from 'persian-number';
import {
	PiStorefrontDuotone,
	PiReceiptDuotone,
	PiClockDuotone,
	PiStudentDuotone,
} from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdOutlineMonitorHeart } from 'react-icons/md';

const Cart = () => {
	return (
		<div className=' w-full gap-6   flex flex-col justify-start items-center'>
			<div className=' md:hidden bg-white p-4 gap-2 w-full rounded-2xl  flex justify-between items-center'>
				<div className='  '>
					<img
						className='w-48 h-36 object-cover rounded-xl'
						src='/images/img01.jpg'
						alt=''
					/>
				</div>
				<div className='flex flex-col justify-center items-start gap-10'>
					<div className='w-full tracking-tight text-secondary-900 font-bold text-xl'>
						<span>دوره حرفه ای متخصص ری اکت</span>
					</div>
					<div className=' font-black flex justify-start items-center '>
						<span className='text-xl text-primary-900 font-bold'>
							{PN.convertEnToPe('6,298,000')}
						</span>
						<span className='p-2 text-xs text-gray-500'>تومان</span>
						<div className='border p-2 mx-2 border-opacity-20 rounded-2xl border-gray-500'>
							<span>
								<PiStorefrontDuotone className=' text-oorange opacity-80 text-2xl ' />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className=' hidden md:flex bg-white  px-4 py-6 gap-x-4 w-full rounded-2xl   justify-start items-center'>
				<div className='flex flex-shrink-0'>
					<img
						className=' w-56 h-44 object-cover rounded-xl'
						src='/images/img01.jpg'
						alt=''
					/>
				</div>
				<div className='w-full flex  flex-col justify-between items-center gap-y-8 '>
					<div className='  w-full tracking-tight text-secondary-900 font-bold text-xl'>
						<span>دوره حرفه ای متخصص ری اکت</span>
					</div>
					<div className=' text-secondary-600 w-full block xl:flex flex-shrink-0 justify-between items-center'>
						<div className='w-full flex flex-col justify-between items-start xl:gap-y-4'>
							<div className='flex justify-start items-center'>
								<span className='me-2 text-10'>
									<PiClockDuotone className=' text-2xl' />
								</span>
								<span>{PN.convertEnToPe('45')} ساعت</span>
							</div>

							<div className='flex justify-between items-center'>
								<span className='me-1'>
									<SiGoogleclassroom className=' text-2xl'/>
								</span>
								<span>{PN.convertEnToPe('270')} جلسه</span>
							</div>
						</div>

						<div className='w-full flex flex-col justify-start items-start xl:gap-y-4'>
							<div className='flex justify-start items-center'>
								<span className='me-1'>
									<PiStudentDuotone className=' text-2xl'/>
								</span>
								<span>{PN.convertEnToPe('13,000')} دانشجو</span>
							</div>

							<div className=' text-orange-500 flex justify-between items-center'>
								<span className='me-1'>
									<MdOutlineMonitorHeart className=' text-2xl'/>
								</span>
								<span className=''>چالش های هفتگی</span>
							</div>
						</div>
					</div>
				</div>
				<div className='h-full py-2 flex flex-shrink-0 flex-col justify-between items-center'>
					<div>
						<div className='block lg:flex justify-center items-center gap-x-4'>
                            <img className=' rounded-3xl w-16' src="/images/imgprofile.jpg" alt=""/>
                            <div className='w-full flex flex-col justify-center items-start'>
                                <span className=' text-secondary-200 text-xs'>مدرس دوره</span>
                                <span className=' text-secondary-900 text-xl font-extrabold'>صاحب محمدی</span>
                            </div>
                        </div>
					</div>
					<div className=' font-black flex justify-start items-center '>
						<span className='text-xl lg:text-3xl text-primary-900 font-extrabold'>
							{PN.convertEnToPe('6,298,000')}
						</span>
						<span className='p-2 text-xs text-gray-500'>تومان</span>
						<div className='border p-2 mx-2 border-opacity-20 rounded-2xl border-gray-500'>
							<span>
								<PiStorefrontDuotone className=' text-oorange opacity-80 text-2xl ' />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
