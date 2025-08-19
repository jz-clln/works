"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Calendar, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutSection() {
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />, href: "https://facebook.com", label: "Facebook" },
    {
      icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "https://www.instagram.com/jz.clln/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "https://linkedin.com/in/jabez-collano",
      label: "LinkedIn",
    },
    { icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />, href: "mailto:jabezcollano@gmail.com", label: "Email" },
    { icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />, href: "tel:+639308662580", label: "Phone" },
  ]

  return (
    <section
      id="about"
      className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden"
      style={{ backgroundColor: "#001d3d" }}
    >
      <AnimatedBackground variant="waves" color="rgba(255, 255, 255, 0.05)" />

      <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          {/* Left side - Photo */}
          <ScrollReveal>
            <motion.div
              className="flex justify-center lg:justify-start order-first lg:order-first"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
                <div className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 lg:w-72 lg:h-90 xl:w-80 xl:h-96 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                  <Image
                    src="/images/profile-photo.png"
                    alt="Jabez Collano - Business Automation Specialist"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right side - Content */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <div className="mb-2 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium text-white/80 tracking-wide uppercase">ABOUT ME</span>
                </div>

                <AnimatedText
                  text="Hello, I'm Your Business"
                  variant="heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tighter text-white"
                  animation="slide"
                />

                <AnimatedText
                  text="Automation Specialist"
                  variant="heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tighter bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent"
                  animation="slide"
                  delay={0.2}
                />

                <AnimatedText
                  text="I help businesses automate their client communication and booking processes so they can save time, reduce no-shows, and grow revenue. I specialize in building smart workflows, AI chatbots, automated follow-ups, and seamless appointment systems. My goal is to make your operations smoother and give you more time to focus on what matters—serving your clients."
                  variant="paragraph"
                  className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  animation="fade"
                  delay={0.4}
                />
              </div>

              <motion.div
                className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-white bg-black hover:bg-gray-800 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book A Discovery Call
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-2 sm:p-3 rounded-full bg-white/10 border border-white/20 hover:border-white/50 transition-all duration-300 hover:bg-white/20 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div className="text-white/70 group-hover:text-white transition-colors">{social.icon}</div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
