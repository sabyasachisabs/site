"use client"

import { useEffect, useState } from "react"
import { Shield, Linkedin, Mail, MapPin, Coffee } from "lucide-react"

const TYPING_TEXT = "20+ years in IT. Now building a career in cybersecurity."

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    let index = 0
    const interval = setInterval(() => {
      if (index <= TYPING_TEXT.length) {
        setDisplayText(TYPING_TEXT.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [mounted])

  return (
    <header className="relative pb-12 pt-16 md:pt-24 md:pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-2">
          {"Hi, I'm Nehal"}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
            Dutch Citizen
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-secondary border border-border">
            Avid Reader
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-secondary border border-border">
            Aspiring Cybersecurity Professional
          </span>
        </div>

        <div className="font-mono text-muted-foreground text-sm md:text-base mb-8 h-6">
          <span className="text-primary/60">{">"} </span>
          {displayText}
          <span
            className={`inline-block w-2 h-4 bg-primary ml-0.5 translate-y-0.5 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
          I believe that strong security is built on a foundation of discipline and continuous learning.
          Based in Den Haag, I&apos;m channeling 20+ years of IT infrastructure expertise into cybersecurity,
          combining hands-on technical skills with structured problem-solving.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary/70" />
            Den Haag, Netherlands
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:nehal@email.com"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <Coffee className="w-4 h-4" />
            {"Let's Talk"}
          </a>
        </div>
      </div>
    </header>
  )
}
