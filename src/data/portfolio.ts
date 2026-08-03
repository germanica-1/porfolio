export interface SkillCategory {
  name: string
  icon: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  featured?: boolean
}

export interface Testimonial {
  name: string
  role: string
  avatar: string
  quote: string
  link: string
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Monitor",
    skills: [
      "React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui",
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      "Python", "Flask", "REST APIs", "Supabase", "SQLite",
      "Firebase", "JavaScript", "Node.js",
    ],
  },
  {
    name: "AI & Computer Vision",
    icon: "Brain",
    skills: [
      "FaceNet", "MTCNN", "OpenCV", "NumPy", "Google Gemini API", "MediaPipe",
    ],
  },
  {
    name: "Tools & Hardware",
    icon: "Wrench",
    skills: [
      "Git", "GitHub", "Linux", "Bash", "Raspberry Pi", "EmailJS",
      "Web3Forms", "tmux", "Arduino", "ESP32", "Docker",
    ],
  },
]

export const projects: Project[] = [
  {
    title: "SeNT System",
    description:
      "Secure Entry, Notification, and Tracking System for school security. A Raspberry Pi captures student faces and sends frames to a Flask backend, where FaceNet embeddings are compared against Supabase-stored data to log attendance and email parents automatically.",
    technologies: ["Python", "Flask", "FaceNet", "OpenCV", "Supabase", "Raspberry Pi", "React"],
    github: "https://github.com/germanica-1/SeNT-System",
    featured: true,
  },
  {
    title: "F.A.C.S — Fingerprint Attendance",
    description:
      "Fingerprint Attendance with Control System built for Philgen Engineering Services. Pairs a hardware fingerprint sensor with a Python admin application to manage employee check-ins both offline and online using SQLite.",
    technologies: ["Python", "SQLite", "Fingerprint Sensor", "Hardware Integration"],
    github: "https://github.com/germanica-1/Biometric-Attendance",
    featured: true,
  },
  {
    title: "Face Embedding API",
    description:
      "A backend service that processes images and converts them into face vector embeddings for facial recognition and identity verification. Handles embedding syncing from a Raspberry Pi and triggers email alerts via EmailJS on a successful match.",
    technologies: ["Python", "Flask", "FaceNet", "NumPy", "OpenCV", "EmailJS"],
    github: "https://github.com/germanica-1/face-embedding-api",
  },
  {
    title: "CodeScribe CLI",
    description:
      "A Python command-line tool that analyzes any codebase and generates a structured JSON manifest of project metadata — ideal as context for AI-powered documentation and project understanding. Respects .gitignore and supports a custom .codescribeignore.",
    technologies: ["Python", "CLI", "JSON"],
    github: "https://github.com/germanica-1/codescribe-cli",
  },
  {
    title: "STI ChatBot",
    description:
      "A single-page AI chatbot with an STI College-themed interface powered by the Google Gemini API, delivering real-time AI-driven responses for students in a clean, responsive layout.",
    technologies: ["React", "TypeScript", "Vite", "Google Gemini API"],
    github: "https://github.com/germanica-1/STI-ChatBot",
  },
  {
    title: "E-Quakes",
    description:
      "A server that fetches earthquake activity data from the PHIVOLCS website and stores it in JSON format for monitoring and analysis.",
    technologies: ["Python", "Web Scraping", "JSON"],
    github: "https://github.com/germanica-1/e-quakes",
  },
  {
    title: "CodeSpire",
    description:
      "A space-invader-style game built in Python featuring multiple levels, challenges, and entities — created as a school expo exhibit to entertain students.",
    technologies: ["Python", "Game Development"],
    github: "https://github.com/germanica-1/CodeSpire",
  },
]

export const testimonials: Testimonial[] = [
  {
    name: "Matt Agustin",
    role: "Game Developer",
    avatar: "MA",
    quote:
      "Kirvy's CodeSpire caught everyone's attention at the school expo. Building a polished, multi-level Python game from scratch takes real dedication — you can feel the engineering and creativity in every challenge he designed.",
    link: "https://www.facebook.com/matt.agustin.23626",
  },
  {
    name: "Steven Ng",
    role: "Web Developer",
    avatar: "SN",
    quote:
      "His STI ChatBot is one of the cleanest React + TypeScript projects I've seen from a student. Tight component structure, smooth Vite setup, and a real integration with the Gemini API — exactly how modern web apps should be built.",
    link: "https://www.facebook.com/stevennygel.ramal",
  },
  {
    name: "Rafael Celada",
    role: "Developer",
    avatar: "RC",
    quote:
      "The SeNT System genuinely impressed me. Pairing a Raspberry Pi with FaceNet embeddings and a Supabase-backed Flask API to handle attendance and parent notifications end-to-end shows he can ship real computer-vision systems, not just demos.",
    link: "https://www.facebook.com/rafael.celada.1",
  },
  {
    name: "Wyn Vasquez",
    role: "Project Manager",
    avatar: "WV",
    quote:
      "From F.A.C.S with its SQLite-backed fingerprint attendance to the Face Embedding API that syncs Pi captures and triggers EmailJS alerts, Kirvy consistently delivers full hardware-to-software solutions on schedule. He's the developer you want on a high-stakes project.",
    link: "https://www.facebook.com/wyn.vsqz",
  },
]
