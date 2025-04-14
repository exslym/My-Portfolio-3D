import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#0b212d',
				color: '#fff',
				boxShadow: 'inset 0 -2px #adbfd0',
			}}
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
						className='w-3/5 h-3/5 object-contain'
					/>
				</div>
			}
		>
			<div>
				<p className='date-mobile text-primary'>{experience.date}</p>
				<h3 className='text-white text-2xl font-bold'>{experience.title}</h3>
				<p
					className='text-primary text-base font-semibold'
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>
			<ul className='custom-list mt-5 list-disc ml-5 space-y-2'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-sm pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export default ExperienceCard;
