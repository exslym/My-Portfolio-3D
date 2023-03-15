import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import { github, gotosite } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl sm:max-w-[360px] h-full w-full'
			>
				<div className='relative w-full  rounded-2xl '>
					<img
						src={image}
						alt={name}
						className='w-full h-full sm:max-h-[230px] rounded-2xl object-cover'
					/>
					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() => window.open(website_link, '_blank')}
							className='black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer mr-2'
						>
							<img src={gotosite} alt={gotosite} className='w-4/5 h-4/5 object-contain' />
						</div>
						<div
							onClick={() => window.open(source_code_link, '_blank')}
							className='black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer '
						>
							<img src={github} alt={github} className='w-4/5 h-4/5 object-contain' />
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-secondary text-[14px]'>{description}</p>
				</div>
				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map(tag => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
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
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					Following projects showcases my&nbsp;skills and&nbsp;experience through real&#8209;world
					examples of&nbsp;my work. Each project is&nbsp;briefly described with&nbsp;links
					to&nbsp;code repositores and&nbsp;live demos in&nbsp;it. It reflects my&nbsp;ability
					to&nbsp;solve complex problems, work with&nbsp;different technologies and&nbsp;manage
					projects effectively.
				</motion.p>
			</div>

			<div className='mt-20 flex items-stretch flex-wrap gap-9'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
