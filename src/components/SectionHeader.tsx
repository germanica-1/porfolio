interface SectionHeaderProps {
  command: string
  title: string
  description?: string
}

export function SectionHeader({ command, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 space-y-3">
      {/* Terminal command */}
      <div className="inline-flex items-center gap-1 font-mono text-sm">
        <span className="text-[#3FB950]">$</span>
        <span className="text-muted-foreground">{command}</span>
      </div>

      {/* Section title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
        {title}
      </h2>

      {/* Optional description */}
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}

      {/* Accent line */}
      <div className="flex items-center gap-3 pt-1">
        <div className="h-px w-12 bg-primary/60" />
        <div className="h-px w-4 bg-primary/30" />
        <div className="h-px w-2 bg-primary/15" />
      </div>
    </div>
  )
}
