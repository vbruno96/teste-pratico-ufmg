import { FaMagnifyingGlass } from 'react-icons/fa6'

export function Header() {
  return (
    <header>
      <div className="bg-primary">
        <div className="flex max-w-[1440px] items-center justify-between px-40 pb-7 pt-6 2xl:mx-auto">
          <div className="flex items-center gap-7">
            <img src="/UFMG.svg" alt="Marca UFMG" className="size-[3.125rem]" />
            <p className="font-lexend text-xl font-bold text-white">
              IX SEMANA DE SAÚDE MENTAL E INCLUSÃO SOCIAL
            </p>
          </div>
          <form>
            <div className="flex items-center gap-3 rounded-md border border-neutral-100 bg-white py-2 pl-5 pr-4 shadow-default">
              <input
                type="text"
                name="search"
                placeholder="Faça sua busca"
                className="border-none bg-transparent text-neutral-700 placeholder:text-neutral-700 focus:ring-transparent"
              />
              <button type="submit">
                <FaMagnifyingGlass className="size-6 text-neutral-700" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <nav className="bg-neutral-100">
        <div className="max-w-[1440px] px-40 py-5 2xl:mx-auto">
          <ul className="flex items-center border-neutral-700 [&>*:first-child]:pr-12 [&>*:not(:first-child)]:px-12 [&>*]:border-r">
            <li className="uppercase text-neutral-700">Option</li>
            <li className="font-bold uppercase text-primary">Option</li>
            <li className="uppercase text-neutral-700">Option</li>
            <li className="uppercase text-neutral-700">Option</li>
            <li className="uppercase text-neutral-700">Option</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
