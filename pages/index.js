import AddCommodity from '@/components/AddCommodity';
import Panel from '@/components/Panel';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

export default function Home() {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setIsDarkMode((prev) => !prev);
	};
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark-mode');
			document.documentElement.classList.remove('light-mode');
		} else {
			document.documentElement.classList.add('light-mode');
			document.documentElement.classList.remove('dark-mode');
		}
	}, [isDarkMode]);
	return (
		<div className='h-screen flex flex-col justify-between items-center w-full dar'>
			<div className='w-full  flex flex-col justify-start items-center gap-8 py-8 '>
				<div className='w-full flex justify-center items-center font-extrabold bg-primary-02 text-primary-04'>
					<div className='w-full flex  gap-4 justify-center items-center  p-4'>
						<h1 className='  text-xl md:text-2xl '>نرم افزار موجودی انبار با استفاده از ریکت و تیلویند</h1>
						<span className='w-8 h-8 flex justify-center items-center rounded-full bg-primary-03 p-2 border-2 border-primary-04 '>3</span>
					</div>
					<div
						onClick={toggleDarkMode}
						className='p-4 flex '>
						{isDarkMode ? <HiOutlineSun className='w-6 h-6' /> : <HiOutlineMoon className='w-6 h-6' />}
					</div>
				</div>
				<div className=' container w-full grid md:grid-cols-2 gap-16'>
					<AddCommodity />
					<Panel />
				</div>
			</div>
			<div className='w-full flex justify-end items-start border-t border-primary-03 text-primary-03'>
				<span className='px-4 font-serif text-sm'>yarmohamadi677@gmail.com:@1403</span>
			</div>
		</div>
	);
}
