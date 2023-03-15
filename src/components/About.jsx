import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';
import { services } from '../constants';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[250px] w-full '>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='flex justify-evenly items-center flex-col bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]'
				>
					<img src={icon} alt={title} className='w-16 h-16 object-contain' />
					<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				I'm a skilled frontend developer with experience in&nbsp;TypeScript and&nbsp;JavaScript,
				and&nbsp;expertise in&nbsp;frameworks like React, Astro, Qwick and&nbsp;Three.js. I'm
				a&nbsp;quick learner and&nbsp;collaborate closely with&nbsp;clients to&nbsp;create
				efficient, scalable and&nbsp;user&#8209;friendly solutions that solve real&#8209;world
				problems. Let's work together to&nbsp;bring your ideas to&nbsp;life!
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default About;
