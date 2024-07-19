import { setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Events } from './components/events'
import { Faq } from './components/faq'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'

setDefaultOptions({ locale: ptBR })

export function App() {
  return (
    <>
      <Hero>Semana do Fim de Semana 2024</Hero>
      <Header />
      <main className="text-neutral-700">
        <div className="max-w-[1440px] space-y-14 px-5 py-5 pb-20 pt-10 md:space-y-20 md:px-10 md:pt-16 xl:px-64 2xl:mx-auto">
          <div className="space-y-5">
            <h2 className="text-center font-lexend text-xl font-semibold md:text-3xl">
              Semana de Saúde Mental
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                “Acolher é reconhecer o que o outro traz como legítima e
                singular necessidade de saúde”. (MS, 2013)
              </p>

              <p>
                Com o tema “O cuidado em saúde mental como direito a cidadania”
                a 10ª Semana de Saúde Mental e Inclusão Social da UFMG será
                realizada de 16 a 20 de maio.
              </p>

              <p>
                A abertura oficial será na segunda-feira, dia 16, a partir das
                10 horas, no Auditório da Reitoria, com a presença da advogada e
                subprocuradora-geral da República aposentada Deborah
                Duprat.“Acolher é reconhecer o que o outro traz como legítima e
                singular necessidade de saúde”. (MS, 2013)
              </p>
            </div>
            <button
              type="button"
              className="mx-auto block w-full max-w-40 rounded bg-primary px-5 py-2.5 text-center text-xs font-semibold text-neutral-50 md:max-w-[13.4375rem] md:text-sm"
            >
              Inscreva-se
            </button>
          </div>
          <Events />
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  )
}
