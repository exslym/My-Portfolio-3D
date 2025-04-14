import { motion } from 'framer-motion';
import { ComputerCanvas } from './canvas';

const Hero = () => {
	return (
		<section className='hero-section'>
			<div className='hero-header'>
				<div className='hero-header-pin'>
					<div className='hero-header-dot' />
					<div className='hero-header-line' />
				</div>

				<div>
					<h1>
						Hi, I'm <span className='text-blue-primary'>Andrés</span>
					</h1>
					<p>
						I'm an&nbsp;experienced Frontend&nbsp;Developer, <br />
						I&nbsp;also develop 3D&nbsp;visuals, user&nbsp;interfaces
						and&nbsp;web applications.
					</p>
				</div>
			</div>

			<div className='computer-canvas'>
				<ComputerCanvas />
			</div>

			<div className='bottom-button'>
				<a href='#about'>
					<div className='bottom-button-content'>
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className='bottom-button-ball'
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
