import React from "react"

function ReactLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
    </svg>
  )
}

function TypeScriptLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="5" fill="#3178C6" />
      <text x="5" y="23" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="white">TS</text>
    </svg>
  )
}

function PythonLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 3c-3.3 0-6 .7-6 2v3.5c0 .8.7 1.5 1.5 1.5h9c1.1 0 2 .9 2 2V14h-12c-1.1 0-2 .9-2 2v5c0 1.3 2.7 2 6 2s6-.7 6-2v-2h-6v-.5H22c1.1 0 2-.9 2-2V12c0-1.3-2.7-2-6-2h-.5V8H22V5c0-1.3-2.7-2-6-2z" fill="#3776AB" />
      <path d="M16 29c3.3 0 6-.7 6-2v-3.5c0-.8-.7-1.5-1.5-1.5h-9c-1.1 0-2-.9-2-2V18h12c1.1 0 2-.9 2-2v-5c0-1.3-2.7-2-6-2s-6 .7-6 2v2h6v.5H10c-1.1 0-2 .9-2 2v5c0 1.3 2.7 2 6 2h.5V24H10v3c0 1.3 2.7 2 6 2z" fill="#FFD43B" />
      <circle cx="13.5" cy="6.5" r="1" fill="white" />
      <circle cx="18.5" cy="25.5" r="1" fill="white" />
    </svg>
  )
}

function DockerLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="14" width="4" height="4" rx="0.5" fill="#2496ED" />
      <rect x="9" y="14" width="4" height="4" rx="0.5" fill="#2496ED" />
      <rect x="14" y="14" width="4" height="4" rx="0.5" fill="#2496ED" />
      <rect x="14" y="9" width="4" height="4" rx="0.5" fill="#2496ED" />
      <rect x="19" y="14" width="4" height="4" rx="0.5" fill="#2496ED" />
      <rect x="9" y="9" width="4" height="4" rx="0.5" fill="#2496ED" />
      <path d="M28 17.5c-.5-1.5-2-2.5-4-2.5h-.5c-.3-2-1.5-3.5-3-4l-.5 1c1 .5 1.8 1.5 2 3H7c-1 0-1.8 1-2 2.5C4.5 20 5 22 7 23.5c1.5 1 3 1.5 5 1.5h8c4 0 7-2 8-5.5z" fill="#2496ED" />
    </svg>
  )
}

function GitLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="5" fill="#F05032" />
      <path d="M28 15.5l-11.5-11.5c-.8-.8-2-.8-2.8 0l-2.5 2.5 3.2 3.2c.7-.3 1.5-.1 2.1.5.5.5.7 1.3.5 2l3 3c.8-.2 1.6 0 2.1.5 1 1 1 2.8 0 3.8s-2.8 1-3.8 0c-.6-.6-.8-1.5-.5-2.2L16.5 15v8.2c.3.1.5.3.7.5 1 1 1 2.8 0 3.8s-2.8 1-3.8 0-1-2.8 0-3.8c.3-.3.6-.4 1-.5v-8.3c-.4-.1-.7-.3-1-.5-1-1-1-2.8 0-3.8.6-.6 1.4-.8 2.1-.6l-3.1-3.1-5.8 5.8c-.8.8-.8 2 0 2.8l11.5 11.5c.8.8 2 .8 2.8 0l8.1-8.1c.8-.8.8-2 0-2.9z" fill="white" />
    </svg>
  )
}

function RustLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" stroke="#CE422B" strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="4" fill="#CE422B" />
      <rect x="15" y="3" width="2" height="5" fill="#CE422B" />
      <rect x="15" y="24" width="2" height="5" fill="#CE422B" />
      <rect x="3" y="15" width="5" height="2" fill="#CE422B" />
      <rect x="24" y="15" width="5" height="2" fill="#CE422B" />
      <path d="M16 12 L12 19 L20 19 Z" fill="#CE422B" />
    </svg>
  )
}

function NodeLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 3L5 9.2v12.6L16 28l11-6.2V9.2L16 3z" fill="#339933" />
      <text x="9" y="21" fontFamily="monospace" fontWeight="bold" fontSize="10" fill="white">JS</text>
    </svg>
  )
}

function LinuxLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="13" rx="7" ry="9" fill="#FFD600" />
      <ellipse cx="16" cy="12" rx="5" ry="6" fill="#333" />
      <circle cx="13.5" cy="11" r="1.5" fill="white" />
      <circle cx="18.5" cy="11" r="1.5" fill="white" />
      <circle cx="13.5" cy="11.3" r="0.7" fill="#333" />
      <circle cx="18.5" cy="11.3" r="0.7" fill="#333" />
      <ellipse cx="16" cy="14.5" rx="2" ry="1" fill="#FFD600" />
      <path d="M10 24c-1 0-2 1-2 2h16c0-1-1-2-2-2H10z" fill="#333" />
      <path d="M11 24v-3h10v3" stroke="#333" strokeWidth="0.5" />
      <path d="M10.5 24c-.5-1-.8-3.5 1-5.5" stroke="#FFD600" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M21.5 24c.5-1 .8-3.5-1-5.5" stroke="#FFD600" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function PostgresLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="9" rx="9" ry="5.5" fill="#336791" />
      <rect x="7" y="9" width="18" height="13" fill="#336791" />
      <ellipse cx="16" cy="22" rx="9" ry="5.5" fill="#0064a5" />
      <ellipse cx="16" cy="9" rx="9" ry="5.5" fill="#0064a5" />
      <path d="M7 13.5c0 3 4 5.5 9 5.5s9-2.5 9-5.5" stroke="#4fa3d0" strokeWidth="1" fill="none" />
      <path d="M7 18c0 3 4 5.5 9 5.5s9-2.5 9-5.5" stroke="#4fa3d0" strokeWidth="1" fill="none" />
      <text x="10" y="12" fontFamily="sans-serif" fontWeight="bold" fontSize="7" fill="white">PG</text>
    </svg>
  )
}

function VimLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#019833" />
      <text x="4" y="23" fontFamily="monospace" fontWeight="bold" fontSize="15" fill="white">vim</text>
    </svg>
  )
}

type FloatClass = "float-a" | "float-b" | "float-c"

interface LogoItem {
  logo: React.ReactNode
  top: string
  left: string
  opacity: number
  floatClass: FloatClass
  dur: string
  delay: string
  rotate: number
}

const logos: LogoItem[] = [
  { logo: <ReactLogo size={42} />,      top: "10%",  left: "4%",   opacity: 0.45, floatClass: "float-a", dur: "8s",   delay: "0s",   rotate: -12 },
  { logo: <TypeScriptLogo size={36} />, top: "20%",  left: "88%",  opacity: 0.48, floatClass: "float-b", dur: "10s",  delay: "1.2s", rotate: 8   },
  { logo: <PythonLogo size={40} />,     top: "62%",  left: "3%",   opacity: 0.40, floatClass: "float-c", dur: "7s",   delay: "0.5s", rotate: 15  },
  { logo: <DockerLogo size={38} />,     top: "74%",  left: "89%",  opacity: 0.44, floatClass: "float-a", dur: "9s",   delay: "2s",   rotate: -8  },
  { logo: <GitLogo size={34} />,        top: "7%",   left: "78%",  opacity: 0.48, floatClass: "float-b", dur: "11s",  delay: "0.8s", rotate: 10  },
  { logo: <RustLogo size={36} />,       top: "44%",  left: "91%",  opacity: 0.38, floatClass: "float-c", dur: "8.5s", delay: "1.5s", rotate: -6  },
  { logo: <NodeLogo size={38} />,       top: "82%",  left: "7%",   opacity: 0.40, floatClass: "float-a", dur: "9.5s", delay: "3s",   rotate: 12  },
  { logo: <LinuxLogo size={36} />,      top: "54%",  left: "84%",  opacity: 0.36, floatClass: "float-b", dur: "7.5s", delay: "0.3s", rotate: -10 },
  { logo: <PostgresLogo size={34} />,   top: "87%",  left: "70%",  opacity: 0.38, floatClass: "float-c", dur: "10s",  delay: "2.5s", rotate: 7   },
  { logo: <VimLogo size={32} />,        top: "30%",  left: "2%",   opacity: 0.44, floatClass: "float-a", dur: "8s",   delay: "1s",   rotate: -15 },
]

export function TechLogosBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {logos.map((item, i) => (
        <div
          key={i}
          className={item.floatClass}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            opacity: item.opacity,
            transform: `rotate(${item.rotate}deg)`,
            "--dur": item.dur,
            "--delay": item.delay,
            filter: "blur(0.3px)",
          } as React.CSSProperties}
        >
          {item.logo}
        </div>
      ))}
    </div>
  )
}
