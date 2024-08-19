import AddCommodity from '@/components/AddCommodity';
import Panel from '@/components/Panel';

export default function Home() {
	return (
		<div className='h-screen flex flex-col justify-between items-center w-full'>
			<div className='w-full  flex flex-col justify-start items-center gap-8 py-8 '>
				<div className='w-full flex  gap-4 justify-center items-center font-extrabold bg-primary-02 text-primary-04 p-4'>
					<h1 className='  text-xl md:text-2xl '>نرم افزار موجودی انبار با استفاده از ریکت و تیلویند</h1>
					<span className='w-8 h-8 flex justify-center items-center rounded-full bg-primary-03 p-2 border-2 border-primary-04 '>3</span>
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
