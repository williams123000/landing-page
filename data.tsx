import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Egresado",
        icon: <Briefcase />,
        description: "Ingeniería en Computación",
    },
    {
        id: 2,
        name: "Universidad",
        icon: <UsersRound />,
        description: "Universidad Autonoma Metropolitana Unidad Cuajimalpa",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+10 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Experience",
        icon: <Brush size={20} />,
        link: "#experience",

    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 5,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 6,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Will-Flix",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/williams123000/WillFlix",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Scifolio",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/williams123000/SCIFOLIO",
        urlDemo: "#!",
    }
];


export const dataExperience = [
    {
        id: 1,
        title: "Desarrollo y tecnologías web",
        experience: [
            {
                name: "HTML",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Basic",
                value: 10,
            },
            {
                name: "React",
                subtitle: "Basic",
                value: 30,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Sistemas, backend y bases técnicas",
        experience: [
            {
                name: "Sistemas Operativos (Linux y Windows)",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Resolución de problemas técnicos",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Node JS",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "MySQL",
                subtitle: "Intermedio",
                value: 40,
            },
            {
                name: "PHP",
                subtitle: "Basic",
                value: 40,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web básicos y personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },

        ],
    },
    {
        id: 2,
        title: "Programación",
        icon: <Code2 />,
        features: [
            {
                name: "Programación con JavaScript",
            },
            {
                name: "Programación con HTML y CSS",
            },
            {
                name: "Programación con Node JS y Express",
            },
            {
                name: "Programación básica con Python",
            },
        ]
        
    },
    {
        id: 3,
        title: "Soporte",
        icon: <Wrench />,
        features: [
            {
                name: "Soporte técnico básico",
            },
            {
                name: "Diagnóstico basico de software y hardware",
            },
            {
                name: "Instalación y configuración de sistemas operativos",
            },
            {
                name: "Mantenimiento básico de equipos",
            }
        ],
    },
    
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+52 999 14 45 30 2",
        link: "tel:9991445302",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/williams123000",
        link: "https://github.com/williams123000",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "williamschan72@gmail.com",
        link: "mailto:williamschan72@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Curso definitivo HTML",
        description:
        "Excelente curso de (Platzi), me ayudo a entender los conceptos básicos de HTML y a crear sitios web.",
        imageUrl: "/platzi.png",
    },
    {
        id: 2,
        name: "Curso de React.js",
        description:
        "Muy buen curso de (Platzi), me ayudo a entender los conceptos básicos de React y a crear aplicaciones web.",
        imageUrl: "/platzi.png",
    },
    {
        id: 3,
        name: "Introducción a las tecnologías emergentes",
        description:
        "Excelente curso de (Santander Open Academy), me ayudo a entender las tecnologías emergentes y su impacto en la sociedad.",
        imageUrl: "/santander.png",
    },
    {
        id: 4,
        name: "Networking Basic",
        description:
        "Excelente curso de (Cisco), me ayudo a entender los conceptos básicos de redes y a configurar dispositivos de red.",
        imageUrl: "/cisco.png",
    },
    {
        id: 5,
        name: "Desarrollo Frontend",
        description:
        "Excelente curso de (Capacítate para empleo), me ayudo a entender los conceptos básicos de desarrollo frontend y a crear sitios web.",
        imageUrl: "/capacitate.jpeg",
    }
];