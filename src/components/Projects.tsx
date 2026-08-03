import { useState, useMemo, useRef } from "react"
import { Folder, Search, ChevronLeft, ChevronRight, X } from "lucide-react"
import { GithubIcon } from "./icons"
import { SectionHeader } from "./SectionHeader"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { projects } from "@/data/portfolio"

const cardColor = { accent: "#58A6FF", gradient: "from-[#58A6FF]/10 to-transparent" }
const PAGE_SIZE = 6

export function Projects() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(0)
  const [visible, setVisible] = useState(true)
  const prevPage = useRef(0)
  const prevQuery = useRef("")

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return projects
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    )
  }, [query])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const pageProjects = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  function transition(fn: () => void) {
    setVisible(false)
    setTimeout(() => {
      fn()
      setVisible(true)
    }, 220)
  }

  function handleSearch(value: string) {
    if (value === prevQuery.current) return
    prevQuery.current = value
    transition(() => {
      setQuery(value)
      setPage(0)
    })
  }

  function goToPage(p: number) {
    if (p === page) return
    prevPage.current = page
    transition(() => setPage(p))
  }

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          command="tree projects/"
          title="Featured Projects"
          description="A selection of things I've built — from production apps to weekend experiments."
        />

        {/* Search bar */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search projects or technologies..."
            className="pl-9 pr-9 bg-[#161B22] border-border focus:border-[#58A6FF]/50 transition-colors"
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => handleSearch("")}
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-xs text-muted-foreground font-mono mb-6">
          {filtered.length === projects.length
            ? `// ${projects.length} projects`
            : `// ${filtered.length} of ${projects.length} projects match "${query}"`}
        </p>

        {/* Grid with fade/slide transition */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {pageProjects.length === 0 ? (
            <div className="col-span-3 py-16 text-center text-muted-foreground">
              <p className="font-mono text-sm">// no projects found for "{query}"</p>
            </div>
          ) : (
            pageProjects.map((project) => (
              <article
                key={project.title}
                className="group relative bg-[#161B22] border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-border/80 flex flex-col"
                style={{ boxShadow: "0 0 0 0 transparent" }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${cardColor.accent}18, 0 0 0 1px ${cardColor.accent}25`
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent"
                }}
              >
                {/* Header */}
                <div
                  className={`h-36 bg-gradient-to-br ${cardColor.gradient} relative flex items-center justify-center`}
                  style={{ borderBottom: `1px solid ${cardColor.accent}20` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${cardColor.accent}15`,
                      border: `1px solid ${cardColor.accent}30`,
                    }}
                  >
                    <Folder className="w-6 h-6" style={{ color: cardColor.accent }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  <h3 className="font-bold text-foreground text-base leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-[#1C2128] border border-border text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-[#1C2128] border border-border text-muted-foreground"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border text-muted-foreground hover:text-foreground hover:border-primary/40 gap-1.5 text-xs h-8"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-3.5 h-3.5" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 border-border text-muted-foreground hover:text-foreground hover:border-[#58A6FF]/40 disabled:opacity-30"
              disabled={page === 0}
              onClick={() => goToPage(page - 1)}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`h-8 w-8 rounded-md text-xs font-mono transition-all duration-200 border ${
                  i === page
                    ? "border-[#58A6FF]/60 bg-[#58A6FF]/10 text-[#58A6FF]"
                    : "border-border text-muted-foreground hover:border-[#58A6FF]/40 hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 border-border text-muted-foreground hover:text-foreground hover:border-[#58A6FF]/40 disabled:opacity-30"
              disabled={page === totalPages - 1}
              onClick={() => goToPage(page + 1)}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
