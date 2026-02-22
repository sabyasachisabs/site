import { Flag, Building2, MapPin, ShieldCheck, Target, Heart } from "lucide-react"

interface DenHaagItem {
  icon: React.ReactNode
  title: string
  description: string
}

const ITEMS: DenHaagItem[] = [
  {
    icon: <Flag className="w-5 h-5" />,
    title: "Dutch Citizen",
    description:
      "Fully integrated into Dutch society. B1 Nederlands certified (March 2022). I understand the culture, the language, and the professional expectations.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "The Hague Connection",
    description:
      "Living in the international city of peace and justice. Surrounded by cybersecurity firms, government agencies, and international organizations\u2014the perfect environment for a security career.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Local Availability",
    description:
      "Ready for in-person collaboration, training, and mentorship. No remote delays, no time zone issues. I\u2019m here, committed, and ready to learn from day one.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Security-First Mindset",
    description:
      "Deep interest in EU cybersecurity landscape (NIS2, GDPR, Cyber Resilience Act). I track threat intelligence and understand how regulations shape security practices.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Structured Discipline",
    description:
      "Daily meditation, structured study routines, continuous certification prep. The discipline that built an athlete and entrepreneur now drives my cybersecurity journey.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Long-Term Commitment",
    description:
      "This is home. Family here, life here, career here. I\u2019m not looking to relocate\u2014I\u2019m looking to build a lasting cybersecurity career with a Dutch organization.",
  },
]

export function DenHaagSection() {
  return (
    <section id="denhaag" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        WHY DEN HAAG MATTERS
      </h2>
      <p className="text-sm text-muted-foreground mb-8 lg:ml-11">
        Local roots, global security perspective
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary border border-primary/20 mb-4">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
