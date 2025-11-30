import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-wider">
              <span className="text-primary">SKY</span>
              <span className="text-foreground"> LIT</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">Rooftop Cafe Experience</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {new Date().getFullYear()} SKY LIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
