import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/data/portfolio"

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 bg-[#0D1117] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          command="cat testimonials.log"
          title="What People Say"
          description="Feedback from collaborators, clients, and teammates."
        />

        {/* Desktop: all cards */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Mobile/tablet: carousel */}
        <div className="lg:hidden">
          <TestimonialCard testimonial={testimonials[active]} />

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-9 h-9 border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === active ? "bg-primary w-4" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-9 h-9 border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <a
      href={testimonial.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#161B22] border border-border rounded-xl p-6 space-y-5 hover:border-primary/30 transition-colors duration-300 group cursor-pointer"
    >
      {/* Quote icon */}
      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Quote className="w-4 h-4 text-primary" />
      </div>

      {/* Quote text */}
      <blockquote className="text-foreground/90 leading-relaxed text-sm italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(88,166,255,0.2) 0%, rgba(63,185,80,0.2) 100%)",
            border: "1px solid rgba(88,166,255,0.3)",
            color: "#58A6FF",
          }}
        >
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
            {testimonial.name}
          </div>
          <div className="text-xs text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
      </div>
    </a>
  )
}
