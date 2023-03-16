import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center max-w-[900px] mx-auto gap-10 -mt-0'>
			{technologies.map(technology => (
				<div className='w-28 h-28' key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, 'tech');
