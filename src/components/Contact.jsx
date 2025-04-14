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
					publicKey
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
					}
				);
		} else {
			setLoading(false);
		}
	};

	return (
		<div className='contact-container'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='contact-motion'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className='contact-form'>
					<fieldset>
						<legend className='sr-only'>Contact Form</legend>

						<label htmlFor='name'>
							<span>Your name</span>
							<input
								id='name'
								type='text'
								name='name'
								autoComplete='off'
								required
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
							/>
						</label>

						<label htmlFor='email'>
							<span>Your email</span>
							<input
								id='email'
								type='email'
								name='email'
								autoComplete='off'
								required
								value={form.email}
								onChange={handleChange}
								placeholder="What's your email?"
							/>
						</label>

						<label htmlFor='message'>
							<span>Your message</span>
							<textarea
								id='message'
								rows='7'
								name='message'
								autoComplete='off'
								required
								value={form.message}
								onChange={handleChange}
								placeholder='What do you want to say?'
							/>
						</label>

						<button type='submit' className={loading ? 'loading' : 'normal'}>
							{loading ? 'Sending...' : 'Send'}
						</button>
					</fieldset>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='earth-motion'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
