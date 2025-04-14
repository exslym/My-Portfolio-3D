import { motion } from 'framer-motion';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='projects-description'
			>
				Following projects showcases my&nbsp;skills and&nbsp;experience through
				real&#8209;world examples of&nbsp;my work. Each project is&nbsp;briefly
				described with&nbsp;links to&nbsp;code repositores and&nbsp;live demos
				in&nbsp;it. It&nbsp;reflects my&nbsp;ability to&nbsp;solve complex
				problems, work with&nbsp;different technologies and&nbsp;manage projects
				effectively.
			</motion.p>

			<div className='projects-cards'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, 'projects');
