import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { github, gotosite } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', 0.4 * index, 0.5)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary rounded-2xl xl:max-w-[362px] lg:max-w-[340px] md:max-w-[304px] h-full green-pink-gradient p-[1px]'
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
									className='black-gradient w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer mr-2'
								>
									<img src={gotosite} alt={gotosite} className='w-4/5 h-4/5 object-contain' />
								</div>
								<div
									onClick={() => window.open(source_code_link, '_blank')}
									className='black-gradient w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer '
								>
									<img src={github} alt={github} className='w-4/5 h-4/5 object-contain' />
								</div>
							</div>
						</div>
						<div className='mt-5'>
							<h3 className='text-white font-bold text-[24px]'>{name}</h3>
							<p className='mt-2 text-secondary text-[14px]'>{description}</p>
						</div>
					</div>

					<div className='mt-4 flex flex-wrap gap-2'>
						{tags.map(tag => (
							<p key={tag.name} className={`text-[14px] ${tag.color}`}>
								#{tag.name}
							</p>
						))}
					</div>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-primary text-[17px] max-w-3xl leading-[30px]'
				>
					Following projects showcases my&nbsp;skills and&nbsp;experience through real&#8209;world
					examples of&nbsp;my work. Each project is&nbsp;briefly described with&nbsp;links
					to&nbsp;code repositores and&nbsp;live demos in&nbsp;it. It reflects my&nbsp;ability
					to&nbsp;solve complex problems, work with&nbsp;different technologies and&nbsp;manage
					projects effectively.
				</motion.p>
			</div>

			<div className='mt-16 flex items-stretch justify-center flex-wrap gap-8'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, 'projects');
