import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { github, gotosite } from '../assets';
import { fadeIn } from '../utils/motion';

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	website_link,
}) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', 0.4 * index, 0.5)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='projects-card'
			>
				<div className='projects-card-content'>
					<div>
						<div className='projects-card-preview'>
							<img src={image} alt={name} className='projects-card-image' />
							<div className='projects-card-buttons'>
								<button
									onClick={() => window.open(website_link, '_blank')}
									className='projects-card-button mr-2'
								>
									<img src={gotosite} alt={gotosite} />
								</button>
								<button
									onClick={() => window.open(source_code_link, '_blank')}
									className='projects-card-button'
								>
									<img src={github} alt={github} />
								</button>
							</div>
						</div>
						<div className='projects-card-text mt-5'>
							<h3 className='projects-card-header'>{name}</h3>
							<p className='projects-card-descr'>{description}</p>
						</div>
					</div>

					<div className='projects-card-tags'>
						{tags.map(tag => (
							<p key={tag.name} className={`text-sm ${tag.color}`}>
								#{tag.name}
							</p>
						))}
					</div>
				</div>
			</Tilt>
		</motion.div>
	);
};

export default ProjectCard;
