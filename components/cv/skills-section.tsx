import { Shield, Terminal, Network, Lock, Bug, Cloud, Award } from "lucide-react"

interface SkillCategory {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: <Network className="w-5 h-5" />,
    title: "Infrastructure Foundation",
    description:
      "20+ years managing DevOps, Kubernetes, Docker, CI/CD pipelines, and Infrastructure as Code. Strong foundation in systems architecture and automation.",
    tags: ["DevOps", "Kubernetes", "Docker", "CI/CD", "IaC"],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Network Security Understanding",
    description:
      "Hands-on experience with firewalls, VPNs, network segmentation, and secure configurations. Building home lab for penetration testing practice.",
    tags: ["Firewalls", "VPNs", "Network Segmentation", "TCP/IP", "DNS"],
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Identity & Access Management",
    description:
      "Managed IAM for 3,000+ users. Deep understanding of least privilege, RBAC, MFA, and authentication protocols (OAuth, SAML, LDAP).",
    tags: ["IAM", "RBAC", "MFA", "OAuth", "SAML", "LDAP"],
  },
  {
    icon: <Bug className="w-5 h-5" />,
    title: "Security Operations Interest",
    description:
      "Active study of SIEM tools, log analysis, incident response procedures, and threat hunting methodologies. Learning to think like both defender and attacker.",
    tags: ["SIEM", "Log Analysis", "Incident Response", "Threat Hunting"],
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Scripting & Automation",
    description:
      "Python, Bash, and YAML for security automation. Creating scripts for vulnerability scanning, log parsing, and security task automation.",
    tags: ["Python", "Bash", "YAML", "Automation"],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cybersecurity Home Lab",
    description:
      "Raspberry Pi/Kubernetes setup for hands-on learning: practicing penetration testing, deploying security tools (Snort, Wireshark, Metasploit), and simulating attacks.",
    tags: ["Raspberry Pi", "Snort", "Wireshark", "Metasploit"],
  },
]

interface CertItem {
  name: string
  detail: string
  status: "earned" | "skill"
}

const CERTS: CertItem[] = [
  { name: "CompTIA Security+", detail: "SY0-701 \u2022 Dec 2025", status: "earned" },
  { name: "B1 Nederlands", detail: "Certified \u2022 March 2022", status: "earned" },
  { name: "Python", detail: "Scripting & Automation", status: "skill" },
  { name: "Linux", detail: "System Administration", status: "skill" },
  { name: "Networking", detail: "TCP/IP, DNS, Firewalls", status: "skill" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        TECHNICAL SKILLS & CERTIFICATIONS
      </h2>
      <p className="text-sm text-muted-foreground mb-8 lg:ml-11">
        20+ years of IT infrastructure expertise transitioning to cybersecurity
      </p>

      {/* Credentials Bar */}
      <div className="flex flex-wrap gap-3 mb-8">
        {CERTS.map((cert) => (
          <div
            key={cert.name}
            className={`flex items-center gap-2.5 rounded-lg border px-4 py-2.5 ${
              cert.status === "earned"
                ? "border-primary/30 bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <Award
              className={`w-4 h-4 shrink-0 ${
                cert.status === "earned" ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <div>
              <p className={`text-xs font-semibold ${
                cert.status === "earned" ? "text-primary" : "text-foreground"
              }`}>
                {cert.name}
              </p>
              <p className="text-xs text-muted-foreground">{cert.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20">
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {category.title}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {category.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
