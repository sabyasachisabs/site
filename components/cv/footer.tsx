import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary/50" />
          <span className="font-mono">
            Designed & coded with security in mind
          </span>
        </div>
        <p className="font-mono">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
