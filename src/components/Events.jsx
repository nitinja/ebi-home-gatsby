import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';

export default function Events() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    fetch(
      'https://www.embl.org/api/v1/events?_format=json&hide_body=1&start_date=today&source=contenthub'
    )
      .then(data => data.json())
      .then(data => {
        setEvents(data.slice(0, 3))
      })
  }, [])
  return (
    <div>
      {events.map(item => (
        <EventItem eventItem={item} />
      ))}
    </div>
  )
}

const EventItem = ({ eventItem }) => {
  return (
    <div>
      <p>
        {dayjs(eventItem.field_event_start_date_time).format('DD-MM-YYYY')} | {eventItem.field_event_type}
      </p>
      <a href={eventItem.field_event_more_information}>
        <h3>{eventItem.title}</h3>
        <p>{eventItem.body}</p>
      </a>
    </div>
  )
}
