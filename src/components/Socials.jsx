import { socials } from '../constants';
import { SectionWrapper } from '../hoc';
import { SphereCanvas } from './canvas';

const Socials = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center max-w-96 mx-auto gap-6'>
			{socials.map(social => (
				<a
					className='w-16 xs:w-24 h-16 xs:h-24'
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
