import { ReactNode } from "react"

interface HeroProps {
  children: ReactNode
}

export function Hero({ children }: HeroProps) {
  return (
    <div className="bg-primary bg-hero bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1440px] text-center xl:px-64 xl:py-36 2xl:mx-auto">
        <h1 className="font-lexend text-4xl font-semibold text-white">
          {children}
        </h1>
      </div>
    </div>
  )
}
