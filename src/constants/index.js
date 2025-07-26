import {
	ai_3d_tshirts,
	astro,
	currency_list,
	dcreative,
	discord,
	doctoratwork,
	eventlify,
	exs_directory,
	freelance,
	game_2048,
	github_alt,
	javascript,
	linkedin,
	nextjs,
	reactjs,
	space_invaders,
	tailwind,
	threejs,
	tiny_world_3d,
	tldraw_editor,
	typescript,
	vite,
} from '../assets';

const githubUser = import.meta.env.VITE_APP_GITHUB_USER;
const linkedinUser = import.meta.env.VITE_APP_LINKEDIN_USER;
const discordUser = import.meta.env.VITE_APP_DISCORD_USER;

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

const technologies = [
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'NextJS',
		icon: nextjs,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'Tailwind',
		icon: tailwind,
	},
	{
		name: 'ThreeJS',
		icon: threejs,
	},
	{
		name: 'Astro',
		icon: astro,
	},
	{
		name: 'Vite',
		icon: vite,
	},
];

// Duration:
let date1 = new Date(2024, 8, 10);
let date2 = new Date();
let year1 = date1.getFullYear();
let year2 = date2.getFullYear();
let month1 = date1.getMonth() + 1;
let month2 = date2.getMonth() + 1;
if (month1 === 0) {
	month1++;
	month2++;
}
let duration;
let months = (year2 - year1) * 12 + (month2 - month1);
let years = Math.floor(months / 12);
let diff = Math.abs(month2 - month1);

let option1 = `(${years}\u00A0yr\u00A0${diff}\u00A0mos)`;
let option2 = `(${years}\u00A0yr\u00A0${diff}\u00A0mo)`;
let option3 = `(${years}\u00A0yr)`;
let option4 = `(${years}\u00A0yrs\u00A0${diff}\u00A0mos)`;
let option5 = `(${years}\u00A0yrs\u00A0${diff}\u00A0mo)`;
let option6 = `(${years}\u00A0yrs)`;
let option7 = `(${months}\u00A0mos)`;
let option8 = `(${months}\u00A0mo)`;

switch (true) {
	case months >= 12:
		switch (true) {
			case years === 1:
				switch (true) {
					case diff > 1:
						duration = option1;
						break;
					case diff === 1:
						duration = option2;
						break;
					default:
						duration = option3;
				}
				break;
			case years > 1:
				switch (true) {
					case diff > 1:
						duration = option4;
						break;
					case diff === 1:
						duration = option5;
						break;
					default:
						duration = option6;
				}
				break;
			default:
				switch (true) {
					case diff > 1:
						duration = option1;
						break;
					default:
						duration = option2;
				}
		}
		break;
	case months === 0:
		duration = '';
		break;
	default:
		switch (true) {
			case months > 1:
				duration = option7;
				break;
			default:
				duration = option8;
		}
}

