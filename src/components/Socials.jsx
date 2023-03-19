import { socials } from '../constants';
import { SectionWrapper } from '../hoc';
import { SphereCanvas } from './canvas';

const Socials = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center max-w-[360px] mx-auto gap-6 -mt-0'>
			{socials.map(social => (
				<a
					className='xs:w-24 w-[70px] xs:h-24 h-[70px]'
					key={social.name}
					href={social.link}
					target='_blank'
				>
					<SphereCanvas icon={social.icon} />
				</a>
			))}
		</div>
	);
};

export default SectionWrapper(Socials, 'socials');
