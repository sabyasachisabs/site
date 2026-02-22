import { Brain, Search, Briefcase } from "lucide-react"

const PILLARS = [
  {
    icon: <Brain className="w-5 h-5" />,
    label: "Discipline",
    description: "Structured learning",
  },
  {
    icon: <Search className="w-5 h-5" />,
    label: "Curiosity",
    description: "Understanding how attacks work",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Business Awareness",
    description: "Protecting what matters most",
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        CYBERSECURITY PHILOSOPHY
      </h2>

      <div className="rounded-lg border border-border bg-card p-6 mt-8">
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {"Security isn\u2019t just about tools and technologies. I approach it with discipline (structured learning), curiosity (understanding how attacks work), and business awareness (protecting what matters most). My 20+ years in IT infrastructure give me the systems thinking needed to see the bigger picture."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="flex items-center gap-3 rounded-md bg-secondary/70 border border-border p-4"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                {pillar.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{pillar.label}</p>
                <p className="text-xs text-muted-foreground">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
