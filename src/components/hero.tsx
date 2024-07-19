import { ReactNode } from 'react'

interface HeroProps {
  children: ReactNode
}

export function Hero({ children }: HeroProps) {
  return (
    <div className="bg-primary bg-hero bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1440px] px-4 py-6 text-center md:px-10 md:py-16 xl:px-64 xl:py-36 2xl:mx-auto">
        <h1 className="font-lexend text-2xl font-semibold text-white md:text-4xl">
          {children}
        </h1>
      </div>
    </div>
  )
}
