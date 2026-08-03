import { useEffect, useRef, useState } from "react"
import {
  GraduationCap,
  MapPin,
  User,
  Monitor,
  Server,
  Brain,
  Wrench,
} from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/portfolio"

function useCountUp(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return value
}

const skillIconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
}

const categoryColors = {
  border: "hover:border-[#58A6FF]/40",
  glow: "hover:shadow-[0_0_20px_rgba(88,166,255,0.1)]",
  iconBg: "bg-[#58A6FF]/10 text-[#58A6FF]",
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const yearsValue = useCountUp(4, 1200, hasStarted)
  const projectsValue = useCountUp(30, 1400, hasStarted)

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          command="cat about.md"
          title="About Me"
          description="A little about who I am, where I come from, and what drives me."
        />

        {/* Top row: info card left + bio & education right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Avatar + quick stats */}
          <div className="space-y-6">
            {/* Avatar card */}
            <div className="bg-[#161B22] border border-border rounded-xl p-6 flex flex-col items-center text-center gap-4">
              <div
                className="w-28 h-28 rounded-2xl overflow-hidden relative"
                style={{ border: "2px solid rgba(88,166,255,0.3)" }}
              >
                <img
                  src="/profile.png"
                  alt="Kirvy Gian Perez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Kirvy Gian Perez</h3>
                <p className="text-muted-foreground text-sm font-mono mt-0.5">
                  Systems Developer
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Quezon City, Philippines</span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 bg-[#1C2128] border border-border rounded-lg px-4 py-2.5 w-full justify-center">
                <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse" />
                <span className="text-sm text-foreground font-medium">
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Animated stats — only Years Exp and Projects */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#161B22] border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary font-mono">
                  {yearsValue}+
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">Years Exp.</div>
              </div>
              <div className="bg-[#161B22] border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary font-mono">
                  {projectsValue}+
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">Projects</div>
              </div>
            </div>
          </div>

          {/* Right: Biography + Education */}
          <div className="space-y-6">
            {/* Bio */}
            <div className="bg-[#161B22] border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <User className="w-4 h-4" />
                Biography
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I'm a BSIT with a specialization in Web and Mobile Applications student at FEU Institute of Technology who enjoys building reliable                     software that solves real-world problems. I'm passionate about creating modern web applications, business systems, and automation tools                 that simplify workflows and improve everyday experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                My journey started with curiosity about programming and has grown into a passion for full-stack development, Linux, and AI-powered                      solutions. I'm always learning, building, and refining my skills with one goal in mind: creating software that's practical, reliable,                   and built to make a difference.
              </p>
            </div>

            {/* Education */}
            <div className="bg-[#161B22] border border-border rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <GraduationCap className="w-4 h-4" />
                Education
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  B.S. Information Technology Specialized in Mobile and Web Development
                </div>
                <div className="text-muted-foreground text-xs mt-0.5">
                  FEU - TECH, Manila · Current
                </div>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Focus areas: Systems Programming, Web Development, Mobile App Developent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills subsection within About */}
        <div className="mt-16">
          <div className="mb-8 space-y-2">
            <div className="inline-flex items-center gap-1 font-mono text-sm">
              <span className="text-[#3FB950]">$</span>
              <span className="text-muted-foreground">ls skills/</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Skills & Technologies
            </h3>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              A curated set of tools, languages, and frameworks I work with regularly.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <div className="h-px w-12 bg-primary/60" />
              <div className="h-px w-4 bg-primary/30" />
              <div className="h-px w-2 bg-primary/15" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              return (
                <div
                  key={category.name}
                  className={`bg-[#161B22] border border-border rounded-xl p-6 transition-all duration-300 ${categoryColors.border} ${categoryColors.glow}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${categoryColors.iconBg}`}>
                      {skillIconMap[category.icon]}
                    </div>
                    <h4 className="font-semibold text-foreground">{category.name}</h4>
                    <span className="ml-auto font-mono text-xs text-muted-foreground">
                      {category.skills.length} tools
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-[#1C2128] border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default select-none"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
