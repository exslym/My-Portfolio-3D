import {
	astro,
	cns_portfolio,
	creator,
	css,
	dcreative,
	doctoratwork,
	doctoratwork1,
	freelance,
	git,
	html,
	javascript,
	mobile,
	qwik,
	reactjs,
	space_invaders,
	tailwind,
	threejs,
	typescript,
	vite,
	web,
	webpack,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Developer',
		icon: mobile,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'ThreeJS',
		icon: threejs,
	},
	{
		name: 'Qwik',
		icon: qwik,
	},
	{
		name: 'Astro',
		icon: astro,
	},
	{
		name: 'HTML5',
		icon: html,
	},
	{
		name: 'CSS3',
		icon: css,
	},
	{
		name: 'Tailwind',
		icon: tailwind,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'Webpack',
		icon: webpack,
	},
	{
		name: 'Vite',
		icon: vite,
	},
];

const experiences = [
	{
		title: 'Freelancer Web Developer',
		company_name: 'Freelance',
		icon: freelance,
		iconBg: '#383E56',
		date: 'January 2021 - September 2021',
		points: [
			'Developing and maintaining websites using JavaScript, HTML5, CSS3, SASS and other related technologies.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Doctor At Work',
		icon: doctoratwork,
		iconBg: '#E6DEDD',
		date: 'September 2021 - February 2022',
		points: [
			'Developing and maintaining websites using JavaScript, HTML5, CSS3, SCSS, Canvas and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Doctor At Work',
		icon: doctoratwork1,
		iconBg: '#383E56',
		date: 'February 2022 - Present',
		points: [
			'Developing and maintaining web applications using React, Astro, Qwik, TailwindCSS and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'D-Creative Studio',
		description:
			'An outstanding animate-on-scroll landing for Creative Studio - a team of innovative designers, developers, videographs and artists who specialize in crafting unique and engaging digital experiences for their clients.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'animate-on-scroll',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: dcreative,
		source_code_link: 'https://github.com/exslym/D-Creative-Studio/',
		website_link: 'https://exslym.github.io/D-Creative-Studio/',
	},
	{
		name: 'Space Invaders [Game]',
		description:
			'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'canvas',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: space_invaders,
		source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
		website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	},

	{
		name: 'CNS-Portfolio',
		description:
			"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'multipage',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: cns_portfolio,
		source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
		website_link: 'https://exslym.github.io/CNS-Portfolio/',
	},
];

export { experiences, projects, services, technologies, testimonials };
