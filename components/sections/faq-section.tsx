"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "Will this integrate with my current website, booking system, or calendar?",
      answer:
        "Yes, I can connect it with your website and most popular booking platforms and calendars so everything is in one place.",
    },
    {
      question: "How much setup or technical work will I need to do?",
      answer: "Very little. I handle most of the setup and guide you step by step so you can start automating quickly.",
    },
    {
      question: "Can the AI chatbot answer custom questions about my business?",
      answer: "Yes, I can train the AI to respond to questions specific to your services, policies, and client needs.",
    },
    {
      question: "Will I be able to track all leads, bookings, and follow-ups in one place?",
      answer: "Yes, you'll be able to view all leads, appointments, and communication in one organized dashboard.",
    },
    {
      question: "Do you provide support if I have questions or run into issues?",
      answer:
        "Yes, I provide ongoing support to help you troubleshoot, optimize, and make the most of your automation system.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Common questions about business automation and my services.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
