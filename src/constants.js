import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const links = {
  linkedin: "https://www.linkedin.com/in/shagun-rana-0a4a22241/",
  email: "mailto:shagunr478@gmail.com",
  phone: "tel:+919015375603",
  github: "https://github.com/Shagun478",
  resume: "https://drive.google.com/file/d/1RzsR8v790mwFWjndxKX65fg21qVkXN1q/view?usp=drivesdk",
};

export const avatarFallback = "/avatar.png";

export const projects = [
  {
    title: "Sign Sense",
    role: "Front-End Developer",
    blurb: "Real-time sign language recognition with sentence generation.",
    tech: ["Python", "TensorFlow", "OpenCV", "Teachable Machine"],
    image: "/projects/sign-sense.jpg", 
    links: [
      { label: "GitHub", href: "https://github.com/Shagun478/Sign-Sense", icon: Github }
    ],
  },
  {
    title: "Decentralized Voting System",
    role: "Front-End Developer",
    blurb: "Secure blockchain-based voting with MetaMask wallet auth and Ganache simulation.",
    tech: ["HTML", "CSS", "JavaScript", "MetaMask", "Node.js"],
    image: "/projects/voting.jpg", 
    links: [
      { label: "GitHub", href: "https://github.com/Shagun478/Decentralized_Voting_System", icon: Github }
    ],
  },
  {
    title: "Destify",
    role: "UI/UX Designer",
    blurb: "Group travel coordination app with seamless onboarding, live tracking, and collaborative planning.",
    tech: ["Figma", "UX Flow", "Prototyping"],
    image: "/projects/Destify.jpeg", 
    links: [
      { label: "Devfolio", href: "https://devfolio.co/projects/destify-group-travelling-6af3", icon: ExternalLink }
    ],
  },
];

export const skills = [
  { group: "Design", items: ["Figma", "UI Design", "UX Research", "Prototyping", "Wireframing"] },
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "React Native"] },
  { group: "Backend / Other", items: ["Node.js", "MySQL", "IoT", "Machine Learning", "Blockchain"] },
];

export const achievements = [
  { text: "47th rank in CUCAT" },
  { text: "3rd in HACK 5.0 (NIT Hamirpur)" },
  { text: "Top 10 in HackMatrix (IIT Patna)" },
  { text: "Top 10 in HackWithTricity (Chandigarh University)" },
  { text: "Project Expo 2025 Finalists" },
];

export const experience = [
  {
    org: "C Square, Chandigarh University",
    role: "Community Head",
    time: "Aug 2023 – Present",
    points: [
      "Scaled the university’s largest tech community to 1200+ active members.",
      "Built partnerships and represented the club at 10+ national-level events.",
      "Managed the club’s online presence across LinkedIn, Discord and more.",
    ],
  },
];
