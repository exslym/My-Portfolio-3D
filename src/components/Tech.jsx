import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap md:justify-between justify-center xl:max-w-full lg:max-w-xl sm:max-w-xl mx-auto gap-6 xs:-mt-4 xs:-mb-4 sm:-mt-6 sm:-mb-6 lg:-mt-10 -mt-4 lg:-mb-10 -mb-0'>
			{technologies.map(technology => (
				<div
					className='xs:w-28 md:w-[120px] w-[70px] xs:h-28 md:h-[120px] h-[70px]'
					key={technology.name}
				>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, 'tech');
