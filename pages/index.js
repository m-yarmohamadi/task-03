import Cart from '@/components/Cart';
import Factor from '@/components/Factor';

export default function Home() {
	return (
		<div className='xl:h-screen md:container flex flex-col justify-center items-center gap-y-20 py-32 mx-4'>
			<div className='w-full flex justify-center md:justify-start items-center  mb-2'>
				<h1 className=' font-extrabold text-2xl md:text-3xl text-secondary-800'>سبد دوره های شما</h1>
			</div>
			<div className='w-full grid grid-cols-1 lg:grid-cols-3  gap-y-24 lg:gap-x-8'>
				<div className=' flex flex-col justify-between items-center col-span-2 gap-y-6 w-full'>
					<Cart />
					<Cart />
				</div>
				<Factor />
			</div>
		</div>
	);
}
