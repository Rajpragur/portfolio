"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { InstagramIcon, Github, Linkedin, MailIcon, Sun, Moon, ExternalLink, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import PreLoader from "@/components/preloader"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const shimmer = {
  animate: {
    background: [
      "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      "linear-gradient(to right, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)",
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  },
}

export default function Portfolio() {
  const [theme, setTheme] = useState("light")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    let raf = 0
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setMousePosition({ x: e.clientX, y: e.clientY }))
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const projects = [
    {
      title: "Patient Pathway",
      link: "https://nurtureme.ai",
      image: "/assets/project1.png",
      category: "Health",
      description:
        "Doctor portal & patient-facing flows for automated assessments, quiz-based symptom tracking, and clinician dashboards.",
      stats: { stars: 420, users: "1.2k" },
    },
    {
      title: "ResumeAgent",
      link: "https://resumeagentanalyze.netlify.app/",
      image: "/assets/project4.png",
      category: "AI",
      description:
        "Multi-agent AI platform designed to analyze and enhance LaTeX resumes. AI-driven content suggestions to streamline the job application process.",
      stats: { stars: 420, users: "1.2k" },
    },
    {
      title: "CharchaGram",
      link: "https://charcha-manch.vercel.app/",
      image: "/assets/project2.png",
      category: "Web",
      description:
        "Civic discussion forum with gamification, constituency dashboards, and AI moderation/summaries.",
      stats: { stars: 210, users: "800" },
    },
    {
      title: "Trippr — AI Itinerary Generator",
      link: "https://trippr-app.netlify.app/",
      image: "/assets/project3.png",
      category: "AI",
      description:
        "AI-powered travel planner that generates optimized itineraries using LLMs + live place data.",
      stats: { stars: 154, users: "950" },
    },
    {
      title: "Google Calendar Clone",
      link: "https://gcalendar-clone.vercel.app/",
      image: "/assets/project5.png",
      category: "Web",
      description:
        "Google Calendar-inspired calendar application with React frontend and Node.js + MongoDB backend. Features multiple views and event management.",
      stats: { stars: 0, users: "0" },
    },
  ]

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  // Reset index when category changes
  useEffect(() => {
    setCurrentProjectIndex(0)
  }, [selectedCategory])

  // Show 3 projects starting from currentProjectIndex
  const displayedProjects = filteredProjects.slice(currentProjectIndex, currentProjectIndex + 3)

  const navigateProjects = (direction: "left" | "right") => {
    if (direction === "right") {
      setCurrentProjectIndex((prev) => Math.min(prev + 1, filteredProjects.length - 3))
    } else {
      setCurrentProjectIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  const canGoLeft = currentProjectIndex > 0
  const canGoRight = currentProjectIndex + 3 < filteredProjects.length

  const techs = [
    { src: "/assets/python.svg", alt: "Python", level: 80 },
    { src: "/assets/cpp.svg", alt: "C++", level: 80 },
    { src: "/assets/js-squared.svg", alt: "JavaScript", level: 90 },
    { src: "/assets/typescript.svg", alt: "TypeScript", level: 85 },
    { src: "/assets/react.svg", alt: "React", level: 90 },
    { src: "/assets/flask.svg", alt: "Flask", level: 70 },
    { src: "/assets/Express.svg", alt: "Express.js", level: 75 },
    { src: "/assets/tensorflow.svg", alt: "TensorFlow", level: 65 },
    { src: "/assets/sklearn.svg", alt: "scikit-learn", level: 68 },
    { src: "/assets/git.svg", alt: "Git", level: 88 },
    { src: "/assets/supabase.svg", alt: "Supabase", level: 80 },
    { src: "/assets/docker.svg", alt: "Docker", level: 78 },
  ]

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <PreLoader onLoadingComplete={() => setIsLoading(false)} />}</AnimatePresence>

      <motion.div
        className="min-h-screen bg-background text-foreground relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mouse follower */}
        <motion.div
          className="fixed w-6 h-6 rounded-full bg-primary/15 pointer-events-none z-50 hidden md:block"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
            <motion.div className="space-y-10" initial="initial" animate="animate" variants={staggerContainer}>
              <motion.div className="flex items-center gap-6" variants={fadeIn}>
                <div className="relative">
                  <Image
                    src="/assets/photo.jpeg"
                    alt="Profile"
                    width={90}
                    height={90}
                    className="rounded-lg ring-2 ring-primary/0"
                    priority
                  />
                  <motion.div className="absolute inset-0 rounded-full" variants={shimmer} animate="animate" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Raj Pratap Singh Gurjar</h1>
                  <p className="text-lg text-muted-foreground">Developer</p>
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeIn}>
                <p className="text-md leading-relaxed text-muted-foreground">
                  I love building things that live on the internet. Not limited to some specific stack, I&apos;m always looking to learn new things. I am passionate and open to new opportunities.
                </p>
                
                {/* Availability Badge */}
                <motion.div 
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-green-500/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-primary/10 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-gray-300">Currently working with some amazing people</p>
                    <p className="text-xs text-muted-foreground">Hold on internships</p>
                  </div>
                </motion.div>
                <Button className="rounded-full text-base px-8 py-6 bg-primary hover:bg-primary/90 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-black transition-colors" asChild>
                  <Link href="/assets/Resume_raj.pdf" target="_blank">
                    View Resume
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
                <div className="space-y-4">
                  {[
                    {
                      year: "2025",
                      title: "Software Engineer Intern",
                      company: "Nurtureme.ai",
                      link: "https://www.nurtureme.ai/",
                      description: "Built Patient Pathway portal for ENT doctors from ground up",
                    },
                  ].map((experience, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8 pb-8 border-l border-primary/20 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                      <div className="space-y-2">
                        <span className="text-sm text-primary font-medium">{experience.year}</span>
                        <h3 className="font-semibold">{experience.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {experience.link ? (
                            <a href={experience.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                              {experience.company}
                            </a>
                          ) : (
                            <span className="text-white">{experience.company}</span>
                          )}
                        </p>
                        <p className="text-sm">{experience.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                <div className="space-y-4">
                  {[
                    {
                      year: "2024 - 2028",
                      degree: "B.Tech in Mathematics and Computing",
                      institution: "Indian Institute of Technology, Patna",
                      description: "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems",
                    },
                    {
                      year: "2024",
                      degree: "Senior Secondary (12th)",
                      institution: "Bhaskar Academy, Indore",
                      description: "Relevant Coursework: Physics, Chemistry, Mathematics",
                    },
                  ].map((education, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8 pb-8 border-l border-primary/20 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                      <div className="space-y-2">
                        <span className="text-sm text-primary font-medium">{education.year}</span>
                        <h3 className="font-semibold">{education.degree}</h3>
                        <p className="text-sm text-muted-foreground">{education.institution}</p>
                        <p className="text-sm">{education.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Accomplishments</h2>
                <ul className="space-y-3 text-sm leading-relaxed">
                  {[ 
                    "Achieved top 0.3 percentile in JEE Mains 2024 (1.4M candidates) and top 3.2% in JEE Advanced 2024 (250K candidates).",
                    "Completed the Google Upskilling Launchpad Program (2025), a competitive initiative focused on advancing technical and professional skills through hands-on projects and mentorship.",
                    "Qualified for AIME 2024 (Ranked 32/1000+ nationally) and earned IOQM Merit Certificate (Top 1.2% of 250,000 candidates, 2022).",
                    "Codeforces – Pupil (1328), and Placed 1,812/45,000+ in the IICPC Codefest Prelims (Feb 2025).",
                    "Research Consultant, WorldQuant – Awarded Gold Certificate.",
                    "Among only two first-year teams selected from IIT Patna to represent at SIH 2024.",
                  ].map((accomplishment, index) => (
                    <motion.li
                      key={index}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{accomplishment}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Interests</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "/assets/opensource.svg", label: "Open Source", color: "bg-primary/5 text-black dark:text-gray-300" },
                    { icon: "/assets/problemsolving.svg", label: "Problem Solving", color: "bg-primary/5 text-black dark:text-gray-300" },
                    { icon: "/assets/aiml.svg", label: "AI/ML", color: "bg-primary/5 text-black dark:text-gray-300" },
                    { icon: "/assets/systemdesign.svg", label: "System Design", color: "bg-primary/5 text-black dark:text-gray-300" },
                  ].map((interest, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-2 p-3 rounded-lg border ${interest.color} hover:scale-105 transition-transform`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Image src={interest.icon} alt={interest.label} width={24} height={24} className="object-contain dark:invert" />
                      <span className="text-xs font-medium">{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeIn}>
                <div className="flex gap-4">
                  {[
                    {
                      href: "https://github.com/Rajpragur",
                      icon: <Github className="w-5 h-5" />,
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/rajpragur/",
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                    },
                    {
                      href: "mailto:rajpragur@gmail.com",
                      icon: <MailIcon className="w-5 h-5" />,
                      label: "Email",
                    },
                    {
                      href: "https://www.instagram.com/rajpragur",
                      icon: <InstagramIcon className="w-5 h-5" />,
                      label: "Instagram",
                    },
                  ].map((link, index) => (
                    <Button key={index} variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
                      <Link href={link.href} target="_blank" aria-label={link.label}>
                        {link.icon}
                      </Link>
                    </Button>
                  ))}

                  <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full hover:scale-110 transition-transform ml-auto">
                    {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-12" initial="initial" animate="animate" variants={staggerContainer}>
              <motion.section variants={fadeIn} id="projects">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="capitalize rounded-full"
                      >
                        {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  {canGoLeft && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => navigateProjects("left")}
                      className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                      aria-label="Previous projects"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProjects.map((project, i) => (
                      <motion.a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} in a new tab`}
                        className="group relative flex flex-col bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image 
                            src={project.image || "/placeholder.svg"} 
                            alt={project.title} 
                            fill 
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-6 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  {canGoRight && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => navigateProjects("right")}
                      className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                      aria-label="Next projects"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </motion.section>

              {/* Stats Section */}
              <motion.section variants={fadeIn} className="rounded-xl p-8 bg-primary/5 border">
                <h2 className="text-2xl font-bold tracking-tight mb-8">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
                  {techs.map((tech, i) => (
                    <motion.div
                      key={tech.alt}
                      className="relative p-6 rounded-xl bg-background shadow-sm border hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="flex flex-col items-center gap-4">
                        <Image 
                          src={tech.src || "/placeholder.svg"} 
                          alt={tech.alt} 
                          width={40} 
                          height={40} 
                          className="object-contain dark:invert"
                        />
                        <div className="w-full space-y-2">
                          <div className="text-sm font-medium text-center">{tech.alt}</div>
                          <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-primary" 
                              initial={{ width: 0 }} 
                              whileInView={{ width: `${tech.level}%` }} 
                              transition={{ duration: 1, delay: i * 0.1 }} 
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Currently Learning Section */}
              <motion.section variants={fadeIn} className="rounded-xl p-8 bg-gradient-to-br from-primary/5 to-transparent border">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold tracking-tight">Current Focus</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { tech: "Pytorch for Deep Learning", description: "Building production-ready AI applications", icon: "/assets/pytorch.svg" },
                    { tech: "System Design", description: "Scalable architecture patterns", icon: "/assets/systemdesign.svg" },
                    { tech: "Data Structures and Algorithms", description: "Advanced algorithms & data structures", icon: "/assets/leetcode.svg" },
                    { tech: "Open Source", description: "Contributing to open source projects", icon: "/assets/opensource.svg" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image src={item.icon} alt={item.tech} width={24} height={24} className="object-contain dark:invert" />
                      <div className="space-y-1">
                        <h3 className="font-semibold">{item.tech}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.section variants={fadeIn} className="rounded-xl p-8 bg-primary/5 border">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MailIcon className="w-5 h-5 text-primary" />
                        <span className="font-medium">Email</span>
                      </div>
                      <a href="mailto:rajpragur@gmail.com" className="text-primary hover:underline block">
                        rajpragur@gmail.com
                      </a>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Github className="w-5 h-5 text-primary" />
                        <span className="font-medium">GitHub</span>
                      </div>
                      <a href="https://github.com/Rajpragur" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">
                        @Rajpragur
                      </a>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-5 h-5 text-primary" />
                        <span className="font-medium">LinkedIn</span>
                      </div>
                      <a href="https://www.linkedin.com/in/rajpragur/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">
                        linkedin.com/in/rajpragur
                      </a>
                    </div>
                    <p className="text-muted-foreground pt-4">
                      Feel free to reach out for collaborations, opportunities, or just to say hi! 👋
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" placeholder="Your message..." rows={4} className="bg-background resize-none" />
                    </div>
                    <Button className="w-full rounded-full" onClick={() => {
                      const name = (document.getElementById('name') as HTMLInputElement)?.value;
                      const email = (document.getElementById('email') as HTMLInputElement)?.value;
                      const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
                      const subject = `Portfolio Contact from ${name}`;
                      const body = `Hi Raj, I am ${name}%0D%0D%0A%0D%0AI saw your portfolio and if you want to reply to me, you can reply me on ${email}%0D%0D%0A%0D%0AMy Message:%0D%0A${message}`;
                      window.location.href = `mailto:rajpragur@gmail.com?subject=${subject}&body=${body}`;
                    }}>
                      Send Message
                    </Button>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer variants={fadeIn} className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Raj Pratap Singh Gurjar. All rights reserved.</p>
          </motion.footer>
        </div>
      </motion.div>
    </>
  )
}
