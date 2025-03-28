import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Uttam Kumar",
  initials: "UK",
  url: "https://github.com/uttam1119",
  location: "India",
  locationLink: "",
  description:
    "Full-stack Developer with a passion for AI, frontend, and backend technologies. Constantly exploring new challenges and building innovative solutions. Find me on GitHub,LinkedIn and Twitter, always sharing new projects and insights.",
  summary:
    "In 2025, I am a final-year Computer Science student focused on full-stack development, AI, and backend technologies. I’ve interned at Apiero Technica Pvt. Ltd., Acompworld Technosoft Pvt. Ltd., and built various innovative projects. I’m passionate about creating impactful solutions and always seeking new challenges.",
  avatarUrl:
    "https://drive.google.com/file/d/1of8eg76mCAK0dmZ1PrqW_4CqnRLCg9zN/view?usp=sharing",
   
  skills: [
    "Data Structures and Algorithms",
    "C++",
    "C",
    "Java",
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Langchain.js",
    "Express",
    "Python",
    "Postgres",
    "MongoDB",
    "TailwindCSS",
    "Bootstrap",
    "Shadcn UI",
    "Magic UI",
    "Framer Motion",
    "Git",
    "Github",
    "Bash",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kumaruttam519@gmail.com",
    tel: "+91 6204267122",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/uttam1119",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uttam19/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/uttamm_19",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@bunniee.11",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:kumaruttam519@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      "Download CV": {
        name: "Download Resume",
        url: "https://drive.google.com/file/d/1B8-upepEAtO-k8eEcSFX0vNRky7bTT00/view?usp=drive_link",
        icon: Icons.download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Apiero Technica Pvt. Ltd.",
      badges: [],
      href: "",
      location: "Bhopal, Madhya Pradesh",
      title: "Software Development Engineer Intern",
      logoUrl: "/apiero.jpeg",
      start: "Aug 2023",
      end: "Dec 2023",
      description:
        "Developed a robust car rental platform using the MERN stack, optimizing booking workflows and streamlining the checkout process with secure payment gateway integration. Engineered a scalable architecture to enhance platform reliability, reducing downtime while ensuring seamless user experiences. Leveraged Agile methodologies to collaborate with cross-functional teams, driving efficient sprint deliveries and boosting user engagement.",
    },
    {
      company: "Acompworld Technosoft Pvt. Ltd.",
      badges: [],
      href: "",
      location: "Bhopal, Madhya Pradesh",
      title: "Web Developer (Freelancer)",
      logoUrl:
        "/acompworld_logo.jpeg",
      start: "Sep 2022",
      end: "Jan 2023",
      description:
        "Led the development of new features for the Discuss platform using ReactJS, NodeJS, MongoDB, Socket.IO, and Express.js, enhancing real-time interactions and overall performance. Improved user experience, resulting in higher retention and increased daily active users. Optimized API performance and database queries to ensure smooth scalability and responsiveness.",
    },
  ],
  education: [
    {
      school: "Lakshmi Narain College of Technology",
      href: "https://lnct.ac.in/",
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      logoUrl:
        "/LNCT_Bhopal_Logo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "HirePrep AI",
      href: "https://hireprep-ai.vercel.app/",
      active: true,
      description:
        "With a focus on making career growth seamless and AI-driven, I built an AI Career Coach, a full-stack web app integrating an AI resume builder, mock interview prep, and an interactive industry trends dashboard. It features intelligent cover letter generation and ATS-optimized resume content, using AI to analyze job descriptions and personalize documents—empowering users with tailored career insights.",
      technologies: ["Next.js", "NeonDB", "Prisma", "Gemini API", "Inngest", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://hireprep-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Uttam1119/hirePrepAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/hirePrepAI.png",
    },
    {
      title: "F.R.I.E.N.D.S.",
      href: "https://friends-beta-five.vercel.app/",
      active: true,
      description:
        "Frustrated with annoying ads and pop-ups on streaming sites, I built a simple, ad-free website to watch Friends without distractions. The goal was to create a smooth and enjoyable viewing experience while also using the project as a fun way to improve my JavaScript skills.",
      technologies: ["JavaScript", "TailwindCSS",  "JSON"],
      links: [
        {
          type: "Website",
          href: "https://friends-beta-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Uttam1119/FRIENDS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/friends-tv-series.jpg",
      video: "",
    },
    {
      title: "MOVIE-fied",
      href: "https://movi-yapa.vercel.app/",
      active: true,
      description:
        "Tired of jumping between different sites for movie details, I built a simple website where you can find everything about any movie in one place. Just search for a title, and you'll get its trailer, cast, director, reviews, and even similar movie recommendations—all in one clean, easy-to-use platform.",
      technologies: [
        "React.js",
        "Javascript",
        "react-player",
        "saas",
      ],
      links: [
        {
          type: "Website",
          href: "https://movi-yapa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Uttam1119/MoviYapa",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/movie.png",
      unoptimized: true,
      video: "",
    },
    {
      title: "GyaanChakshu",
      href: "",
      active: true,
      description:
        "GyaanChakshu is an AI-driven search engine that delivers real-time results with precise answers and cited references. It features a user-friendly frontend built with Streamlit for seamless interaction, while its backend, powered by Node.js, leverages a Hugging Face model for enhanced search capabilities.",
      technologies: ["NodeJS", "Streamlit", "Python", "HuggingFace"],
      links: [
        {
          type: "Video",
          href: "https://youtu.be/hZe5pIdumFQ",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Uttam1119/SearchEngine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/GyaanChakshu.png",
      video: "",
    },
    {
      title: "TubeFlow",
      href: "",
      active: true,
      description:
        "TubeFlow is a cooperative platform built to optimize YouTube content production and administration. It facilitates smooth collaboration among creators, managers, and editors by simplifying video uploads, metadata modifications, approval processes, and scheduling.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "NextJS Server Actions", "MongoDB"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Uttam1119/tubeFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/tubeFlow.png",
      unoptimized: true,
    },
    {
      title: "Chat-App",
      href: "",
      active: true,
      description:
        "This real-time chat application, built with the MERN stack, enables seamless messaging with features like instant chats, user authentication, and real-time notifications. It leverages Socket.IO for smooth, interactive communication.",
      technologies: [
        "JavaScript",
        "React.js",
        "TailwindCSS",
        "NodeJS",
        "MongoDB",
        "ExpressJS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Uttam1119/Chat-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/chat-app.png",
      unoptimized: true,
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2023",
      dates: "September 2023",
      location: "Bhopal, Madhya Pradesh",
      description:
        "Winner of the College Internal Hackathon for SIH. Developed an application which helps user in getting advice in legal cases by using previous available legal cases or decisions.",
      image: "/Smart-India-Hackathon-2023.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Uttam1119/SIH-2023",
        },
      ],
    },
    {
      title: "Girlscript Summer of Code 2024",
      dates: "May 2024 - August 2024",
      location: "Remote",
      description:
        "Was part of a team in developing the backend for a web application that helps people find and book flights for their trips.",
      image:
        "https://utfs.io/f/NtrpVLRyI4W6ABC7kuVMp6lciJjUWPSV20T4eDnCKIuXFvLo",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gssoc.girlscript.tech/",
        },
        {
          title: "Contributor Badge",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/168We3ddf8BQ3U2hpOlGcF9ssUmCETV_3/view?usp=sharing",
        },
      ],
    },
    {
      title: "National Agro Hackathon",
      dates: "March 2023",
      location: "Bhopal, Madhya Pradesh",
      description:
        "Runner up of 280+ teams in the National Agro Hackathon organised by LNCT Group of Colleges. Developed a platform to remove the middleware between farmers and customers.",
      image:
        "/agroo.jpg",
      links: [
        {
          title: "Github",
          href: "https://github.com/Uttam1119/Agro-Geeks",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Video",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/382GIqgAAWA",
        },
        {
        title: "Link",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://drive.google.com/file/d/1S3MeRpW65-Kazt7XfO6azHdlNLZlDt2e/view?usp=sharing",
      },
    ],
    },
    {
      title: "Dare to Start Bootcamp",
      dates: "January 23rd, 2022",
      location: "Bhopal, Madhya Pradesh",
      description:
        "Mentored 150+ students over 1 month, guiding them in web development, data structures & algorithms, and coding best practices, while assisting with project building",
      image:
        "d2s.webp",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/klic-l-kalchuri-lnct-group-incubation-centers_dare-to-start-a-training-bootcamp-for-lnct-share-7062417387760828416-qzVq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADDgHn4B1b0evvWnivyFf8YXiUHxA91KB-U",
        },
      ],
    },
  ],
} as const;
