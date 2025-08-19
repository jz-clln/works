"use client"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { OutlineButton } from "@/components/ui-library/buttons/button-variants"

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-950/30 to-blue-800/30">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <div className="space-y-1">
                <AnimatedText
                  text="Ready to Automate"
                  variant="heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tighter gradient-text block"
                  animation="wave"
                />
                <AnimatedText
                  text="Your Business?"
                  variant="heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tighter gradient-text block"
                  animation="wave"
                  delay={0.1}
                />
              </div>
              <AnimatedText
                text="Get started with smart automation today and transform your business operations with proven workflows."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
            <motion.div
              className="flex flex-col gap-6 sm:flex-row sm:gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <GradientButton
                glowAmount={5}
                size="lg"
                className="px-8 py-3"
                gradientFrom="from-blue-500"
                gradientTo="to-blue-700"
                asChild
              >
                <Link href="/booking" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Discovery Call
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 1 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </GradientButton>

              <AnimatedGradientBorder
                colors={["#3b82f6", "#1e40af", "#3b82f6", "#1e40af"]}
                borderWidth={1}
                duration={6}
              >
                <OutlineButton size="lg" className="bg-background w-full h-full border-0 px-8 py-3" asChild>
                  <Link href="#about">Learn More</Link>
                </OutlineButton>
              </AnimatedGradientBorder>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
