"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 7)) // August 2025
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const timeSlots = ["08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"]

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const bookingPayload = {
        date: `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`,
        time: selectedTime,
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        company: bookingData.company,
        message: bookingData.message,
        timestamp: new Date().toISOString(),
        timezone: "GMT+08:00 Manila/Philippines",
      }

      const response = await fetch("https://n8n.srv834305.hstgr.cloud/webhook/portfolio-website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingPayload),
      })

      if (response.ok) {
        window.location.href = "/thank-you"
      } else {
        alert("There was an error submitting your booking. Please try again.")
      }
    } catch (error) {
      console.error("Booking submission error:", error)
      alert("There was an error submitting your booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime) {
      setShowBookingForm(true)
    }
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    setSelectedDate(null)
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    setSelectedDate(null)
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(59, 130, 246, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-8 sm:mb-12">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs sm:text-sm font-medium text-blue-500 tracking-wide uppercase block">
                NEED HELP SYSTEMIZING YOUR BUSINESS? LET'S MAP IT OUT TOGETHER.
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold tracking-tighter">
                Book Your Free Discovery Call
              </h1>
              <p className="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 opacity-70 mx-auto">
                This is a no-pressure, no-obligation call where we'll uncover what's slowing down your business and show
                you how to fix it using smart systems, automation, and better workflows.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <Card className="glassmorphic-card border-glow-blue">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-heading text-center">Discovery Call</CardTitle>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>30 Mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      {monthNames[currentMonth.getMonth()]} {selectedDate}, {currentMonth.getFullYear()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Manila/Philippines (GMT+8)</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6">
                {!showBookingForm ? (
                  <>
                    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px]">
                      <div className="space-y-4 order-last lg:order-first">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-base sm:text-lg font-heading font-semibold">Select Date & Time</h3>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <Button variant="ghost" size="sm" onClick={prevMonth} className="hover:bg-blue-500/10 p-2">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <h4 className="text-base sm:text-lg font-semibold">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                          </h4>
                          <Button variant="ghost" size="sm" onClick={nextMonth} className="hover:bg-blue-500/10 p-2">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-7 gap-1 mb-4">
                          {dayNames.map((day) => (
                            <div
                              key={day}
                              className="p-2 text-center text-xs sm:text-sm font-medium text-muted-foreground"
                            >
                              {day}
                            </div>
                          ))}
                          {emptyDays.map((_, index) => (
                            <div key={`empty-${index}`} className="p-2"></div>
                          ))}
                          {days.map((day) => (
                            <motion.button
                              key={day}
                              onClick={() => setSelectedDate(day)}
                              className={`p-2 sm:p-3 text-xs sm:text-sm rounded-lg transition-all duration-200 hover:bg-blue-500/20 min-h-[40px] sm:min-h-[44px] ${
                                selectedDate === day
                                  ? "bg-blue-500 text-white"
                                  : day === 8
                                    ? "bg-blue-500/10 text-blue-400 font-medium"
                                    : "hover:bg-muted/50"
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              disabled={day < 8}
                            >
                              {day}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 order-first lg:order-last">
                        <h4 className="text-base sm:text-lg font-heading font-semibold">Available Times</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                          {timeSlots.map((time) => (
                            <motion.button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`w-full p-2.5 sm:p-3 text-xs sm:text-sm rounded-lg border transition-all duration-200 ${
                                selectedTime === time
                                  ? "bg-blue-500 text-white border-blue-500"
                                  : "border-border hover:border-blue-500/50 hover:bg-blue-500/10"
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {time}
                            </motion.button>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-border/50">
                          <div className="text-xs sm:text-sm text-muted-foreground mb-2">Time zone</div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>GMT+08:00 Manila/Philippines (GMT+8)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-6 sm:mt-8">
                      <GradientButton
                        glowAmount={5}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
                        gradientFrom="from-blue-500"
                        gradientTo="to-blue-700"
                        disabled={!selectedDate || !selectedTime}
                        onClick={handleConfirmBooking}
                      >
                        Continue to Booking Details
                      </GradientButton>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-lg sm:text-xl font-heading font-semibold">Complete Your Booking</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Selected: {monthNames[currentMonth.getMonth()]} {selectedDate}, {currentMonth.getFullYear()} at{" "}
                        {selectedTime}
                      </p>
                    </div>

                    <form onSubmit={handleBookingSubmit} className="space-y-4 max-w-md mx-auto">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={bookingData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="glassmorphic-input text-sm sm:text-base"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={bookingData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="glassmorphic-input text-sm sm:text-base"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="glassmorphic-input text-sm sm:text-base"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={bookingData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="glassmorphic-input text-sm sm:text-base"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm">
                          Tell us about your business challenges
                        </Label>
                        <Textarea
                          id="message"
                          rows={3}
                          value={bookingData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="glassmorphic-input text-sm sm:text-base"
                          placeholder="What specific areas of your business would you like to automate or improve?"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowBookingForm(false)}
                          className="w-full sm:flex-1 text-sm sm:text-base"
                        >
                          Back
                        </Button>
                        <GradientButton
                          type="submit"
                          glowAmount={5}
                          className="w-full sm:flex-1 text-sm sm:text-base"
                          gradientFrom="from-blue-500"
                          gradientTo="to-blue-700"
                          disabled={isSubmitting || !bookingData.name || !bookingData.email}
                        >
                          {isSubmitting ? "Booking..." : "Confirm Booking"}
                        </GradientButton>
                      </div>
                    </form>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
