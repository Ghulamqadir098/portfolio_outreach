"use client"

import { Mail, MessageCircle, ArrowRight, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-foreground">
            <img src="/Ghulam Qadir.png" alt="Ghulam Qadir Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#work" className="text-muted-foreground hover:text-foreground transition">
              Work
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition">
              Process
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-foreground leading-tight">
              I help businesses turn outdated websites into clean, professional online presences.
            </h1>
            <p className="text-lg text-muted-foreground pt-4">
              Website Developer focused on clarity, performance, and practical results.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full text-base font-semibold px-8 h-12">
                <a
                  href="https://wa.me/+923089878770?text=Hi,%20I%20want%20a%20free%20website%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Website Audit <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Credibility</h2>
        <div className="space-y-4 text-sm">
          <p className="text-foreground">
            Experience building and improving websites for small and medium businesses
          </p>
          <p className="text-foreground">
            Worked on e-commerce, service websites, and internal business tools
          </p>
          <p className="text-foreground">
            Focused on <span className="font-semibold">performance, accessibility, and user experience</span>
          </p>
          <p className="text-foreground">
            Expertise in <span className="font-semibold">modern web technologies</span> and best practices
          </p>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="max-w-4xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">Selected Work</h2>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="group">
            <div className="mb-4 bg-muted rounded-lg h-64 flex items-center justify-center text-muted-foreground overflow-hidden">
              <img
                src="/billing terminal.png"
                alt="Billing Terminal"
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Billing Terminal & Sales Portal</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Problem: Local general store wasting time on manual receipts and complex calculations.
            </p>
            <p className="text-sm text-muted-foreground">
              Solution: Developed a custom web-based sales terminal that automated billing and inventory tracking, significantly reducing checkout time.
            </p>
          </div>

          {/* Project 2 */}
          <div className="group">
            <div className="mb-4 bg-muted rounded-lg h-64 flex items-center justify-center text-muted-foreground overflow-hidden">
              <img
                src="/agency.png"
                alt="IT Services Agency"
                className="w-full h-full object-cover object-top rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-foreground mb-2">IT Services Agency Redesign</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Problem: Outdated website design failing to represent the quality of their IT services.
            </p>
            <p className="text-sm text-muted-foreground">
              Solution: Complete visual overhaul with a modern, professional design that rebuilds trust and brand authority.
            </p>
          </div>

          {/* Project 3 */}
          <div className="group">
            <div className="mb-4 bg-muted rounded-lg h-64 flex items-center justify-center text-muted-foreground overflow-hidden">
              <img
                src="/uproot-saas.png"
                alt="Uproot SaaS"
                className="w-full h-full object-cover object-top rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Uproot SaaS Platform (Laravel)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Problem: US-based client facing complex routing issues and needing a theme update for their SaaS product.
            </p>
            <p className="text-sm text-muted-foreground">
              Solution: Fixed critical routing architecture in Laravel and successfully implemented a modern theme update.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="max-w-4xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">Process</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-foreground">1</div>
            <h3 className="font-semibold text-foreground">Review</h3>
            <p className="text-sm text-muted-foreground">
              Analyze your current site, identify pain points, and understand your business goals.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-2xl font-bold text-foreground">2</div>
            <h3 className="font-semibold text-foreground">Design & Development</h3>
            <p className="text-sm text-muted-foreground">
              Build a clean, modern website optimized for performance and conversions.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-2xl font-bold text-foreground">3</div>
            <h3 className="font-semibold text-foreground">Launch & Support</h3>
            <p className="text-sm text-muted-foreground">
              Deploy your site and provide ongoing support to ensure everything runs smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-border">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Quality Over Quantity
          </h2>
          <p className="text-foreground leading-relaxed">
            I work with a limited number of clients each year to ensure I deliver exceptional results. I believe in
            building deep, collaborative partnerships focused on clarity, performance, and measurable outcomes. Rather
            than pushing quick fixes, I focus on creating sustainable solutions that grow with your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Get In Touch</h2>

        <div className="space-y-12">
          <div>
            <p className="text-foreground mb-6">
              Feel free to reach out if you'd like feedback on your current site or want to discuss a project.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:g.qadir.dev@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition"
              >
                <Mail size={18} />
                <span>g.qadir.dev@gmail.com</span>
              </a>
              <a
                href="https://wa.me/+923089878770"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ghulamqadir098/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://web.facebook.com/ghulamqadir090/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-xs text-muted-foreground">© 2026 Website Developer. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
