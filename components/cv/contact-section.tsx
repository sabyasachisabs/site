import { Coffee, Mail, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 pb-24">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        {"LET'S CONNECT"}
      </h2>

      <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 mt-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary border border-primary/20">
            <Coffee className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {"Let\u2019s Grab a Coffee in Den Haag"}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          Looking for entry-level cybersecurity opportunities, internships, or mentorship.
          Ready to bring structured discipline, hands-on technical skills, and 20+ years of IT
          problem-solving to your security team. I&apos;m here, local, and eager to learn.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:nehal@email.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-secondary border border-border text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all text-sm"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
