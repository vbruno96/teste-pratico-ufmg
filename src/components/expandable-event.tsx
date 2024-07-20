import * as Collapsible from '@radix-ui/react-collapsible'
import { format } from 'date-fns'
import { useState } from 'react'
import { FaMapMarkerAlt, FaMinus, FaPlus } from 'react-icons/fa'
import { IoShareSocial } from 'react-icons/io5'

import { Event } from './events'

interface ExpandableEventProps {
  event: Event
}

export function ExpandableEvent({ event }: ExpandableEventProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Collapsible.Root
      open={isExpanded}
      onOpenChange={setIsExpanded}
      className={`col-[span 1] flex gap-6 overflow-hidden rounded-md border border-neutral-100 px-5 py-6 text-neutral-700 shadow-default ${!isExpanded ? 'items-center' : 'items-start'}`}
    >
      <div className="font-lexend">
        <span className="block text-2xl font-bold">
          {format(event.date, 'dd')}
        </span>
        <span className="block text-lg font-bold uppercase">
          {format(event.date, 'MMM')}
        </span>
        <div className="my-1 h-px bg-neutral-700" />
        <span className="text-xs">{format(event.date, "HH'h'mm")}</span>
      </div>
      <div className="space-y-5">
        <span className="text-sm">{event.tag}</span>
        <h3 className="font-lexend font-bold">{event.title}</h3>
        <Collapsible.Content className="space-y-5 data-[state='closed']:animate-slide-up data-[state='open']:animate-slide-down">
          <p>{event.describe}</p>
          <div>
            <span className="flex items-center gap-1.5 font-bold">
              <FaMapMarkerAlt className="size-4 text-primary" />
              Local:
            </span>
            <a
              href={event.locale.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              {event.locale.title}
            </a>
          </div>
          <img
            src={event.img.url}
            alt={event.img.title}
            width={326}
            height={149}
            className="h-[9.31rem] w-[20.4rem] object-cover"
          />
          <button
            type="button"
            className={`flex items-center gap-1.5 font-bold`}
          >
            <IoShareSocial className="size-3.5 text-primary" />
            Compartilhar
          </button>
        </Collapsible.Content>
        <Collapsible.Trigger asChild>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded bg-primary px-5 py-2.5 text-xs font-semibold text-neutral-50 md:text-sm"
          >
            {!isExpanded ? (
              <>
                Ver mais
                <FaPlus className="size-4" />
              </>
            ) : (
              <>
                Ver menos
                <FaMinus className="size-4" />
              </>
            )}
          </button>
        </Collapsible.Trigger>
      </div>
    </Collapsible.Root>
  )
}
