"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MessageSquare, Users, Zap, Target, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function AutomationSection() {
  const automations = [
    {
      title: "Missed Call Text Back",
      description: "Automatically send SMS to missed calls",
      icon: MessageSquare,
    },
    {
      title: "New Client Onboarding",
      description: "Streamlined welcome process for new clients",
      icon: Users,
    },
    {
      title: "No Show Recovery Automation",
      description: "Re-engage clients who missed appointments",
      icon: Clock,
    },
    {
      title: "Lead Nurturing Automation",
      description: "Keep prospects engaged with automated sequences",
      icon: Target,
    },
    {
      title: "Cold Lead Re-engagement",
      description: "Revive dormant leads with smart campaigns",
      icon: Zap,
    },
    {
      title: "Appointment Booking + Reminders",
      description: "Automated scheduling with smart reminders",
      icon: Calendar,
    },
  ]

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
          {/* Left Content - Automation Images */}
          <div className="space-y-4 sm:space-y-6 order-last lg:order-first">
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-gray-700">
                  <div className="w-full h-20 sm:h-24 md:h-32 bg-gray-800 rounded-lg mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">SMS Automation</h4>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-gray-700">
                  <div className="w-full h-20 sm:h-24 md:h-32 bg-gray-800 rounded-lg mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">Booking System</h4>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-gray-700">
                  <div className="w-full h-20 sm:h-24 md:h-32 bg-gray-800 rounded-lg mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">CRM Integration</h4>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-gray-700">
                  <div className="w-full h-20 sm:h-24 md:h-32 bg-gray-800 rounded-lg mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">Lead Nurturing</h4>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-first lg:order-last">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white">
                WORKFLOW AUTOMATIONS
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Automation That <span className="text-blue-400">Closes the Gaps</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover how I've built GHL workflows to handle missed calls, re-engage cold leads, and reduce no
                shows—so nothing slips through the cracks.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Automation Cards Grid */}
        <ScrollReveal delay={0.4}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {automations.map((automation, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors flex-shrink-0">
                      <automation.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">{automation.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{automation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-8 sm:mt-12">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              <Link href="/booking" className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book A Discovery Call
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
