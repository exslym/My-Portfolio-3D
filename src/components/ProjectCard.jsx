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
				className='bg-tertiary rounded-2xl xl:max-w-[362px] lg:max-w-[340px] md:max-w-[304px] h-full green-pink-gradient p-px'
			>
				<div className='bg-tertiary w-full h-full rounded-2xl p-4 flex flex-col justify-between'>
					<div>
						<div className='relative w-full rounded-2xl '>
							<img
								src={image}
								alt={name}
								className='w-full h-full sm:max-h-full rounded-[10px] object-cover border-[1px] border-secondary'
							/>
							<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
								<div
									onClick={() => window.open(website_link, '_blank')}
									className='black-gradient w-9 h-9 rounded-full border border-secondary flex items-center justify-center cursor-pointer mr-2'
								>
									<img
										src={gotosite}
										alt={gotosite}
										className='w-4/5 h-4/5 object-contain'
									/>
								</div>
								<div
									onClick={() => window.open(source_code_link, '_blank')}
									className='black-gradient w-9 h-9 rounded-full border border-secondary flex items-center justify-center cursor-pointer '
								>
									<img
										src={github}
										alt={github}
										className='w-4/5 h-4/5 object-contain'
									/>
								</div>
							</div>
						</div>
						<div className='mt-5'>
							<h3 className='text-white font-bold text-2xl'>{name}</h3>
							<p className='mt-2 text-secondary text-sm'>{description}</p>
						</div>
					</div>

					<div className='mt-4 flex flex-wrap gap-2'>
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
