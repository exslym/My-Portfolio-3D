import {
	ai_3d_tshirts,
	ai_summarizer,
	astro,
	chat_gpt,
	cns_portfolio,
	css,
	currency_list,
	dcreative,
	discord,
	doctoratwork,
	doctoratwork1,
	e_commerce,
	eventlify,
	exs_directory,
	flutter,
	freelance,
	game_2048,
	git,
	github_alt,
	html,
	javascript,
	linkedin,
	nextjs,
	qwik,
	reactjs,
	social_network,
	space_invaders,
	tailwind,
	threejs,
	tiny_world_3d,
	typescript,
	vite,
	webpack,
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
	// {
	// 	name: 'Qwik',
	// 	icon: qwik,
	// },
	// {
	// 	name: 'HTML5',
	// 	icon: html,
	// },
	// {
	// 	name: 'CSS3',
	// 	icon: css,
	// },
	// {
	// 	name: 'Flutter',
	// 	icon: flutter,
	// },
	// {
	// 	name: 'git',
	// 	icon: git,
	// },
	// {
	// 	name: 'Webpack',
	// 	icon: webpack,
	// },
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
let month1 = date1.getMonth();
let month2 = date2.getMonth();
if (month1 === 0) {
	month1++;
	month2++;
}
let duration;
let months = (year2 - year1) * 12 + (month2 - month1) + 1;
let years = Math.floor(months / 12);
let diff = Math.abs(month2 - month1 + 1);

if (months > 12) {
	if (years > 1) {
		if (diff > 1) {
			duration = `${years} yrs ${diff} mos`;
		} else {
			duration = `${years} yrs ${diff} mo`;
		}
	} else {
		if (diff > 1) {
			duration = `${years} yr ${diff} mos`;
		} else {
			duration = `${years} yr ${diff} mo`;
		}
	}
} else {
	if (diff > 1) {
		duration = `${months} mos`;
	} else {
		duration = `${months} mo`;
	}
}

const experiences = [
	{
		title: 'Senior Frontend Developer',
		company_name: 'Freelance | Self-employed',
		icon: freelance,
		iconBg: '#383E56',
		date: `September 2024 - Present (${duration})`,
		points: [
			'Frontend Development of websites and web applications using leading-edge libraries such as React, Next, and related technologies.',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Doctor At Work',
		icon: doctoratwork,
		iconBg: '#383E56',
		date: 'September 2020 - September 2024 (4 yrs)',
		points: [
			'Developed and supported over 150 websites and web applications, as well as other visual materials for advertising campaigns using Figma design layouts using React, Next, JavaScript, HTML, CSS.',
			"Adapted and refined the code of third-party client projects made in React framework, revised for publication on the company's platforms.",
			'By modernizing layout templates for pharmaceutical advertising projects, I increased the productivity of my team by 25%, which allowed us to implement projects faster and more efficiently.',
			'Implemented a systematic code review process that reduced the number of errors and reduced project deadlines by 20%, which in turn led to an increase in the profitability of the organization.',
			'Collaborated with cross-functional teams, including designers, project managers, and other developers to create high-quality products.',
			'Worked with Vite, Webpack builders, used in projects: JavaScript, React, Next, ThreeJS.',
		],
	},
	// {
	// 	title: 'Web Developer',
	// 	company_name: 'Doctor At Work',
	// 	icon: doctoratwork1,
	// 	iconBg: '#E6DEDD',
	// 	date: 'September 2020 - February 2021',
	// 	points: [
	// 		'Developing and maintaining websites using JavaScript, HTML5, CSS3, SCSS, Canvas and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 	],
	// },
	{
		title: 'Frontend Developer',
		company_name: 'Freelance | Self-employed',
		icon: freelance,
		iconBg: '#383E56',
		date: 'January 2019 - September 2020  (1 yr 9 mos)',
		points: [
			'Developed and maintained over 30 websites using JavaScript, React, HTML5, CSS3, SASS/SCSS and other related technologies.',
			'Implemented responsive adaptive design and ensured cross-browser compatibility.',
		],
	},
];

const projects = [
	// {
	// 	name: 'E-Commerce Shop App',
	// 	description:
	// 		'A tech-related e-commerce shop page that even guests can visit, allowing users to explore products, apply category filters, and see more products with pagination, which is key for performance in e-commerce projects.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'payloadcms',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'next',
	// 			color: 'yellow-text-gradient',
	// 		},
	// 	],
	// 	image: e_commerce,
	// 	source_code_link: 'https://github.com/exslym/ecommerce/',
	// 	website_link: 'https://e-commerce-exs.payloadcms.app/',
	// },
	{
		name: 'Startups Directory',
		description:
			'A web application, which is a platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, explore other pitches, and gain exposure through a clean minimalist design for a seamless user experience.',
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
		name: 'Eventlify',
		description:
			'The events web application stands as a comprehensive, full-stack platform for managing events taking place globally. With this app you have the capability to purchase tickets for any event published there or even initiate and manage your own events.',
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
			'Take a look at my latest 3D portfolio outstanding animated website with levitating island and flying models using 3D-graphics and animations with ThreeJS, React and Tailwind.',
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
			'A website project where you can make custom design t-shirts in 3D with the help of AI in real-time. You can also choose color or upload your own images to make your t-shirt truly unique.',
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
			'A website version of mobile App created using the Flutter framework. The app provides real-time information about the prices of various cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and many others.',
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
	{
		name: 'ChatGPT App (web vers.)',
		description:
			'A website version of mobile app ChatGPT project where you can interact with openAI chatbot based on gpt-3.5-turbo-0301 model, also you can choose other model on the fly.',
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
				name: 'openai-api',
				color: 'pink-text-gradient',
			},
		],
		image: chat_gpt,
		source_code_link: 'https://github.com/exslym/ChatGPT_App/',
		website_link: 'https://chat-gpt-app-exslym.vercel.app/',
	},
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
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'htnl',
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
	// {
	// 	name: 'AI Article Summarizer',
	// 	description:
	// 		'This minimalistic cozy color app is an AI article summarizer that transforms lengthy articles into clear and concise summaries, using an article extractor and summarizer by RapidAPI, powered by openAI GPT-4.',
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'tailwindcss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai',
	// 			color: 'yellow-text-gradient',
	// 		},
	// 	],
	// 	image: ai_summarizer,
	// 	source_code_link: 'https://github.com/exslym/AI-Summarizer/',
	// 	website_link: 'https://exslym.github.io/AI-Summarizer/',
	// },
	// {
	// 	name: 'Social Network',
	// 	description:
	// 		'A social network project is a dynamic web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting.',
	// 	// description:
	// 	// 'A social network project is a web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting. ReactJS have been used as the primary front-end framework to create dynamic and interactive user interfaces that update in real-time.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'ant-design',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: social_network,
	// 	source_code_link: 'https://github.com/exslym/My-Social-Network/',
	// 	website_link: 'https://exslym.github.io/My-Social-Network/',
	// },
	// {
	// 	name: 'CNS-Portfolio',
	// 	description:
	// 		"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'multipage',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: cns_portfolio,
	// 	source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
	// 	website_link: 'https://exslym.github.io/CNS-Portfolio/',
	// },
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
