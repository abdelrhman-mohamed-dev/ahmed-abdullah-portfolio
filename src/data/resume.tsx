import { Icons } from "@/components/icons";
import { Gamepad, HomeIcon, NotebookIcon, Phone, PcCase, Database } from "lucide-react";

export const DATA = {
  name: "Ahmed Abdullah ",
  initials: "AA",
  url: "http://localhost:3000",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/Dubai",
  description:
    "Software Engineer turned Entrepreneur and Programming Teacher. Passionate about building innovative solutions and empowering others to learn and grow.",
  summary:
    "Passionate about inspiring the next generation of innovators, I bring hands-on experience in teaching programming and game development, alongside a strong foundation in computer science and artificial intelligence. With a dedication to fostering critical thinking and engagement in students, I am eager to contribute to a collaborative and inclusive educational environment that encourages curiosity and creativity. My goal is to deliver impactful learning experiences that empower students to explore and excel in the everevolving tech landscape.",
  avatarUrl: "",
  skills: [
    "Python",
    "C#",
    "Basic networking concepts",
    "TCP/IP",
    "LAN/WAN configurations",
    "MySQL",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Problem-Solving",
    "Teamwork",
    "Creativity",
    "Student Engagement",
    "Blender",
    "Unity",
    "Time Management",
    "Patience",
    "Machine Learning",
    "Linux",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ahmedabduahmed2001@gmail.com",
    tel: "+971562698933",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmed-abdullah-82bb8322b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ahmedabduahmed2001@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      phone: {
        name: "Call Me",
        url: "tel:+971562698933",
        icon: Phone,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "3c Schools",
      href: "",
      badges: [],
      location: "Remote",
      title: "Programming Instructor",
      logoUrl: "",
      start: "oct 2023",
      end: "present",
      description:
        "Teaching fundamental programming concepts to students, including coding logic, problemsolving, and debugging. - Designing lesson plans that cover basic programming languages and fostering a deep understanding of software development principles. - Developing engaging and interactive activities to enhance students’ interest in technology.",
    },
  ],
  education: [
    {
      school: "Helwan University",
      href: "",
      degree: "Bachelor's in Computer Science and Articial Intelligence",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "3D Multiplayer Game",
      href: "",
      dates: "Jan 2023 - Jun 2024",
      active: true,
      description:
        "Developed a 3D multiplayer game using Unity, improving engagement through networked gameplay. Improved gameplay stability by 30% by implementing player synchronization and refining core mechanics.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Game",
          href: "#",
          icon: <Gamepad className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1649341566122-0bd5e7a3eef8",
      video:
        "",
    },
    {
      title: "Auction System",
      href: "",
      dates: "jan 2022 - feb 2022",
      active: true,
      description:
        "Enhanced system efficiency by 25% by developing a streamlined PHP-based auction management system.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "System",
          href: "#",
          icon: <PcCase className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1728311369940-1b36d15632dc",
      video: "",
    },
    {
      title: "Database Designer",
      href: "",
      dates: "Jan 2021 - April 2021",
      active: true,
      description:
        "Improved reservation efficiency by 30% by designing a SQL-based hotel database for reservations and room management.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Database",
          href: "",
          icon: <Database className="size-3" />,
        },
      ],
      image: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036",
      video: "",
    },
    {
      title: "Web Developer",
      href: "",
      dates: "April 2021 - jun 2021",
      active: true,
      description:
        "Created a functional website with .NET, integrating 5 front-end and back-end features.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      video:
        "",
    },
  ],

} as const;
