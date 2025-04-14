import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			className='experience-line'
			contentArrowStyle={{ borderRight: '8px solid #0b212d' }}
			date={
				<div className='date-desktop'>
					<span className='text-primary'>{experience.date}</span>
				</div>
			}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='experience-line-icon'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='h-3/5 w-3/5 object-contain'
					/>
				</div>
			}
		>
			<div>
				<p className='date-mobile text-primary'>{experience.date}</p>
				<h3 className='experience-line-title'>{experience.title}</h3>
				<p className='experience-line-subtitle'>{experience.company_name}</p>
			</div>
			<ul className='experience-line-list'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='experience-line-item'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export default ExperienceCard;
