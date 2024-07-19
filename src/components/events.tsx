import { lightFormat } from 'date-fns'
import { FormEvent, useEffect, useState } from 'react'

import { events } from '../store/events.json'
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

  function handleFilterEvents(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const filters = {
      eventDate: data.get('eventDate'),
      eventType: data.get('eventType'),
    }

    if (filters.eventDate || filters.eventType) {
      const eventFilter = events.filter(
        (event) =>
          event.tag === filters.eventType ||
          lightFormat(event.date, 'yyyy-MM-dd') === filters.eventDate,
      )

      setFilteredEvents(eventFilter)
    }
  }

  useEffect(() => {
    setFilteredEvents(events)
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
        <form onSubmit={handleFilterEvents} className="space-y-5">
          <div className="flex flex-wrap items-center gap-5">
            <select
              name="eventType"
              className="grow rounded-md border border-neutral-100 bg-white px-4 py-2 text-sm text-neutral-700 shadow-default md:text-base"
            >
              <option value="">Tipos de evento</option>
              <option value="Roda de conversa">Roda de conversa</option>
              <option value="Short caption">Short caption</option>
            </select>

            <input
              type="date"
              name="eventDate"
              className="grow rounded-md border border-neutral-100 bg-white px-4 py-2 text-sm text-neutral-700 shadow-default md:text-base"
            />
          </div>
          <button
            type="submit"
            className="ml-auto block rounded border-neutral-700 bg-neutral-100 px-5 py-2 text-xs font-semibold ring-[0.2px] ring-neutral-700 md:text-sm"
          >
            Filtrar
          </button>
        </form>

        <div className="flex flex-wrap items-start gap-5">
          {filteredEvents.map((event) => (
            <ExpandableEvent key={event.id} event={event} />
          ))}
        </div>

        <div className="pt-5">
          <button
            type="button"
            className="mx-auto my-5 block w-full max-w-40 rounded bg-primary px-5 py-2.5 text-center text-sm text-neutral-50 md:max-w-[13.1875rem] md:text-base"
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  )
}
