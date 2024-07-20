import * as Accordion from '@radix-ui/react-accordion'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import { faqs as faqData } from '../../store/db.json'
import { api } from '../lib/fakeApi'

interface FAQ {
  id: number
  question: string
  anwser: string
}

export function AccordionFaq() {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  function fetchFaqs() {
    const { faqs, totalPages } = api.getFaqs()
    setFaqs(faqs)
    setTotalPages(totalPages)
  }

  function loadMoreFaqs(newPage: number) {
    const { faqs } = api.getFaqs(newPage)
    setFaqs((prevState) => [...prevState, ...faqs])
    setPage(newPage)
  }

  useEffect(() => {
    fetchFaqs()
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
        className="mx-auto my-5 block w-full max-w-40 rounded bg-primary px-5 py-2.5 text-center text-sm text-neutral-50 disabled:cursor-not-allowed disabled:opacity-75 md:max-w-[13.1875rem] md:text-base"
        disabled={page === totalPages}
        onClick={() => loadMoreFaqs(page + 1)}
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
      className="flex min-h-[5.125rem] w-full items-center justify-between rounded-md border border-neutral-100 p-4 text-left font-lexend text-sm font-bold transition-colors duration-300 group-data-[state='open']:rounded-bl-none group-data-[state='open']:rounded-br-none group-data-[state='open']:border-primary group-data-[state='open']:bg-primary group-data-[state='open']:text-neutral-50 sm:min-h-0 md:text-base"
      {...props}
      ref={forwardedRef}
    >
      {children}
      <FaChevronDown className="size-4 shrink-0 transition-transform duration-300 group-data-[state='open']:rotate-180" />
    </Accordion.Trigger>
  )
})

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentProps<typeof Accordion.Content>
>(function AccordionContent({ children, ...props }, forwardedRef) {
  return (
    <Accordion.Content
      className="rounded-bl-md rounded-br-md px-5 pb-6 pt-5 text-sm md:text-base"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Content>
  )
})
