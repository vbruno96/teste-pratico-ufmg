import { AccordionFaq } from './accordion-faq'

export function Faq() {
  return (
    <div className="space-y-2.5 px-2.5">
      <h2 className="text-center font-lexend text-3xl font-semibold">
        Perguntas frequentes
      </h2>
      <AccordionFaq />
    </div>
  )
}