const experiences = [
	{
		title: 'Senior Frontend Developer',
		company_name: 'Freelance | Self-employed',
		icon: freelance,
		iconBg: '#383E56',
		date: `September 2024 - Present ${duration}`,
		points: [
			'Frontend Development of websites and web applications using leading\u2011edge libraries such as React, Next, and related technologies.',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Doctor At Work',
		icon: doctoratwork,
		iconBg: '#383E56',
		date: `September 2020 - September 2024 (4\u00A0yrs)`,
		points: [
			'Developed and supported over 150 websites and web applications, as well as other visual materials for advertising campaigns using Figma design layouts using React, Next, JavaScript, HTML, CSS.',
			"Adapted and refined the code of third-party client projects made in React framework, revised for publication on the company's platforms.",
			'By modernizing layout templates for pharmaceutical advertising projects, I increased the productivity of my team by 25%, which allowed us to implement projects faster and more efficiently.',
			'Implemented a systematic code review process that reduced the number of errors and reduced project deadlines by 20%, which in turn led to an\u00A0increase in the profitability of the organization.',
			'Collaborated with cross\u2011functional teams, including designers, project managers, and other developers to create high\u2011quality products.',
			'Worked with Vite, Webpack builders, used in projects: JavaScript, React, Next, ThreeJS.',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Freelance | Self-employed',
		icon: freelance,
		iconBg: '#383E56',
		date: 'January 2019 - September 2020  (1\u00A0yr\u00A09\u00A0mos)',
		points: [
			'Developed and maintained over 30 websites using JavaScript, React, HTML5, CSS3, SASS/SCSS and other related technologies.',
			'Implemented responsive adaptive design and ensured cross\u2011browser compatibility.',
		],
	},
];

const projects = [
	{
		name: 'Startups Directory',
		description:
			'A web application, which is a platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, explore other pitches, and gain exposure through a\u00A0clean minimalist design for a\u00A0seamless user experience.',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react19',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'next15',
				color: 'yellow-text-gradient',
			},
		],
		image: exs_directory,
		source_code_link: 'https://github.com/exslym/ex_directory',
		website_link: 'https://ex-directory.vercel.app/',
	},
	{
		name: 'Tldraw Editor',
		description:
			'This application offers seamless drawing, shape modification, AI\u2011powered shape recognition, and the ability to save projects to a\u00A0gallery for future interaction and editing, providing a\u00A0smooth and user\u2011friendly experience.',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'next15',
				color: 'yellow-text-gradient',
			},
		],
		image: tldraw_editor,
		source_code_link: 'https://github.com/exslym/tldraw-editor',
		website_link: 'https://tldraw-editor.vercel.app/',
	},
	{
		name: 'Eventlify',
		description:
			'The events web application stands as a comprehensive, fullstack platform for managing events taking place globally. With this app you have the capability to purchase tickets for any event published there or even initiate and manage your own events.',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'next14',
				color: 'yellow-text-gradient',
			},
		],
		image: eventlify,
		source_code_link: 'https://github.com/exslym/eventlify/',
		website_link: 'https://eventlify-exs.vercel.app/',
	},
	{
		name: '3D Tiny World',
		description:
			'Take a look at my latest 3D portfolio outstanding animated website with levitating island and flying models using 3D\u2011graphics and animations with ThreeJS, React and Tailwind.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'threejs',
				color: 'yellow-text-gradient',
			},
		],
		image: tiny_world_3d,
		source_code_link: 'https://github.com/exslym/Tiny-World-3D/',
		website_link: 'https://exslym.github.io/Tiny-World-3D/',
	},
	{
		name: '3D T-Shirts AI Design',
		description:
			'A website project where you can make custom design t\u2011shirts in 3D with the help of AI in real\u2011time. You can also choose color or upload your own images to make your t\u2011shirt truly unique.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: ai_3d_tshirts,
		source_code_link: 'https://github.com/exslym/3D-AI-Project/',
		website_link: 'https://exslym.github.io/3D-AI-Project/',
	},
	{
		name: 'Cryptocurrency Prices',
		description:
			'A website version of mobile App created using the Flutter framework. The app provides real\u2011time information about the prices of various cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and many others.',
		tags: [
			{
				name: 'dart',
				color: 'blue-text-gradient',
			},
			{
				name: 'flutter',
				color: 'green-text-gradient',
			},
			{
				name: 'bloc',
				color: 'pink-text-gradient',
			},
			{
				name: 'firebase',
				color: 'yellow-text-gradient',
			},
		],
		image: currency_list,
		source_code_link: 'https://github.com/exslym/Crypto-Coins-List/',
		website_link: 'https://cryptocurrency-prices-exslym.vercel.app/',
	},
	// {
	// 	name: 'ChatGPT App (web vers.)',
	// 	description:
	// 		'A website version of mobile app ChatGPT project where you can interact with openAI chatbot based on gpt-3.5-turbo-0301 model, also you can choose other model on the fly.',
	// 	tags: [
	// 		{
	// 			name: 'dart',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'flutter',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai-api',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: chat_gpt,
	// 	source_code_link: 'https://github.com/exslym/ChatGPT_App/',
	// 	website_link: 'https://chat-gpt-app-exslym.vercel.app/',
	// },
	{
		name: 'D-Creative Studio',
		description:
			'An outstanding animate-on-scroll landing for Creative Studio\u00A0\u2011 a\u00A0team of innovative designers, developers, videographs and artists who specialize in crafting unique and engaging digital experiences for their clients.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'animations',
				color: 'yellow-text-gradient',
			},
		],
		image: dcreative,
		source_code_link: 'https://github.com/exslym/d-creative-studio/',
		website_link: 'https://exslym.github.io/d-creative-studio/',
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
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'canvas',
				color: 'yellow-text-gradient',
			},
		],
		image: space_invaders,
		source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
		website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	},
	{
		name: '2048 [Game]',
		description:
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a\u00A0tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a\u00A0value equal to the sum of the two.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'algorithms',
				color: 'yellow-text-gradient',
			},
		],
		image: game_2048,
		source_code_link: 'https://github.com/exslym/2048-Game/',
		website_link: 'https://exslym.github.io/2048-Game/',
	},
];

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: `https://www.linkedin.com/in/${linkedinUser}/`,
	},
	{
		name: 'github',
		icon: github_alt,
		link: `https://github.com/${githubUser}/`,
	},
	{
		name: 'discord',
		icon: discord,
		link: `https://discordapp.com/users/${discordUser}/`,
	},
];

export { experiences, projects, socials, technologies };
