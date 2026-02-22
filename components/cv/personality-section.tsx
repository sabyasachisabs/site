import { Rocket, Medal, BookOpen, Leaf } from "lucide-react"

interface PersonalityTrait {
  icon: React.ReactNode
  title: string
  story: string
  cyberMindset: string
  cyberDetail: string
}

const TRAITS: PersonalityTrait[] = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "The Entrepreneurial Soul",
    story:
      "For five years, I built Koolpick.com from the ground up. Managing a nationwide customer base wasn\u2019t just about sales; it was about mastering the Order-to-Cash process and taking full ownership of every risk.",
    cyberMindset: "Extreme Ownership",
    cyberDetail:
      "I don\u2019t just learn tools; I understand the business impact behind every vulnerability. Security isn\u2019t theoretical\u2014it\u2019s protecting what matters most to the organization.",
  },
  {
    icon: <Medal className="w-5 h-5" />,
    title: "The Medalist",
    story:
      "Competing at the district level in multiple sports taught me that victory is a result of structured training and resilience. Whether I\u2019m on the field or hunting vulnerabilities in a lab environment, I approach challenges with discipline and teamwork.",
    cyberMindset: "Discipline & Resilience",
    cyberDetail:
      "The same structured approach that wins medals drives my systematic vulnerability hunting and security analysis.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "My Library",
    story:
      "I read 15\u201320 books a year. This habit fuels my curiosity and keeps me sharp. My recent deep dives include penetration testing methodologies, network security, and threat intelligence, ensuring I stay ahead of evolving threats.",
    cyberMindset: "Continuous Learning",
    cyberDetail:
      "In cybersecurity, the threat landscape changes daily. My reading habit ensures I\u2019m always learning and adapting.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "The Urban Jungle",
    story:
      "My house in Den Haag is full of plants. Tending to them is my daily lesson in continuous monitoring and patience\u2014the same qualities required for effective security operations and threat detection.",
    cyberMindset: "Patience & Monitoring",
    cyberDetail:
      "Just like plants need consistent care, security infrastructure requires continuous monitoring and proactive attention.",
  },
]

export function PersonalitySection() {
  return (
    <section id="personality" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        PERSONALITY MEETS PROFESSION
      </h2>
      <p className="text-sm text-muted-foreground mb-8 lg:ml-11">
        How who I am shapes the cybersecurity skills I&apos;m building
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {TRAITS.map((trait) => (
          <div
            key={trait.title}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20">
                {trait.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {trait.title}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {trait.story}
            </p>

            <div className="rounded-md bg-secondary/70 border border-border p-3">
              <p className="text-xs font-medium text-primary mb-1">
                Cybersecurity Mindset: {trait.cyberMindset}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {trait.cyberDetail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
