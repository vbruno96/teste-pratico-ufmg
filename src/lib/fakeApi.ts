import { lightFormat } from 'date-fns'

import { events, faqs } from '../../store/db.json'

function filterEvents(eventType?: string, eventDate?: string) {
  return events.filter(
    (event) =>
      event.tag === eventType ||
      lightFormat(event.date, 'yyyy-MM-dd') === eventDate,
  )
}

export const api = {
  getEvents: (page = 1, eventType?: string, eventDate?: string) => {
    const totalPerPage = 2
    const filteredEvents =
      eventDate || eventType ? filterEvents(eventType, eventDate) : events

    const totalItems = filteredEvents.length
    const totalPages = Math.ceil(totalItems / totalPerPage) || 1

    const start = (page - 1) * totalPerPage
    const end = start + totalPerPage

    const data = filteredEvents.slice(start, end)

    return {
      totalPages,
      events: data,
    }
  },

  getFaqs: (page = 1) => {
    const totalPerPage = 4
    const totalItems = faqs.length
    const totalPages = Math.ceil(totalItems / totalPerPage) || 1

    const start = (page - 1) * totalPerPage
    const end = start + totalPerPage

    const data = faqs.slice(start, end)

    return {
      totalPages,
      faqs: data,
    }
  },
}
