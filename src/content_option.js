const logotext = "Dhiae";
const meta = {
    title: "Righi Dhiaeddine",
    description: "I’m Righi Dhiaeddine data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Righi Dhiaeddine",
    animated: {
        first: "coding enthusiast ",
        second: "also an Ai ENTHUSIAST ,proficient with ai tools",
        third: "i do both frontend and backend",
    },
    description: "I'm a full stack developer creating user-friendly and efficient web applications. I'm also an AI enthusiast . I'm currently in Algeria building webapps trying to fill up my resume .",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: " I'm a Masters graduate in Computer Science trying to  learn  and challenge my self more and get into the tech field ",
};
const worktimeline = [{
    jobtitle: "Free lancing",
    where: "social media platforms, reach out to people who need webapps",
    date: "2025 - present",
},


];
const skills = [{
    name: "typescript,react,next.js",
    value: 90,
},
{
    name: "php/laravel",
    value: 75,
},
{
    name: "Node.js",
    value: 80,
},

{
    name: "MYSQL,Postgresql,mongodb",
    value: 90,
},

{
    name: "docker/kubernetes",
    value: 60,
},
{
    name: "nginx/varnish",
    value: 60,
},
];

const services = [{
    title: "UI & UX Design",
    description: "I can design modern UIs depending on your taste and needs.",
},
{
    title: "Backend",
    description: "I can set up your whole database starting from the schema.",
},
{
    title: "Landing pages ",
    description: "I can create a modern landing page for your business",
},
{
    title: "ecommerce webapps ",
    description: "I can create an ecommerce website integrate payment and also a modern admin dashboared that will make your business flow much easier",
},
{
    title: "Full stack webapps",
    description: "I can do all the work on a full stack web app both the frontend and backend ",
},
];

// Portfolio sections with projects
const portfolioSections = [
    {
        title: "Featured Projects",
        projects: [
            {
                id: "microservices-app",
                title: "Microservices Architecture App",
                shortDescription: "A scalable full-stack app with Docker, Kubernetes, and Microservices.",
                description: "An application built with Node.js backend and PostgreSQL hosted on Supabase, with TypeScript for the frontend. Containerized using Docker and clustered with Minikube (2 pods for backend, 2 for frontend). Uses Nginx as a load balancer and Varnish for caching.",
                img: "/assets/microservices-project.png",
                demoLink: "https://www.youtube.com/watch?v=f-L2GvH7XFE",
                category: "Full Stack",
                technologies: ["Node.js", "PostgreSQL", "Supabase", "TypeScript", "Docker", "Kubernetes", "Nginx", "Varnish"],
                hosted: false
            },
            {
                id: "final-year-project",
                title: "Final Year Project",
                shortDescription: "A comprehensive full-stack application developed as my final year project.",
                description: "This is my final year project - a comprehensive full-stack application. The project is not currently hosted as there are no real users, but this demo video will help you understand what the project is about and its capabilities.",
                img: "/assets/final-year-project.jpg",
                images: [
                    "/assets/final-year-project-1.jpg",
                    "/assets/final-year-project-2.jpg",
                    "/assets/final-year-project-3.jpg"
                ],
                demoLink: "https://www.youtube.com/watch?v=M04GrT4P43E&t=23s",
                category: "Full Stack",
                technologies: ["React", "php laravel", "xampp server ", "mysql database",],
                hosted: false
            },
            {
                id: "residence-management",
                title: "Residence Management System",
                shortDescription: "A private residence app for tracking bills, subscriptions, fees, analytics, and proposals.",
                description: "A comprehensive residence management application built for a private residence. This app allows residents to track their bills, view monthly subscriptions and fees, access analytics, and manage proposals. The application provides a complete solution for managing all aspects of residence-related finances and documentation, and so much more if youre interested i can show u all the app on a video demo",
                img: "/assets/residence-management.jpg",

                demoLink: "https://resident-funds-hub.vercel.app/",
                videoLink: "https://www.youtube.com/watch?v=Vu3eCtL499E",
                category: "Full Stack",
                technologies: ["typescript", "Node.js", "supabase"],
                hosted: true
            },
            {
                id: "booking-app",
                title: "Booking & Consultation App",
                shortDescription: "A freelancing booking platform for clients to book consultations and services.",
                description: "A modern booking and consultation application designed for freelancing. This platform allows clients to book my services and consultations directly. I use this app on my social media to streamline the booking process for potential clients. It features an intuitive interface for scheduling, managing appointments, and handling client communications.",
                img: "/assets/booking-app.jpg",
                images: [
                    "/assets/booking-app-1.jpg",
                    "/assets/booking-app-2.jpg"
                ],
                demoLink: "https://zazou-booking.vercel.app/",
                category: "Full Stack",
                technologies: ["React", "Next.js", "TypeScript"],
                hosted: true
            }
        ]
    },
    {
        title: "Learning Projects",
        projects: [
            {
                id: "xo-game",
                title: "XO Game (Tic-Tac-Toe)",
                shortDescription: "A classic tic-tac-toe game built with vanilla JavaScript.",
                description: "A simple and fun tic-tac-toe game built with vanilla JavaScript while learning web development. This project demonstrates fundamental JavaScript concepts including DOM manipulation, event handling, and game logic implementation.",
                img: "/assets/xo-game.jpg",
                images: [
                    "/assets/xo-game-1.jpg"
                ],
                demoLink: "https://zazouaza.github.io/xo-game/",
                category: "Frontend",
                technologies: ["JavaScript", "HTML", "CSS"],
                hosted: true
            },
            {
                id: "qr-generator",
                title: "QR Code Generator",
                shortDescription: "Generate QR codes for any text or URL with customizable sizes.",
                description: "A QR code generator application that allows users to create QR codes for any text or URL. The app features customizable sizes and the ability to download or share the generated QR codes. Built with vanilla JavaScript to practice API integration and user interface design.",
                img: "/assets/qr-generator.jpg",
                images: [
                    "/assets/qr-generator-1.jpg"
                ],
                demoLink: "https://zazouaza.github.io/qr-code-generator/",
                category: "Frontend",
                technologies: ["JavaScript", "HTML", "CSS"],
                hosted: true
            },
            {
                id: "text-editor",
                title: "Text Editor",
                shortDescription: "A rich text editor with formatting options built with JavaScript.",
                description: "A text editor application with rich formatting capabilities. Users can format text with different heading styles, font colors, and highlight colors. This project was created to practice JavaScript DOM manipulation and implement a WYSIWYG editor interface.",
                img: "/assets/text-editor.jpg",
                images: [
                    "/assets/text-editor-1.jpg"
                ],
                demoLink: "https://zazouaza.github.io/text-editor/",
                category: "Frontend",
                technologies: ["JavaScript", "HTML", "CSS"],
                hosted: true
            }
        ]
    }
];

// Legacy format for backward compatibility (can be removed later)
const dataportfolio = [];

const contactConfig = {
    YOUR_EMAIL: "zazourighi@gmail.com",
    YOUR_FONE: "+213 672399411",
    description: "i'm availlable on whats app and i try to respond as quick as possible to the emails  ",
};

const socialprofils = {
    github: "https://github.com/zazouaza",
    linkedin: "https://www.linkedin.com/in/righi-dhiaeddine-383b46317/",
    tiktok: "https://www.tiktok.com/@zazou_coding",
};
export {
    meta,
    dataabout,
    dataportfolio,
    portfolioSections,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};