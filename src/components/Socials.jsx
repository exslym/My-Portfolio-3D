import { socials } from '../constants';
import { SectionWrapper } from '../hoc';
import { SphereCanvas } from './canvas';

const Socials = () => {
	return (
		<div className='socials-container'>
			{socials.map(social => (
				<a
					className='socials-container-link'
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
