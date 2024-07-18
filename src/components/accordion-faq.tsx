import * as Accordion from '@radix-ui/react-accordion'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import { faqs as faqData } from '../store/faqs.json'

interface FAQ {
  id: number
  question: string
  anwser: string
}

export function AccordionFaq() {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    setFaqs(faqData)
  }, [])

  return (
    <div className="space-y-10">
      <Accordion.Root type="single" collapsible className="space-y-5 pt-5">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.anwser}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion.Root>
      <button
        type="button"
        className="mx-auto my-5 block w-full max-w-[13.1875rem] rounded bg-primary px-5 py-2.5 text-center text-neutral-50"
      >
        Ver mais
      </button>
    </div>
  )
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Accordion.Item>,
  React.ComponentProps<typeof Accordion.Item>
>(function AccordionItem({ children, ...props }, forwardedRef) {
  return (
    <Accordion.Item
      {...props}
      className="group rounded-md shadow-default"
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
})

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentProps<typeof Accordion.Trigger>
>(function AccordionTrigger({ children, ...props }, forwardedRef) {
  return (
    <Accordion.Trigger
      className="flex w-full items-center justify-between rounded-md border border-neutral-100 p-4 font-lexend font-bold transition-colors duration-300 group-data-[state='open']:rounded-bl-none group-data-[state='open']:rounded-br-none group-data-[state='open']:border-primary group-data-[state='open']:bg-primary group-data-[state='open']:text-neutral-50"
      {...props}
      ref={forwardedRef}
    >
      {children}
      <FaChevronDown className="size-4 transition-transform duration-300 group-data-[state='open']:rotate-180" />
    </Accordion.Trigger>
  )
})

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentProps<typeof Accordion.Content>
>(function AccordionContent({ children, ...props }, forwardedRef) {
  return (
    <Accordion.Content
      className="rounded-bl-md rounded-br-md px-5 pb-6 pt-5"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Content>
  )
})