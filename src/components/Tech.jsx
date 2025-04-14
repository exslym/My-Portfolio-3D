import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap justify-between max-w-80 xl:max-w-full md:max-w-lg xs:max-w-sm mx-auto gap-5 xs:-mt-4 xs:-mb-4 sm:-mt-6 sm:-mb-6 lg:-mt-10 -mt-4 lg:-mb-10 -mb-0'>
			{technologies.map(technology => (
				<div
					className='w-[60px] xs:w-20 md:w-28 h-[60px] xs:h-20 md:h-28 '
					key={technology.name}
				>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, 'tech');
