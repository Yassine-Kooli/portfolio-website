import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaCameraRetro } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graphic Designer & Photographer Intern",
    location: "Comguru Agency, Sousse, Tunisia",
    description:
      "As a final-year Graphic Design student, I am gaining hands-on experience at Comguru Agency. My role includes designing graphics for digital media and capturing photography for branding and marketing. This internship allows me to refine my skills and collaborate on real-world projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 - Present",
  },
  {
    title: "Photographer, Filmmaker, Graphic Designer",
    location: "Association Apollon pour la Culture et les Arts, Ksar Hellal, Tunisia",
    description:
      "• Participated in cinematographic training and the shooting of the movie 'Another Route' as part of the 'Obrez' project funded by the British Council of Tunisia.\n" +
      "• Volunteered as a Photographer in the Street Theatre Day in Ksar Hellal.\n" +
      "• Volunteered as a Photographer and Videographer in multiple editions of the Street Arts Festival.",
    icon: React.createElement(FaCameraRetro),
    date: "Feb 2019 - Present",
  },
  {
    title: "Freelance Photographer",
    location: "Tunisia",
    description:
      "Freelance photographer with experience spanning from pre-secondary school to the present, focusing on:\n" +
      "• Portrait photography.\n" +
      "• Automotive photography.\n" +
      "• Product photography.\n" +
      "• Event photography.\n" +
      "• Artistic projects.",
    icon: React.createElement(FaCameraRetro),
    date: "2015 - Present",
  },
  {
    title: "Photographer, Filmmaker",
    location: "MetaBuzz Agency, Ksar Hellal, Tunisia",
    description:
      "Worked with the following clients through MetaBuzz Agency:\n" +
      "• Kbayer Meuble: Photographer and Filmmaker.\n" +
      "• SZ Metal: Filmmaker.\n" +
      "• Carthage Medical Center: Photographer and Filmmaker.\n" +
      "• Hssin Plast: Photographer.\n" +
      "• Challenge Gym and Fitness: Photographer and Videographer.",
    icon: React.createElement(FaCameraRetro),
    date: "May 2023 - Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Photography",
  "Automotive Photography",
  "Portrait Photography",
  "Event Photography",
  "Product Photography",
  "Color Grading",
  "Photo Editing",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "Graphic Design",
  "Logo Design",
  "Branding",
  "Poster Design",
  "Videography",
  "Filmmaking",
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "Storytelling",
] as const;

