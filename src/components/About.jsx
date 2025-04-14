import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p variants={fadeIn('', '', 0.2, 1)} className='about-text'>
				Experienced and&nbsp;results&#8209;driven Frontend Developer with
				5+&nbsp;years of&nbsp;expertise in&nbsp;JavaScript, TypeScript,
				and&nbsp;advanced libraries like React, NextJS, and&nbsp;ThreeJS.
				<br />
				Known for&nbsp;delivering interactive and&nbsp;user&#8209;focused
				solutions, I&nbsp;have a&nbsp;strong track record of&nbsp;enhancing user
				engagement and&nbsp;optimizing frontend performance.
				<br />
				I&nbsp;am passionate about leveraging the&nbsp;latest technologies
				to&nbsp;create dynamic digital experiences.
				<br />
				With a&nbsp;strong eye for&nbsp;detail and&nbsp;a&nbsp;commitment
				to&nbsp;quality, I&nbsp;thrive on&nbsp;crafting visually appealing
				and&nbsp;highly functional web solutions that meet both business
				and&nbsp;user needs.
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
