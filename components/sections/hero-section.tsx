"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"

import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(59, 130, 246, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_450px] lg:gap-12 items-center">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
                <div className="mb-2 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium text-blue-500 tracking-wide uppercase block">
                    NEED HELP SYSTEMIZING YOUR BUSINESS? LET'S MAP IT OUT TOGETHER.
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tighter leading-tight">
                  <span className="text-foreground block">Transform Your Business with</span>
                  <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent block">
                    Smart Automation
                  </span>
                </h1>
                <p className="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 opacity-70 mx-auto lg:mx-0">
                  I help businesses streamline operations and scale efficiently using smart systems, automation, and
                  proven workflows that save time and increase revenue.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start"
                variants={itemVariants}
              >
                <GradientButton
                  glowAmount={5}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-700"
                  asChild
                >
                  <Link href="/booking" className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book A Discovery Call
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 1 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </GradientButton>

                <MagneticButton className="neumorphic-button w-full sm:w-auto">
                  <Link href="#about" className="px-4 sm:px-6 py-2.5 block text-center text-sm sm:text-base">
                    Learn More
                  </Link>
                </MagneticButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center lg:justify-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Helping 50+ businesses automate and scale
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full flex items-center justify-center order-first lg:order-last">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl"
              >
                <Image
                  src="/images/profile-casual.png"
                  alt="Jabez Collano - Business Automation Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
