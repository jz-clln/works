import Link from "next/link"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-xl tracking-tight">Jabez Collano</span>
            </Link>
            <p className="text-muted-foreground max-w-sm opacity-70">
              Business automation specialist helping companies streamline operations with smart workflows, AI
              integration, and proven systems.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/jz.clln/"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/in/jabez-collano"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:jabezcollano@gmail.com" className="glassmorphic-icon">
                <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+639308662580" className="glassmorphic-icon">
                <Phone className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Services</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Book Discovery Call
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#privacy"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground opacity-70">
            &copy; {new Date().getFullYear()} JabezCollano. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
            >
              Terms
            </Link>
            <Link
              href="#privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}
