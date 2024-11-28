"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const generalFAQs = [
  {
    question: "What is Coop Tech?",
    answer: "Coop Tech is a Career and Technical Education (CTE) program. It is part of the DOE."
  },
  {
    question: "Can I get my High School or HSE diploma at Coop Tech?",
    answer: "No. Coop Tech is not a high school and it does not offer a path to a High School or a HSE diploma"
  },
  {
    question: "What does a student receive upon completion of a Coop Tech course?",
    answer: "Students receive a Certificate of Completion from Coop Tech. This is not equivalent to a diploma or exiting credential. In addition, all courses offer career specific Industry Certification Exams that are open to all students."
  },
  {
    question: "Does Coop Tech issue the CDOS credential?",
    answer: "No. Coop Tech does not issue the CDOS credential."
  },
  {
    question: "Can Coop Tech courses be used towards the CDOS Credential?",
    answer: "Yes. Coop Tech courses are CTE certified. Students receive 3 elective CTE credits per semester that may be applied towards the CDOS credential. These credits are automatically reflected on a student's transcript upon successful completion of a course."
  },
  {
    question: "Does Coop Tech provide job placement or transition services?",
    answer: "No. Coop Tech does not provide job placement. Transition planning is the responsibility of the referring school. Coop Tech is only a part of a robust transition plan."
  },
  {
    question: "Does Coop Tech offer an internship program?",
    answer: "Coop Tech has an Office of Work-Based Learning that provides career training workshops and resources to all students. Internship opportunities are offered on an individual basis. All students are welcome to apply for an internship. Students are not guaranteed a paid internship."
  },
  {
    question: "Does Coop Tech follow the DOE calendar?",
    answer: "Yes. Coop Tech is a DOE program and follows the DOE calendar."
  },
  {
    question: "How long are Coop Tech courses?",
    answer: "Most courses are one year (2 semesters) long."
  },
  {
    question: "What is the class schedule at Coop Tech?",
    answer: "Coop Tech has two class sessions: AM (8:30-11:00 AM) and PM (12:20-2:50 PM).\n\n*The class schedule may differ for Coop Tech off-sites."
  }
]

const applicationFAQs = [
  {
    question: "Who can apply to Coop Tech?",
    answer: "In order to apply to Coop Tech, applicants must be 17-21 years old and either in high school (11th and 12th grades only), a D79 program, or post-graduates."
  },
  {
    question: "Can students who are alternately assessed apply to Coop Tech?",
    answer: "Yes."
  },
  {
    question: "Can students who are not travel trained apply to Coop Tech?",
    answer: "Yes. However, it is highly recommended that students be able to travel independently or in the process of being travel trained."
  },
  {
    question: "Who provides transportation arrangements for D75 students?",
    answer: "Transportation arrangements must be put in place by the student's D75 School."
  },
  {
    question: "Can students who graduated from high school apply to Coop Tech?",
    answer: "Yes. Post-graduates may apply to Coop Tech, provided they meet the minimum admission requirements and have not aged out of the DOE.\n\nIf post-graduates were students with individualized education plans before they graduated, they will no longer receive the special education supports and services mandated on their IEP. Post-graduates who are not travel trained are responsible for making their own transportation arrangements."
  }
]

const supportFAQs = [
  {
    question: "What Special Education supports are available at Coop Tech?",
    answer: "Coop Tech is a general education vocational program. Classes are taught by CTE teachers and vary in size from 22-28 students. Some classes have a classroom paraprofessional. The main campus has a drop-in student support center on a limited schedule."
  },
  {
    question: "Who provides additional supports and services for special education students as per a student's IEP?",
    answer: "The D75 School is responsible for any IEP mandated supports and services (i.e. individual paraprofessional support, related services, assistive technology, etc.).\n\nD75 Schools sending 4 or more students to Coop Tech are expected to provide programmatic paraprofessional support for the CTE classes."
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Frequently Asked Questions</h1>

      {/* General Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">General Information</h2>
        <Separator className="mb-6" />
        <Accordion type="single" collapsible className="w-full">
          {generalFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`general-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Application Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
        <Separator className="mb-6" />
        <Accordion type="single" collapsible className="w-full">
          {applicationFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`application-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Student Support */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Student Support</h2>
        <Separator className="mb-6" />
        <Accordion type="single" collapsible className="w-full">
          {supportFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`support-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
} 