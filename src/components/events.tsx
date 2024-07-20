import { FormEvent, useEffect, useState } from 'react'
import { FaCircleExclamation } from 'react-icons/fa6'

import { api } from '../lib/fakeApi'
import { ExpandableEvent } from './expandable-event'

export interface Event {
  id: number
  title: string
  tag: string
  describe: string
  locale: {
    url: string
    title: string
  }
  img: {
    url: string
    title: string
  }
  date: string
}

export function Events() {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [hasFilter, setHasFilter] = useState(false)
  const [filter, setFilter] = useState<{
    eventType?: string
    eventDate?: string
  }>({})
  const [filterNotFound, setFilterNotFound] = useState(false)

  function fetchEvents() {
    const { events: data, totalPages } = api.getEvents()
    setPage(1)
    setFilteredEvents(data)
    setTotalPages(totalPages)
  }

  function loadMoreEvents(newPage: number) {
    const { events } = hasFilter
      ? api.getEvents(newPage, filter.eventType, filter.eventDate)
      : api.getEvents(newPage)
    setFilteredEvents((prevState) => [...prevState, ...events])
    setPage(newPage)
  }

  function handleFilterEvents(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const filters = {
      eventDate:
        data.get('eventDate') !== null
          ? data.get('eventDate')?.toString()
          : undefined,
      eventType:
        data.get('eventType') !== null
          ? data.get('eventType')?.toString()
          : undefined,
    }

    if (filters.eventDate || filters.eventType) {
      const eventFilter = api.getEvents(1, filters.eventType, filters.eventDate)

      if (eventFilter.events.length > 0) {
        setFilteredEvents(eventFilter.events)
        setFilter(filters)
        setHasFilter(true)
        setPage(1)
      } else {
        setFilterNotFound(true)
      }
    }
  }

  function handleResetEventFilter() {
    fetchEvents()
    setFilter({})
    setHasFilter(false)
    setFilterNotFound(false)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className="space-y-5 px-2.5 md:pb-10">
      <h2 className="text-center font-lexend text-xl font-semibold md:text-3xl">
        Programação
      </h2>
      <div className="space-y-5">
        <span className="font-lexend text-sm font-bold text-neutral-700 md:text-base">
          Filtros
        </span>
        <form
          onReset={handleResetEventFilter}
          onSubmit={handleFilterEvents}
          className="space-y-5"
        >
          <div className="flex flex-wrap items-center gap-5 md:flex-nowrap">
            <select
              name="eventType"
              className="w-full rounded-md border border-neutral-100 bg-white px-4 py-2 text-sm text-neutral-700 shadow-default md:text-base"
            >
              <option value="">Tipos de evento</option>
              <option value="Roda de conversa">Roda de conversa</option>
              <option value="Short caption">Short caption</option>
            </select>

            <input
              type="date"
              name="eventDate"
              className="w-full appearance-none rounded-md border border-neutral-100 bg-white px-4 py-2 text-sm text-neutral-700 shadow-default md:text-base"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="block rounded border-neutral-700 bg-neutral-100 px-5 py-2 text-xs font-semibold ring-[0.2px] ring-neutral-700 transition-colors duration-300 ease-in-out hover:bg-transparent md:text-sm"
            >
              Filtrar
            </button>
            {hasFilter && (
              <button
                type="reset"
                className="block rounded border-neutral-700 bg-neutral-100 px-5 py-2 text-xs font-semibold ring-[0.2px] ring-neutral-700 transition-colors duration-300 ease-in-out hover:bg-transparent md:text-sm"
              >
                Limpar
              </button>
            )}
          </div>
        </form>

        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <ExpandableEvent key={event.id} event={event} />
          ))}
          {filterNotFound && (
            <div className="absolute inset-0 flex items-center justify-center rounded-md border border-neutral-100 bg-white p-4 text-neutral-700 shadow-default">
              <div className="space-y-5">
                <FaCircleExclamation className="mx-auto size-12 text-primary" />
                <span className="block text-center font-lexend font-semibold">
                  Nenhum evento foi encontrado com o filtro informado!
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="pt-5">
          <button
            type="button"
            className="mx-auto my-5 block w-full max-w-40 rounded bg-primary px-5 py-2.5 text-center text-sm text-neutral-50 transition-colors duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-75 md:max-w-[13.1875rem] md:text-base [&:not([disabled])]:hover:bg-transparent [&:not([disabled])]:hover:text-primary [&:not([disabled])]:hover:ring-1 [&:not([disabled])]:hover:ring-primary"
            disabled={page === totalPages}
            onClick={() => loadMoreEvents(page + 1)}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  )
}
