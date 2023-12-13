import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

//* for EmailJS (Service ID): service_fffw0th
//* for EmailJS (Template ID): template_o9xubcg
//* for EmailJS (Public Key): WajGWXwNs7zQUnPq7

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	//! PRIVATE INFO hidden in env (.env needs to be placed in ./src)
	const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
	const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
	const toName = import.meta.env.VITE_APP_EMAILJS_TO_NAME;
	const toEmail = import.meta.env.VITE_APP_EMAILJS_TO_EMAIL;

	const handleChange = e => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (form.name && form.email && form.message) {
			document.querySelector('form').classList.remove('input_error');
			setLoading(true);

			emailjs
				.send(
					serviceID,
					templateID,
					{
						from_name: form.name,
						to_name: toName,
						from_email: form.email,
						to_email: toEmail,
						message: form.message,
					},
					publicKey,
				)
				.then(
					() => {
						setLoading(false);
						alert('Thank you! I will get back to you as soon as posible.');
						setForm({
							name: '',
							email: '',
							message: '',
						});
					},
					error => {
						setLoading(false);
						console.log(error);
						alert('Something went wrong.');
					},
				);
		} else {
			setLoading(false);
			document.querySelector('form').classList.add('input_error');
		}
	};

	return (
		<div className='xl:mt-12 lg:flex-row flex-col-reverse flex justify-center items-center gap-8 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='lg:w-2/5 bg-transparent rounded-2xl p-[1px]
				w-full'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className='mt-10 flex flex-col gap-8'>
					<label className='flex flex-col'>
						<span className='text-white font-medium m-auto w-full max-w-inputWidth mb-4'>
							Your name
						</span>
						<input
							type='text'
							name='name'
							autoComplete='off'
							required
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-normal rounded-lg border-none outline-[0px] shadow-inputsOff hover:shadow-inputsOn focus:shadow-inputsOn w-full max-w-inputWidth m-auto'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium m-auto w-full max-w-inputWidth mb-4'>
							Your email
						</span>
						<input
							type='email'
							name='email'
							autoComplete='off'
							required
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-normal rounded-lg border-none outline-[0px] shadow-inputsOff hover:shadow-inputsOn focus:shadow-inputsOn w-full max-w-inputWidth m-auto'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium m-auto w-full max-w-inputWidth mb-4'>
							Your message
						</span>
						<textarea
							rows='7'
							name='message'
							autoComplete='off'
							required
							value={form.message}
							onChange={handleChange}
							placeholder='What do you want to say?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-normal resize-none rounded-lg border-none outline-[0px] shadow-inputsOff hover:shadow-inputsOn focus:shadow-inputsOn w-full max-w-inputWidth m-auto'
						/>
					</label>

					<button
						type='submit'
						className={
							loading
								? `py-3 px-8 bg-tertiary w-fit text-secondary font-medium rounded-xl pointer-events-none border-none outline-none`
								: `py-3 px-8 bg-tertiary w-fit text-white font-medium rounded-xl pointer-events-auto border-none outline-[0px] shadow-inputsOff hover:shadow-inputsOn focus:shadow-inputsOn`
						}
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='lg:w-3/5 xl:h-[560px] lg:h-[500px] md:h-[460px] sm:h-[380px] h-[280px] 
				w-full'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
