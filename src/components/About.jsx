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

			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				I&rsquo;m a&nbsp;skilled frontend developer with over 3&nbsp;years of&nbsp;experience
				in&nbsp;TypeScript, JavaScript and Dart and also expertise in&nbsp;frameworks like React,
				Next, Astro, Qwik, Three.js and Flutter.
				<br />
				I'm a&nbsp;quick learner and&nbsp;collaborate closely with&nbsp;clients to&nbsp;create
				efficient, scalable and&nbsp;user&#8209;friendly solutions that solve real&#8209;world
				problems. Let's work together to&nbsp;bring your ideas to&nbsp;life!
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
