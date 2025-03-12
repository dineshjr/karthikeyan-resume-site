import AMJ from '../assets/images/AMJ.png'
import Aspira from '../assets/images/Aspira.png'
import Carz from '../assets/images/Carz.png'
import Cubic from '../assets/images/cubic.png'
import Canva from '../assets/images/devicon_canva.png'
import Figma from '../assets/images/devicon_figma.png'
import InfinityQuest from '../assets/images/infinity_quest.png'
import Khivraj from '../assets/images/khivraj.png'
import Musicfy from '../assets/images/Musicfy.png'
import PayNow from '../assets/images/Pay_Now.png'
import Maze from '../assets/images/simple-icons_maze.png'
import vlc from '../assets/images/vl_creations.png'
const experiences = [
    {
        company: 'Cubic Designz',
        role: 'Freelancing Projects',
        img: Cubic, // ✅ If placed in the public folder
        period: '2024 - Present',
        position: 'left',
        responsibilities: [
            'Collaborate with clients to conceptualize and deliver engaging UI/UX solutions for diverse projects.',
            'Conduct user research and usability testing to align designs with business goals and user needs.',
            'Create wireframes, prototypes, and high-fidelity designs to enhance user engagement and product functionality.',
            'Manage projects independently, ensuring timely delivery and client satisfaction.'
        ]
    },
    {
        company: 'Khivraj',
        role: 'Associate Hr Strategy',
        period: '2024 - Present',
        img:Khivraj,
        position: 'right',
        responsibilities: [
            'Managed recruitment processes, including job posting, resume screening, and conducting initial interviews.',
            'Handled employee onboarding and training to ensure smooth integration into company workflows.',
            'Collaborated with department heads to address workforce planning and operational needs.',
            'Facilitated employee engagement initiatives, boosting morale and productivity.',
            'Maintained employee records and ensured compliance with HR policies and regulations.'
        ]
    },
    {
        company: 'Infinity Quest',
        role: 'Technical Recruiter',
        period: '2022 - 2023',
        img:InfinityQuest,
        position: 'left',
        responsibilities: [
            'Led the full recruitment lifecycle, sourcing and onboarding top IT talent for U.S.-based clients.',
            'Developed strategic action plans to meet complex hiring needs, ensuring optimal candidate-organization fit.',
            'Established strong client relationships, consistently exceeding expectations in a fast-paced environment.'
        ]
    },
    {
        company: 'VL Creation',
        role: 'Director of Photography',
        period: '2021 - 2022',
        img:vlc,
        position: 'right',
        responsibilities: [
            'Captured compelling visual content, ensuring precise attention to lighting, shadows, and framing.',
            'Executed advanced editing techniques, including color correction and video enhancements, to deliver high-quality assets.',
            'Collaborated with creative teams to align visual outputs with project goals, enhancing overall storytelling.'
        ]
    }
];

const education = [
    {
        company: 'Aspira',
        role: 'Certified UX/UI Designer',
        period: '2022 - 2023',
        logo:Aspira,
        position: 'left',
        responsibilities: [
            'User research (understanding user needs, behaviors, and pain points)',
            'Wireframing & Prototyping (designing and testing user flows before development)',
            'Information architecture (structuring content logically for easy navigation)',
            'Usability testing (ensuring the product is functional and user-friendly)',
            'Visual design (colors, typography, icons, buttons, layouts)',
            'Interactive elements (animations, transitions, hover effects)',
            'Brand consistency (ensuring the product aligns with brand identity)'
        ]
    },
    {
        company: 'AM Jain College of Arts',
        role: 'Bachelor of Commerce (Information Systems Management)',
        logo:AMJ,
        period: '2018-2021',
        position: 'right',
        responsibilities: [
            'This program focuses on the integration of information systems with business strategies, ensuring that graduates can effectively manage digital transformation, data analytics, and enterprise systems.',
            'Business Fundamentals – Accounting, finance, marketing, economics, and management.',
            'Technology & Analytics – Data analysis, business intelligence, and cloud computing.',
            'IT project planning, software development lifecycle, and agile methodologies.',
        ]
    }
]

const caseStudies = [
    {
      id: 1,
      title: "Pay Now",
      description: "Banking Mobile App UX/UI",
      image: PayNow,
      tools: [Figma, Maze],
    },
    {
      id: 2,
      title: "Musicify",
      description: "Listen to Music Together",
      image: Musicfy,
      tools: [Figma, Maze],
    },
    {
      id: 3,
      title: "Carz",
      description: "Car Buying App UX/UI",
      image: Carz,
      tools: [Figma, Maze],
    },
  ];

  const designTools = [
    { icon: Figma, name: "Figma", progress: 90 },
    { icon: Canva, name: "Canva", progress: 80 },
    { icon: Maze, name: "Maze", progress: 90 },
  ];
  
export { experiences , education , caseStudies , designTools};