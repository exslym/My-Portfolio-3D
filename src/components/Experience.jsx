import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: '#0b212d', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7px solid #0b212d' }}
			date={
				<div className=' date-desktop'>
					<span className='text-primary'>{experience.date}</span>
				</div>
			}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='w-[60%] h-[60%] object-contain'
					/>
				</div>
			}
		>
			<div>
				<p className='date-mobile text-primary'>{experience.date}</p>
				<h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
				<p className='text-primary text-[16px] font-semibold' style={{ margin: 0 }}>
					{experience.company_name}
				</p>
			</div>
			<ul className='custom-list mt-5 list-disc ml-5 space-y-2'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};
const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience.</h2>
			</motion.div>

			<div className='mt-16 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
