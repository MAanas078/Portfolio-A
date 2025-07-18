export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Open Source Contributor",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Fullstack Developer",
		company_name: "Aakaar.AI",
		icon: "/company/ask.png",
		iconBg: "#383E56",
		date: "July-2025 - Present",
		points: [
			  "Built and deployed AI - powered web apps using React.js, Node.js, and MongoDB to generate influencer - style ads from product inputs.",
		      "Worked on algorithms to integrate and compile 2D images into realistic 3D models for ad rendering and visualization.",
		       "Optimized backend for 2x faster media generation and 60% better API scalability, enhancing overall system performance.",
			  "Collaborated across teams to launch new features, improve UI/ UX, and cut ad creation time by 40 % through automation.",
		],
	},
	{
		title: "IT Intern",
		company_name: "ITC PVT LTD",
		icon: "/company/itc1.png",
		iconBg: "#E6DEDD",
		date: "1-July-2024 - 27-July-2024",
		points: [
			"eveloped a web app to manage and track daily wage records for laborers, enhancing payroll transparency and efficiency.",
			"Integrated CRUD functionalities with secure authentication to enable authorized access and real- time updates.",
			"Utilized technologies like React.js, Node.js, and MongoDB to build a scalable and user - friendly interface.",
			"Reduced manual errors and streamlined wage calculation processes for on - site supervisors.",
			"Played an active role in sprint discussions, code reviews, and feature planning, fostering a collaborative team spirit.",
		],
	},
	// {
	// 	title: "Software Developer",
	// 	company_name: "Way to Web Pvt. Ltd.",
	// 	icon: "/company/wtw.jpg",
	// 	iconBg: "#E6DEDD",
	// 	date: "2024 - Present",
	// 	points: [
	// 		"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
	// 		"Analyzing feedbacks and fixing bugs.",
	// 		"Search Engine Optimization.",
	// 		"Design Maintainence and hosting maintenance.",
	// 	],
	// },
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Mohd Aanas",
		image: "/socialmedia/behance.svg",
		link: "#",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Mohd Aanas",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/mohd-aanas/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "MOhd Aanas",
		image: "/socialmedia/dribble.svg",
		link: "#",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Mohd Aanas",
		image: "/socialmedia/portfolio.svg",
		link: "#",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Mohd Aanas",
		image: "/tech/github.webp",
		link: "https://github.com/MAanas078",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "3D Portfolio",
		description:
			"A Designed and developed a visually appealing and user-friendly 3D portfolio website using Three.js.",
		tags: [
			{
				name: "Three.js",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/avm.png",
		platform: "Wordpress",
		deploy_link: "#",
	},
	{
		name: "ArogyaMate",
		description:
			" ArogyaMate is a full-stack medical appointment web application designed to simplify the process of booking and managing appointments between patients and doctors. ",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/asm.png",
		source_code_link: "#",
		platform: "Web",
		deploy_link: "https://arogyamate-frontend.onrender.com/",
	},
	{
		name: "CoreIT",
		description:
			"CoreIT is a comprehensive web application designed to streamline the management of IT assets, including laptops, desktops, and other devices. It provides a user-friendly interface for tracking asset details, managing Power, and facilitating efficient IT operations.",
		tags: [
			{
				name: "React",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/img1.png",
		source_code_link: "https://github.com/MAanas078/HackOrbit-ILLUMINATI",
		platform: "Vercel",
		deploy_link: "#",
	},
	{
		name: "WellBot.AI",
		description:
			" Designed and developed a AI Powered 3D Symtoms Diagnosis Analyser using a 3D human body model",
		tags: [
			{
				name: "Three.js",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://github.com/MAanas078/WellBot.AI",
	},
	{
		name: "Recuria",
		description:
			"Recuria is a smart web application designed to revolutionize the traditional hiring process using a modular, multi-agent AI system. ",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/MAanas078/Recuria",
		platform: "Vercel",
		deploy_link: "#",
	},
	// {
	// 	name: "Issue Tracker",
	// 	description:
	// 		"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
	// 	tags: [
	// 		{
	// 			name: "next",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "shadCN",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "mySQL",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/issuetracker.png",
	// 	source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
	// 	platform: "Vercel",
	// 	deploy_link: "https://project-issue-tracker.vercel.app/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
