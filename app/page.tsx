import { HeroSection } from "@/components/cv/hero-section"
import { SidebarNav } from "@/components/cv/sidebar-nav"
import { PersonalitySection } from "@/components/cv/personality-section"
import { DenHaagSection } from "@/components/cv/denhaag-section"
import { SkillsSection } from "@/components/cv/skills-section"
import { PhilosophySection } from "@/components/cv/philosophy-section"
import { ContactSection } from "@/components/cv/contact-section"
import { Footer } from "@/components/cv/footer"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="lg:flex lg:gap-16">
          {/* Sticky Left Column */}
          <div className="lg:w-[340px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-12">
            <div>
              <HeroSection />
              <SidebarNav />
            </div>

            <div className="hidden lg:block">
              <Footer />
            </div>
          </div>

          {/* Scrollable Right Column */}
          <main className="flex-1 lg:pt-24" id="about">
            <section className="py-12">
              <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                DISCOVER MY STORY
              </h2>

              <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I believe that strong security is built on a foundation of discipline and
                  continuous learning. With over two decades of hands-on IT infrastructure
                  experience&mdash;from managing DevOps pipelines and Kubernetes clusters to
                  administering IAM for thousands of users&mdash;I&apos;ve built a deep understanding
                  of how systems work, and how they can break.
                </p>
                <p>
                  Now, I&apos;m channeling that expertise into cybersecurity. My CompTIA Security+
                  certification (SY0-701) is just the beginning. I&apos;m actively building a home lab
                  with Raspberry Pi and Kubernetes, practicing penetration testing, deploying tools like
                  Snort, Wireshark, and Metasploit, and simulating real-world attacks to sharpen my
                  defensive skills.
                </p>
                <p>
                  Based in Den Haag and fully integrated into Dutch society, I bring a unique combination
                  of entrepreneurial grit, athletic discipline, and relentless curiosity. I&apos;m not just
                  looking for a job&mdash;I&apos;m looking to build a lasting cybersecurity career, contributing
                  to the security of Dutch organizations from day one.
                </p>
              </div>
            </section>

            <div className="h-px bg-border" />
            <PersonalitySection />

            <div className="h-px bg-border" />
            <DenHaagSection />

            <div className="h-px bg-border" />
            <SkillsSection />

            <div className="h-px bg-border" />
            <PhilosophySection />

            <div className="h-px bg-border" />
            <ContactSection />

            <div className="lg:hidden">
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
