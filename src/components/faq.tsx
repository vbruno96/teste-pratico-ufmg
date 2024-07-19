import { AccordionFaq } from './accordion-faq'

export function Faq() {
  return (
    <div className="space-y-2.5 px-2.5">
      <h2 className="text-center font-lexend text-xl font-semibold md:text-3xl">
        Perguntas frequentes
      </h2>
      <AccordionFaq />
    </div>
  )
}
