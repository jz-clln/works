"use client"
import { Calendar, FileText, Briefcase, Bot, Phone, RefreshCw, MessageSquare, UserPlus, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import Link from "next/link"
import Image from "next/image"

export function ServicesSection() {
  const frameworkFeatures = [
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "3-Page Funnel",
      description: "Landing Page, Booking Page, Thank you Page",
    },
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: "Pre-written Copy",
      description: "You can edit and customize",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      title: "Portfolio Section",
      description: "To show off your builds",
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      title: "Calendar Booking System",
      description: "With Automated reminders",
    },
  ]

  const automationServices = [
    {
      icon: <Phone className="h-8 w-8 text-red-500" />,
      title: "Missed Call Text Back",
      description: "Automatically follow up on missed calls with personalized SMS",
      borderClass: "border-glow-red",
    },
    {
      icon: <UserPlus className="h-8 w-8 text-blue-500" />,
      title: "New Client Onboarding",
      description: "Streamlined welcome sequences for new customers",
      borderClass: "border-glow-blue",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-green-500" />,
      title: "No Show Recovery Automation",
      description: "Re-engage clients who missed appointments",
      borderClass: "border-glow-green",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      title: "Lead Nurturing Automation",
      description: "Keep prospects engaged with targeted messaging",
      borderClass: "border-glow-purple",
    },
    {
      icon: <Bot className="h-8 w-8 text-yellow-500" />,
      title: "Cold Lead Re-engagement",
      description: "Revive dormant leads with smart campaigns",
      borderClass: "border-glow-yellow",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Appointment Booking + Reminders",
      description: "Complete scheduling system with automated notifications",
      borderClass: "border-glow-orange",
    },
  ]

  return (
    <section id="services" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground
        variant="gradient"
        color="rgba(59, 130, 246, 0.05)"
        secondaryColor="rgba(147, 51, 234, 0.05)"
      />

      <div className="container px-6 md:px-8">
        {/* Framework Section */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="space-y-4">
              <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">WORKFLOW AUTOMATIONS</span>
              <AnimatedText
                text="The Expert Funnel Framework Consists of:"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl lg:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="Discover how I've built GHL workflows to handle missed calls, re-engage cold leads, and reduce no shows—so nothing slips through the cracks."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Framework Features Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-20">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl"></div>
              <div className="relative p-8 rounded-2xl border border-blue-500/20 bg-card/50 backdrop-blur-sm">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Expert Funnel Framework"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              {frameworkFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-muted/50">{feature.icon}</div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground opacity-70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Automation Services Section */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Automation That Closes the Gaps"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                animation="slide"
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {automationServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard>
                  <Card
                    className={`h-full glassmorphic-card border-none overflow-hidden group soft-glow ${service.borderClass}`}
                  >
                    <CardHeader>
                      <div className="p-3 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4 tracking-tight relative text-lg">
                        {service.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </GlowingTiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>

        {/* CTA Section */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mt-16">
            <GradientButton
              glowAmount={5}
              className="px-8 py-3 text-base"
              gradientFrom="from-blue-500"
              gradientTo="to-purple-600"
              asChild
            >
              <Link href="/booking" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Get Your Custom Automation Setup
              </Link>
            </GradientButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
