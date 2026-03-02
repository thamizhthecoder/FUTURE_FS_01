import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

export const personalInfo = {
  name: "Thamizh Selvan .P",
  role: "Computer Science Engineering Student",
  tagline: "Building intelligent, AI-driven solutions to solve real-world challenges.",
  bio: "Motivated and curious Computer Science Engineering student with a strong foundation in core computing concepts and problem-solving. Passionate about building intelligent, AI-driven solutions and applying technical knowledge to real-world challenges. Eager to contribute effectively in a professional environment while continuously learning, innovating, and growing as an AI-driven developer and technology professional."
};

export const skills = [
  {
    category: "Languages & Frameworks",
    icon: <Code2 size={24} />,
    items: ["Python", "Java", "C/C++", "HTML & CSS", "Flask"]
  },
  {
    category: "Databases & Tools",
    icon: <Database size={24} />,
    items: ["MySQL", "MongoDB", "Git", "VS Code", "Android Studio"]
  },
  {
    category: "Soft Skills",
    icon: <Terminal size={24} />,
    items: ["Self-learning", "Team Collaboration", "Open to feedback", "Creative Problem Solving"]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science and Engineering (BE in CSE)",
    institution: "Sri Venkateswara College of Engineering (Chennai, Tamil Nadu)",
    duration: "Sep 2023 - Expected May 2027",
  }
];

export const certifications = [
  "Smart India Hackathon (Internal Round) : Participant",
  "Infosys Springboard : Java Programming Fundamentals",
  "NPTEL: Introduction to Ethical Hacking"
];
