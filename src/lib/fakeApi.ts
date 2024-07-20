import { events, faqs } from '../../store/db.json'

export const api = {
  getEvents: (page = 1) => {
    const totalPerPage = 2
    const totalItems = events.length
    const totalPages = Math.ceil(totalItems / totalPerPage) || 1

    const start = (page - 1) * totalPerPage
    const end = start + totalPerPage

    const data = events.slice(start, end)

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
