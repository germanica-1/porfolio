import { useState, useEffect, useRef } from "react"
import { FileText, ChevronRight } from "lucide-react"
import { GithubIcon } from "./icons"
import { Button } from "@/components/ui/button"
import { TechLogosBackground } from "./TechLogos"

const typingStrings = [
  "Systems Developer",
  "System Developer",
  "Arduino Specialist",
  "AI Enthusiast",
  "Linux User",
  "Problem Solver",
  "Hardware Specialist",
]

function useTypingAnimation(strings: string[]) {
  const [displayed, setDisplayed] = useState("")
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = strings[stringIndex]

    const tick = () => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
          timeoutRef.current = setTimeout(tick, 80)
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
          timeoutRef.current = setTimeout(tick, 45)
        } else {
          setIsDeleting(false)
          setStringIndex((i) => (i + 1) % strings.length)
          timeoutRef.current = setTimeout(tick, 300)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 100)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [charIndex, isDeleting, stringIndex, strings])

  return displayed
}

export function Hero() {
  const typedText = useTypingAnimation(typingStrings)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Floating tech logos */}
      <TechLogosBackground />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(88,166,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Terminal window */}
        <div className="w-full max-w-3xl mx-auto">
          {/* Terminal chrome */}
          <div className="bg-[#161B22] border border-border rounded-xl overflow-hidden shadow-2xl glow-blue">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1C2128] border-b border-border">
              <span className="w-3 h-3 rounded-full dot-red" />
              <span className="w-3 h-3 rounded-full dot-yellow" />
              <span className="w-3 h-3 rounded-full dot-green" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                kirvy@dev ~ bash
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* whoami prompt */}
              <div className="font-mono text-sm text-muted-foreground">
                <span className="text-[#3FB950]">kirvy@dev</span>
                <span className="text-foreground/40">:</span>
                <span className="text-[#58A6FF]">~</span>
                <span className="text-foreground/40"> $ </span>
                <span className="text-foreground">whoami</span>
              </div>

              {/* Main heading */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">
                  Hi, I'm{" "}
                  <span
                    style={{ color: "#58A6FF" }}
                    className="relative"
                  >
                    Kirvy
                  </span>
                </h1>

                {/* Typing animation */}
                <div className="flex items-center gap-1 h-8">
                  <span className="font-mono text-lg sm:text-xl font-medium text-[#3FB950]">
                    {typedText}
                  </span>
                  <span
                    className="cursor-blink font-mono text-xl font-medium"
                    style={{ color: "#58A6FF" }}
                  >
                    |
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-xl">
                I build systems that don't go boom—creating reliable software that helps businesses automate workflows and solve real-world problems.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  onClick={() => scrollTo("projects")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-medium gap-2 px-5"
                >
                  <ChevronRight className="w-4 h-4" />
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo("contact")}
                  className="border-border text-foreground hover:bg-accent font-medium px-5"
                >
                  Contact Me
                </Button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/germanica-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg border border-border bg-[#1C2128] flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg border border-border bg-[#1C2128] flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                    <FileText className="w-4 h-4" />
                  </div>
                </a>
                <span className="text-xs text-muted-foreground font-mono ml-1">
                  GitHub · CV
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-12 gap-2 opacity-60">
          <span className="text-xs text-muted-foreground font-mono">scroll down</span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  )
}
