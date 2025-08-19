"use client"

import { motion } from "framer-motion"
import { CheckCircle, Calendar, Clock, MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ThankYouPage() {
  const nextSteps = [
    {
      step: "1",
      title: "Check Your Email",
      description: "You'll receive a confirmation email with all the meeting details and a calendar invite.",
    },
    {
      step: "2",
      title: "Prepare Your Questions",
      description: "Think about your current business challenges and what you'd like to automate or improve.",
    },
    {
      step: "3",
      title: "Join the Call",
      description: "We'll discuss your business needs and create a custom automation strategy together.",
    },
  ]

  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com", label: "Email" },
    { icon: <Phone className="h-5 w-5" />, href: "tel:+1234567890", label: "Phone" },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground
        variant="gradient"
        color="rgba(59, 130, 246, 0.08)"
        secondaryColor="rgba(34, 197, 94, 0.08)"
      />

      <div className="container px-6 md:px-8 py-12 md:py-24">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-8 text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500" />
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                <span className="text-foreground">Booking</span>{" "}
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Confirmed!
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70">
                Thank you for scheduling your free discovery call! I'm excited to help you transform your business with
                smart automation and proven workflows.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Booking Details */}
          <ScrollReveal delay={0.2}>
            <Card className="glassmorphic-card border-glow-green">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-center flex items-center justify-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-500" />
                  Your Discovery Call Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3 text-center">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/30">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <div className="text-sm font-medium">Date</div>
                    <div className="text-sm text-muted-foreground">Friday, August 8, 2025</div>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/30">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <div className="text-sm font-medium">Time</div>
                    <div className="text-sm text-muted-foreground">9:00 AM - 9:30 AM</div>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/30">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <div className="text-sm font-medium">Timezone</div>
                    <div className="text-sm text-muted-foreground">Manila/Philippines (GMT+8)</div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button variant="outline" className="border-blue-500/50 hover:bg-blue-500/10 bg-transparent">
                    Add to Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Next Steps */}
          <ScrollReveal delay={0.3}>
            <Card className="glassmorphic-card border-glow-blue">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-center">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {nextSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center space-y-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
                        <span className="text-blue-500 font-bold text-lg">{step.step}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg">{step.title}</h3>
                      <p className="text-sm text-muted-foreground opacity-70">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal delay={0.4}>
            <Card className="glassmorphic-card border-glow-purple">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-center">Need to Get in Touch?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground opacity-70">
                  If you have any questions before our call or need to reschedule, don't hesitate to reach out.
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-full bg-muted/50 border border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-500/10 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <div className="text-muted-foreground group-hover:text-blue-500 transition-colors">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* CTA to Return Home */}
          <ScrollReveal delay={0.5}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <GradientButton
                glowAmount={5}
                className="px-8 py-3 text-base"
                gradientFrom="from-blue-500"
                gradientTo="to-purple-600"
                asChild
              >
                <Link href="/" className="flex items-center">
                  Return to Homepage
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </GradientButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
