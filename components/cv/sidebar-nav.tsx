"use client"

import { useState, useEffect } from "react"

const NAV_ITEMS = [
  { id: "about", label: "MY STORY" },
  { id: "personality", label: "WHO I AM" },
  { id: "denhaag", label: "WHY DEN HAAG" },
  { id: "skills", label: "SKILLS" },
  { id: "philosophy", label: "PHILOSOPHY" },
  { id: "contact", label: "CONTACT" },
]

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="hidden lg:flex flex-col gap-1">
      {NAV_ITEMS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`group flex items-center gap-3 py-1.5 text-xs font-medium tracking-widest transition-all text-left ${
            activeSection === id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span
            className={`block h-px transition-all ${
              activeSection === id
                ? "w-16 bg-primary"
                : "w-8 bg-muted-foreground/30 group-hover:w-16 group-hover:bg-muted-foreground"
            }`}
          />
          {label}
        </button>
      ))}
    </nav>
  )
}
