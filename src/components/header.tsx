import { FaMagnifyingGlass } from 'react-icons/fa6'

export function Header() {
  return (
    <header>
      <div className="bg-primary">
        <div className="flex max-w-[1440px] flex-wrap items-center gap-6 px-5 pb-7 pt-4 md:px-10 lg:flex-nowrap lg:justify-between lg:gap-0 xl:px-40 2xl:mx-auto">
          <div className="flex items-center gap-7">
            <img src="/UFMG.svg" alt="Marca UFMG" className="size-[3.125rem]" />
            <p className="font-lexend text-xl font-bold text-white">
              IX SEMANA DE SAÚDE MENTAL E INCLUSÃO SOCIAL
            </p>
          </div>
          <form className="flex-1 lg:flex-initial">
            <div className="flex items-center gap-3 rounded-md border border-neutral-100 bg-white px-4 py-2 shadow-default lg:pl-5">
              <input
                type="text"
                name="search"
                placeholder="Faça sua busca"
                className="flex-1 border-none bg-transparent text-neutral-700 placeholder:text-neutral-700 focus:ring-transparent"
              />
              <button type="submit">
                <FaMagnifyingGlass className="size-5 text-neutral-700 lg:size-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <nav className="bg-neutral-100">
        <div className="max-w-[1440px] p-5 md:px-10 xl:px-40 2xl:mx-auto">
          <ul className="flex items-center border-neutral-700 text-xs lg:text-base [&>*:first-child]:pr-2 md:[&>*:first-child]:pr-6 lg:[&>*:first-child]:pr-12 [&>*:not(:first-child)]:px-2 md:[&>*:not(:first-child)]:px-6 lg:[&>*:not(:first-child)]:px-12 [&>*]:border-r">
            <li className="uppercase text-neutral-700">
              <a href="#">Option</a>
            </li>
            <li className="font-bold uppercase text-primary">
              <a href="#">Option</a>
            </li>
            <li className="uppercase text-neutral-700">
              <a href="#">Option</a>
            </li>
            <li className="uppercase text-neutral-700">
              <a href="#">Option</a>
            </li>
            <li className="uppercase text-neutral-700">
              <a href="#">Option</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
