import { Terminal } from "lucide-react"
import { GithubIcon } from "./icons"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-[#161B22]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Terminal className="w-3 h-3 text-primary" />
              </div>
              <span className="font-mono text-sm font-semibold text-foreground">
                kirvy<span className="text-primary">.</span>dev
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {year} Kirvy. All rights reserved.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/germanica-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground/60">
            <span className="text-[#3FB950]">✓</span> Open to work ·{" "}
            <span className="text-[#58A6FF]">kirvyatbusiness@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
