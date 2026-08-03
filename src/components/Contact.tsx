import { useState } from "react"
import { Mail, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { GithubIcon } from "./icons"
import { SectionHeader } from "./SectionHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "kirvyatbusiness2@gmail.com",
    href: "mailto:kirvyatbusiness2@gmail.com",
    color: "#58A6FF",
  },
  {
    icon: <GithubIcon className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/germanica-1",
    href: "https://github.com/germanica-1",
    color: "#F0F6FC",
  },
]

type Status = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `Portfolio inquiry: ${formData.get("subject") || "New message"}`,
      from_name: "Portfolio Contact Form",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        setStatus("success")
        form.reset()
        toast.success("Message sent!", {
          description: "Thanks for reaching out — I'll get back to you within 12 hours.",
        })
      } else {
        setStatus("error")
        toast.error("Something went wrong.", {
          description: data.message || "Please try again or email me directly.",
        })
      }
    } catch {
      setStatus("error")
      toast.error("Network error.", {
        description: "Please check your connection and try again.",
      })
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          command="./contact.sh"
          title="Get In Touch"
          description="Have a project in mind or just want to chat? I'm always open to new opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: invitation */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Let's Build Something Together.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a startup idea, need a feature built, want to
                collaborate on open-source, or just want to connect — my inbox is
                always open.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond within 12 hours.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[#161B22] border border-border rounded-xl p-4 hover:border-primary/40 hover:bg-[#1C2128] transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      background: `${link.color}15`,
                      border: `1px solid ${link.color}25`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">{link.label}</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time note */}
            <div className="bg-[#161B22] border border-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#3FB950] mt-1.5 shrink-0 animate-pulse" />
                <div>
                  <div className="text-sm font-medium text-foreground">Available Now</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Open to full-time roles, freelance, and consulting engagements.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="bg-[#161B22] border border-border rounded-xl p-6 sm:p-8">
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="font-mono text-primary text-sm">$ send_message</span>
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Honeypot field to deter bots — hidden from users */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Kirvy"
                    className="bg-[#1C2128] border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary/30 focus-visible:border-primary/50 h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="kirvy@gmail.com"
                    className="bg-[#1C2128] border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary/30 focus-visible:border-primary/50 h-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm text-muted-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project collaboration, freelance inquiry..."
                  className="bg-[#1C2128] border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary/30 focus-visible:border-primary/50 h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="bg-[#1C2128] border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary/30 focus-visible:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium gap-2 h-10"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
